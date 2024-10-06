import { renameStory } from "@/actions/story";
import { Edit } from "lucide-react";
import React, { useState } from "react";
import FormError from "../FormError";
import FormSuccess from "../FormSuccess";

export default function RenameStoryModal({ id }) {
  const [newName, setNewName] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const changeText = (e) => {
    setNewName(e.target.value);
  };
  return (
    <div>
      <button
        className="hover:bg-base-200"
        onClick={() =>
          document.getElementById(`rename-story-modal-${id}`).showModal()
        }
      >
        <Edit size={16} />
      </button>
      <dialog id={`rename-story-modal-${id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Write New Name For Story</h3>

          <div className="modal-action flex-col">
            <form
              action={async () => {
                const res = await renameStory(newName, id);
                setError(res?.error);
                setSuccess(res?.success);
              }}
              className="w-full flex justify-center items-center flex-col space-y-4"
            >
              <div className="w-full">
                <input
                  type="text"
                  placeholder="New story name"
                  className="input input-bordered w-full "
                  onChange={changeText}
                />
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
