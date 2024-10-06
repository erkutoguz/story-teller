import { db } from "@/libs/db";

export async function findAllStoriesByUserId(userId) {
  try {
    const storyList = await db.story.findMany({ where: { userId } });
    return storyList;
  } catch (error) {
    return null;
  }
}

export async function findStoryByStoryId(storyId) {
  try {
    const story = await db.story.findUnique({
      where: {
        id: storyId,
      },
    });
    return story;
  } catch (error) {
    return null;
  }
}
