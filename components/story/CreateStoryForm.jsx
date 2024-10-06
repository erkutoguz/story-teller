"use client";

import { generateAndSaveStory } from "@/actions/story";
import React, { useState, useTransition } from "react";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";

export default function CreateStoryForm() {
  const [storyType, setStoryType] = useState("Science Fiction");
  const [mainCharacterProfession, setMainCharacterProfession] =
    useState("Detective");
  const [storyTimeline, setStoryTimeline] = useState("Ancient Times");
  const [narratorStyle, setNarratorStyle] = useState(
    "First-Person Perspective"
  );
  const [storyLength, setStoryLength] = useState("30s");

  const [isPending, startTransition] = useTransition();

  const selectStoryType = (e) => {
    setStoryType(e.target.value);
  };
  const selectStoryLength = (e) => {
    setStoryLength(e.target.value);
  };
  const selectMainCharacterProfession = (e) => {
    setMainCharacterProfession(e.target.value);
  };
  const selectStoryTimeline = (e) => {
    setStoryTimeline(e.target.value);
  };
  const selectNarratorStyle = (e) => {
    setNarratorStyle(e.target.value);
  };

  const generateStory = async () => {
    const myPromise = new Promise(async (resolve, reject) => {
      try {
        startTransition(async () => {
          await generateAndSaveStory({
            storyType,
            mainCharacterProfession,
            storyTimeline,
            narratorStyle,
            storyLength,
          });
          setStoryType("Science Fiction");
          setMainCharacterProfession("Detective");
          setStoryTimeline("Ancient Times");
          setNarratorStyle("First-Person Perspective");
          setStoryLength("30s");
          resolve();
        });
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(myPromise, {
      loading: "Loading...",
      success: "Story created. Go to your stories.",
      error: "Error when fetching",
    });
  };

  return (
    <div className="w-full border p-6 min-w-[400px]">
      {isPending && (
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
          <BeatLoader loading={true} />
        </div>
      )}
      <form
        action={() => {
          generateStory();
        }}
        className="w-full flex justify-center items-center flex-col space-y-4"
      >
        <div className="w-full">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Story Type</span>
            </div>
            <select
              className="select select-bordered"
              onChange={selectStoryType}
              value={storyType}
            >
              <option>Science Fiction</option>
              <option>Horror</option>
              <option>Thriller</option>
              <option>Romance</option>
              <option>Fantasy</option>
            </select>
          </label>
        </div>

        <div className="w-full">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Main Character Profession</span>
            </div>
            <select
              className="select select-bordered"
              onChange={selectMainCharacterProfession}
              value={mainCharacterProfession}
            >
              <option>Detective</option>
              <option>Magician</option>
              <option>Robot</option>
              <option>Traveler</option>
              <option>Warrior</option>
            </select>
          </label>
        </div>

        <div className="w-full">
          <label className="form-control ">
            <div className="label">
              <span className="label-text">Narrative Style</span>
            </div>
            <select
              className="select select-bordered"
              onChange={selectNarratorStyle}
              value={narratorStyle}
            >
              <option>First-Person Perspective</option>
              <option>Third-Person Perspective</option>
              <option>Omniscient Narrator</option>
            </select>
          </label>
        </div>

        <div className="w-full">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Story Timeline</span>
            </div>
            <select
              className="select select-bordered"
              onChange={selectStoryTimeline}
              value={storyTimeline}
            >
              <option>Ancient Times</option>
              <option>Medieval Era</option>
              <option>Steampunk</option>
              <option>19th Century</option>
              <option>World Wars</option>
              <option>Present Day</option>
              <option>Space Exploration Times</option>
              <option>Ai Dominance</option>
              <option>Dystopian Future</option>
              <option>Utopia</option>
              <option>Cyberpunk</option>
              <option>Timeless Magical Worlds</option>
            </select>
          </label>
        </div>

        <div className="w-full">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Story Length</span>
            </div>
            <select
              className="select select-bordered"
              onChange={selectStoryLength}
              value={storyLength}
            >
              <option value={"30s"}>Short (30s)</option>
              <option value={"1m"}>Long (1m)</option>
            </select>
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-44 text-white"
          disabled={isPending}
        >
          Generate
        </button>
      </form>
    </div>
  );
}
