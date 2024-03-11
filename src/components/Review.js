/* eslint-disable @next/next/no-img-element */
"use client";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function Review(review) {
  const [rev, setRev] = useState(review); // review State
  const [isEdit, setIsEdit] = useState(false); // State to track edit mode
  const commentInputRef = useRef(null); // useRef for textarea

  const handleEditClick = () => {
    setIsEdit(!isEdit); // Toggle edit mode on button click
  };

  const handleSave = (updatedComment) => {
    // Implement logic to send updated comment to backend (API)
    console.log("Saving review:", updatedComment);
    console.log("rev state", rev);
    setIsEdit(false); // Exit edit mode after save
  };

  useEffect(() => {
    if (isEdit) {
      commentInputRef.current.focus();
    }
  }, [isEdit]); // Dependency on isEdit

  return (
    <div className="flex flex-col gap-3 border-b-2 p-3 pb-4">
      <div className="flex justify-between">
        <div className="flex justify-start items-center gap-3">
          <img
            src="/Images/avatar.png"
            alt="Avatar"
            className="w-20 h-20 rounded-full shadow-md"
          />
          <div className="flex flex-col">
            <h6 className=" font-medium text-lg ">{rev.employeeName}</h6>
            <span className=" text-slate-500 text-sm">
              {rev.employeeJobTitle}
            </span>
          </div>
        </div>
        {isEdit ? ( // Conditionally render icons based on edit mode
          <Button
            className="w-fit h-fit p-1 bg-primary-500"
            onClick={() => handleSave(rev.comment)}
          >
            <PlusCircleIcon className="w-4 h-4 text-white" />
          </Button>
        ) : (
          <Button
            className="w-fit h-fit p-1 bg-primary-500"
            onClick={handleEditClick}
          >
            <PencilSquareIcon className="w-4 h-4 text-white" />
          </Button>
        )}
      </div>
      <textarea
        type="text"
        className={`p-1 focus:!outline-slate-100 border-none text-slate-500 bg-transparent resize-none ${
          isEdit ? "" : "readonly"
        }`}
        ref={commentInputRef} // Assign ref to textarea
        value={rev.comment}
        onChange={(e) => setRev((old) => ({ ...old, comment: e.target.value }))} // Update review.comment in-place (consider a copy for better practice)
        disabled={!isEdit} // Disable editing when not in edit mode
      />
    </div>
  );
}
