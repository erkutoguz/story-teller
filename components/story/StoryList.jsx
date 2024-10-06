"use client";
import React, { useCallback, useEffect, useState } from "react";
import StoryCard from "./StoryCard";
import FormError from "../FormError";
import { retrieveAllStories } from "@/actions/story";
import StoryDetailModal from "./StoryDetailModal";

export default function StoryList() {
  const [storyList, setStoryList] = useState([]);
  const [error, setError] = useState("");

  const onSubmit = useCallback(() => {
    retrieveAllStories().then((res) => {
      setStoryList(res.data);
      setError(res?.error);
    });
  }, [error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="flex gap-4 flex-wrap justify-center items-center">
      {storyList.map((s, i) => {
        const content = JSON.parse(s.content);
        const story = content.story;
        const events = story.plot.events;

        return (
          <StoryCard
            storyName={story.title}
            imageUrl={s.imageUrl}
            key={i}
            genre={story.genre}
            theme={story.theme.main}
            id={s.id}
          >
            <StoryDetailModal header={story.title} content={events} id={s.id} />
          </StoryCard>
        );
      })}
      <FormError message={error} />
    </div>
  );
}
