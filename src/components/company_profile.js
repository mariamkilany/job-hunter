import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
const CompanyProfile = () => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-2">Company Profile</h1>
        <PencilSquareIcon className="w-5 "color="#4640DE" />
      </div>
      <div className="">
        <div>
          Nomad is a software platform for starting and running internet
          businesses. Millions of businesses rely on Stripe’s software tools to
          accept payments, expand globally, and manage their businesses online.
          Stripe has been at the forefront of expanding internet commerce,
          powering new business models, and supporting the latest platforms,
          from marketplaces to mobile commerce sites. We believe that growing
          the GDP of the internet is a problem rooted in code and design, not
          finance. Stripe is built for developers, makers, and creators. We work
          on solving the hard technical problems necessary to build global
          economic infrastructure—from designing highly reliable systems to
          developing advanced machine learning algorithms to prevent fraud.
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
