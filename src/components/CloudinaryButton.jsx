import React, { useState, useRef } from "react"; // Import useRef
import axios from "axios";
import Button from "./Button";

export default function CloudinaryButton({ onImageUpload }) {
  const fileInputRef = useRef(null); // Create a ref for the file input

  const uploadImg = (img) => {
    const formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset", "xnszmvpl");
    axios
      .post("https://api.cloudinary.com/v1_1/dgobv1j6b/image/upload", formData)
      .then((response) => {
        const imageUrl = response.data.url;
        onImageUpload(imageUrl);
      })
      .catch((error) => {
        console.error("Upload error", error);
      });
  };

  const handleButtonClick = () => {
    // Trigger the file input click event
    fileInputRef.current.click();
  };

  return (
    <>
      {/* Modify Button to trigger file input click */}
      <Button onClick={handleButtonClick}>Upload Image</Button>
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
 *-Use URL in your img src =>{imageUrl && <img src={imageUrl} />}
 *
 */
