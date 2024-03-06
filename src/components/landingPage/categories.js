import React from "react";
// import intelLogo from "../../../public/Images/logo/intel.png";
// import facebookLogo from "Images/logo/facebookLogo.png";

const Categories = () => {
  return (
    <div className="container py-8 mx-auto">
      <h2 className="text-3xl font-bold  ">
        Explore our <span className="text-primary"> Compaines</span>
      </h2>

      <div className="grid  gap-10  py-8  sm:auto-cols-auto md:grid-cols-5 ">
        <div>
          <img
            src="/Images/logo/intel.png"
            className="m-auto"
            style={{ width: "60%", height: "40px" }}
            alt="company logo"
          ></img>
        </div>
        <div>
          <img
            src="/Images/logo/talkit.png"
            className="m-auto"
            style={{ width: "60%", height: "40px" }}
            alt="company logo"
          ></img>
        </div>
        <div>
          <img
            src="/Images/logo/tesla.png"
            className="m-auto"
            style={{ width: "60%", height: "40px" }}
            alt="company logo"
          ></img>
        </div>
        <div>
          <img
            src="/Images/logo/amnda.png"
            className="m-auto"
            style={{ width: "60%", height: "40px" }}
            alt="company logo"
          ></img>
        </div>
        <div>
          <img
            src="/Images/logo/vodafone.png"
            className="m-auto"
            style={{ width: "60%", height: "40px" }}
            alt="company logo"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Categories;
