import { BookOpenText } from "lucide-react";
import React from "react";

export default function StoryDetailModal({ header, content, id }) {
  return (
    <div className="flex flex-col justify-center ">
      <button
        className="btn justify-end self-end"
        onClick={() =>
          document.getElementById(`story-detail-modal-${id}`).showModal()
        }
      >
        <BookOpenText />
      </button>
      <dialog id={`story-detail-modal-${id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">{header}</h3>
          {content.map((e, i) => {
            return (
              <p className="py-4" key={i}>
                {e.description}
              </p>
            );
          })}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
