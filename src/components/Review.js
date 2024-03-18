/* eslint-disable @next/next/no-img-element */
"use client";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import {
  HeartIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

import axios from "../axiosConfig";
import { useSelector } from "react-redux";

export default function Review(review) {
  const user = useSelector((state) => state.auth.user);
  const [rev, setRev] = useState(review); // review State
  console.log("rev: ", rev);
  const [isEdit, setIsEdit] = useState(false); // State to track edit mode
  const commentInputRef = useRef(null); // useRef for textarea

  const handleEditClick = () => {
    setIsEdit(!isEdit); // Toggle edit mode on button click
  };

  const handleSave = async (updatedComment) => {
    // Implement logic to send updated comment to backend (API)
    const updatedReview = {
      company: rev.company,
      employee: rev.employee,
      rating: rev.rating,
      comment: rev.comment,
    };
    setIsEdit(false); // Exit edit mode after save

    await axios.put(`/reviews/${rev._id}`, updatedReview).then((res) => {
      // console.log(res);
      // console.log("Saving review:", updatedComment);
      // console.log("rev state", rev);
    });
  };

  const handleDeleteClick = async () => {
    await axios.delete("/reviews/" + rev._id).then((res) => {
      console.log(res);
      review.updateReviews((old) => {
        console.log("old: ", old);
        const newState = old.filter((el) => el._id != rev._id);
        console.log(newState);
        review.updateReviewsToShow(newState);
        return newState;
      });
      // window.location.reload();
    });
  };

  const getRatingIcons = (rating) => {
    const icons = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        icons.push(<HeartIcon key={i} className="h-5 w-5 text-red-500" />); // Filled heart for ratings up to and including current index
      } /*  else {
        icons.push(<HeartIcon key={i} className="h-5 w-5 text-gray-400" />); // Outline heart for ratings beyond current index
      } */
    }
    return icons;
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
            src={rev.image}
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
        {rev?.employee === user?._id && (
          <div>
            {isEdit ? ( // Conditionally render icons based on edit mode
              <Button
                className="w-fit h-fit p-1 bg-primary-500"
                onClick={() => handleSave(rev.comment)}
              >
                <PlusCircleIcon className="w-4 h-4 text-white" />
              </Button>
            ) : (
              <>
                <Button
                  className={`w-fit h-fit p-1 mx-1 bg-primary-500 ${
                    rev.employee === user._id ? "" : "hidden"
                  }`}
                  onClick={handleEditClick}
                >
                  <PencilSquareIcon className="w-4 h-4 text-white" />
                </Button>
                <Button
                  className={`w-fit h-fit p-1 mx-1 bg-primary-500 ${
                    rev.employee === user._id ? "" : "hidden"
                  }`}
                  onClick={handleDeleteClick}
                >
                  <TrashIcon className="w-4 h-4 text-white" />
                </Button>
              </>
            )}
          </div>
        )}
      </div>
      {/* <div className="flex items-center gap-1">
        {getRatingIcons(rev.rating)}
      </div> */}
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
