import React, { useState, useRef } from "react"; // Import useRef
import axios from "axios";
import Button from "./Button";
import { loadingSvg } from "@/app/(auth)/(authLayout)/login/page";

export default function CloudinaryButton({ onImageUpload }) {
  const fileInputRef = useRef(null); // Create a ref for the file input
  const [loading, setLoading] = useState(false);

  const uploadImg = (img) => {
    const formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset", "xnszmvpl");
    setLoading(true);
    axios
      .post("https://api.cloudinary.com/v1_1/dgobv1j6b/image/upload", formData)
      .then((response) => {
        const imageUrl = response.data.url;
        onImageUpload(imageUrl);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Upload error", error);
      });
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  return (
    <>
      <Button
        onClick={handleButtonClick}
        className={`bg-primary-light ${loading && " bg-slate-500"}`}
        disabled={loading}
      >
        {loading && loadingSvg}
        Upload Image
      </Button>
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef} // Attach the ref to the input
        onChange={(e) => uploadImg(e.target.files[0])}
      />
    </>
  );
}

/**
 * How to use it in any page:
 *- Define State to hold imageURL => const [imageUrl, setImageUrl] = useState(null)
 *- Define function to handle the change =>const handleImageUpload = (url) => {setImageUrl(url);}
 *- Use the button and pass handle function as props =>  <CloudinaryButton onImageUpload={handleImageUpload} />
 *- Use URL in your img src =>{imageUrl && <img src={imageUrl} />}
 *
 */
