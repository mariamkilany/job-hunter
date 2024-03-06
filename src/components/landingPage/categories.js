import React from "react";
// import intelLogo from "../../../public/Images/logo/intel.png";
// import facebookLogo from "Images/logo/facebookLogo.png";

const Categories = () => {
  return (
    <div className="container py-8 mx-auto">
      <h2 className="text-3xl font-bold  ">
        Explore our <span className="text-lightGreen"> Compaines</span>
      </h2>

      <div className="grid  gap-10  py-8  sm:auto-cols-auto md:grid-cols-5 ">
        <div>
          <img
            src="/Images/logo/intel.png"
            style={{
              width: "100%",
              height: "90px",
              filter: "brightness(0)",
              filter: "grayscale(1)",
            }}
          ></img>
        </div>
        <div>
          <img
            src="/Images/logo/facebookLogo.png"
            style={{
              width: "100%",
              height: "90px",
              filter: "brightness(0)",
              filter: "grayscale(1)",
            }}
          ></img>
        </div>
        <div>
          <img
            src="/Images/logo/microsoft.webp"
            style={{
              width: "100%",
              height: "90px",
              filter: "brightness(0)",
              filter: "grayscale(1)",
            }}
          ></img>
        </div>
        <div>
          <img
            src="/Images/logo/tesla.jpg"
            style={{
              width: "100%",
              height: "90px",
              filter: "brightness(0)",
              filter: "grayscale(1)",
            }}
          ></img>
        </div>
        <div>
          <img
            src="/Images/logo/googleLogo.png"
            style={{
              width: "100%",
              height: "90px",
              filter: "brightness(0)",
              filter: "grayscale(1)",
            }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Categories;
