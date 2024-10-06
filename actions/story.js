"use server";

import { chatSession } from "@/libs/gemini-ai";
import { auth } from "@/auth";
import { findAllStoriesByUserId, findStoryByStoryId } from "@/data/story";
import { db } from "@/libs/db";

const storyTemplate = `Write a {storyLength} duration story about {storyType}. Main character's proffession is {mainCharacterProfession}. Story takes place in the {storyTimeline}. The story should be told in {narratorStyle}, and should have a short but impactful plot where the main character faces a challange. All in JSON field format`;

async function generateStoryText({
  storyType,
  mainCharacterProfession,
  storyTimeline,
  narratorStyle,
  storyLength,
}) {
  const prompt = storyTemplate
    .replace("{storyType}", storyType)
    .replace("{mainCharacterProfession}", mainCharacterProfession)
    .replace("{storyTimeline}", storyTimeline)
    .replace("{narratorStyle}", narratorStyle)
    .replace("{storyLength}", storyLength);

  try {
    const result = await chatSession.sendMessage(prompt);
    return result?.response.text();
  } catch (error) {
    return null;
  }
}

async function saveStoryToDB(story, storyType, storyImageUrl) {
  const session = await auth();

  if (!session) return { error: "Invalid session!" };
  if (!story) return { error: "Missing content!" };
  if (!storyType) return { error: "Missing story type!" };

  const userId = session?.user.id;

  await db.story.create({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
      content: story,
      storyImageUrl,
      storyType,
    },
  });

  return { success: "Story saved." };
}

export async function generateAndSaveStory({
  storyType,
  mainCharacterProfession,
  storyTimeline,
  narratorStyle,
  storyLength,
}) {
  const content = await generateStoryText({
    storyType,
    mainCharacterProfession,
    storyTimeline,
    narratorStyle,
    storyLength,
  });

  await saveStoryToDB(content, storyType, storyImageUrl);

  return { success: "Successfully generated and saved!" };
}

export async function renameStory(newName, storyId) {
  if (!storyId || !newName) return { error: "Bad request!" };

  const story = await findStoryByStoryId(storyId);
  if (!story) return { error: "Story not found!" };

  const content = JSON.parse(story.content);
  content.story.title = newName;
  await db.story.update({
    where: {
      id: storyId,
    },
    data: {
      content: JSON.stringify(content),
    },
  });
  return {
    success: "Story name successfully changed! Close modal and refresh page.",
  };
}

export async function retrieveAllStories() {
  const session = await auth();

  if (!session) return { error: "Invalid session!" };

  const storyList = await findAllStoriesByUserId(session?.user.id);
  return { data: storyList, success: true };
}
