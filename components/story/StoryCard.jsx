"use client";
import React from "react";
import { motion } from "framer-motion";
import RenameStoryModal from "./RenameStoryModal";

export default function StoryCard({
  storyName,
  children,
  theme,
  genre,
  characters,
  id,
}) {
  return (
    <motion.div
      initial={{ scale: [1.02] }}
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: [[1.02, 1]] }}
      className="card py-2 w-[300px] shadow-xl bg-base-300 "
    >
      <div className="w-full gap-2 flex items-center justify-center">
        <h2 className="card-title">{storyName}</h2>
        <RenameStoryModal id={id} />
      </div>
      <div className="card-body !py-2">
        <div class="flex mb-3 justify-between">
          <span class=" font-bold">Theme:</span>
          <span class=" w-[80%]">{theme}</span>
        </div>
        <div class="flex mb-3 justify-between">
          <span class=" font-bold">Genre:</span>
          <span class=" w-[80%]">{genre}</span>
        </div>
        {/* <div class="flex justify-between">
          <span class=" font-bold">Characters:</span>
          <span class="w-[80%] gap-2 ml-2">
            {characters.map((c, i) => {
              return <span key={i}> {c}</span>;
            })}
          </span>
        </div> */}
        <div>{children}</div>
      </div>
    </motion.div>
  );
}
