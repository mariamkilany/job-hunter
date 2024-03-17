import React from "react";
import {
  PencilSquareIcon,
  LinkIcon,
  EnvelopeIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { v4 as uuid } from "uuid";

const ContactCompany = ({ company }) => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-2">Contact</h1>
        <div className="flex gap-2">
          <PencilSquareIcon className="w-5 " color="#4640DE" />
          <PlusIcon className="w-5 " color="#4640DE" />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {Object.keys(company.links).map((link) => {
          if (company.links[link] !== "") {
            return (
              <span
                key={uuid()}
                className="flex p-2 mr-2 rounded"
                style={{ border: "0.5px solid #4640DE", color: "#4640decc" }}
              >
                <LinkIcon color="#4640DE" className="w-5 mr-2" />
                {company.links[link].replace(/(?:https?:\/\/)?(?:www\.)?/i, "")}
              </span>
            );
          }
        })}
      </div>
    </>
  );
};

export default ContactCompany;
