"use client";
import React, { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";

const ContactForm = () => {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleMailtoClick = () => {
    const mailtoLink = `mailto:${"youssefadly404@gmail.com"}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div>
      <header className="p-10 pt-40 bg-primary">
        <h1 className="text-6xl text-gray-100 font-semibold text-center">
          Contact with Us...
        </h1>
      </header>
      <div className="p-10 ">
        <div className="md:w-1/2 p-6 m-auto flex flex-col gap-4 shadow-md rounded-md ">
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Your email here.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Label>Subject</Label>
            <Input
              type="text"
              placeholder="Email subject.."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div>
            <Label>Message</Label>
            <textarea
              className="border border-gray-300 rounded-md w-full h-60"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center">
            <Button onClick={handleMailtoClick}>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
