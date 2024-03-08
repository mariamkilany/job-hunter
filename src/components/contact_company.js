import React from "react";
import {
  PencilSquareIcon,
  LinkIcon,
  EnvelopeIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
const ContactCompany = () => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-2">Contact</h1>
        <div className="flex gap-2">
        <PencilSquareIcon className="w-5 " color="#4640DE" />
        <PlusIcon className="w-5 " color="#4640DE" /></div>
      </div>

      <div className="flex ">
        <span
          className="flex p-2 mr-2 rounded"
          style={{ border: "0.5px solid #4640DE", color: "#4640decc" }}
        >
          <LinkIcon color="#4640DE" className="w-5 mr-2" />
          linkedin.com/company/nomad
        </span>
        <span
          className="flex p-2 rounded"
          style={{ border: "0.5px solid #4640DE", color: "#4640decc" }}
        >
          <EnvelopeIcon color="#4640DE" className="w-5 mr-2" />
          nomad@gmail.com
        </span>
      </div>
    </>
  );
};

export default ContactCompany;
