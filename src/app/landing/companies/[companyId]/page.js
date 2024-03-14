/* eslint-disable @next/next/no-img-element */
"use client";
import Button from "@/components/Button";
import Loading from "@/components/Loading";
import Review from "@/components/Review";
import {
  BuildingOffice2Icon,
  FireIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { v4 as uuid } from "uuid";
import axios from "../../../../axiosConfig";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function CompanyDetails() {
  const user = useSelector((state) => state.auth.user);
  const { companyId } = useParams();
  const [company, setCompany] = useState(false);
  const [reviews, setReviews] = useState(false);
  const [reviewsToShow, setReviewsToShow] = useState(false);

  const getCompany = async function (id) {
    try {
      // Fetch company data independently
      const companyResponse = await axios.get(`/companies/${id}`);
      setCompany(companyResponse.data.data); // Immediately set company data

      // Fetch reviews separately
      const reviewsResponse = await axios
        .get(`/reviews/company/${id}`)
        .then(async (res) => {
          const revs = res.data.data;
          for (let i = 0; i < revs.length; i++) {
            const review = revs[i];
            const getEmployee = await axios.get(
              `/employees/${review.employee}`
            );
            const emp = getEmployee.data.data;
            revs[i] = {
              ...revs[i],
              employeeName: emp.userName,
              employeeJobTitle: emp.jobTitle,
            };
          }
          setReviews(revs);
          setReviewsToShow(revs.slice(0, 2));
        })
        .catch((err) => {
          console.log(err);
          setReviews(true);
        });
    } catch (error) {
      // setReviews(true);
      // Handle errors appropriately
      console.error("Error fetching data:", error);
    }
  };

  const getFormatedDate = function (dateString) {
    // 1. Create a Date object from the string
    const dateObj = new Date(dateString);
    // 2. Format the date using Intl.DateTimeFormat (recommended)
    const formatter = new Intl.DateTimeFormat("en-US", {
      month: "long", // Use 'short' for abbreviated month names
      day: "numeric",
      year: "numeric",
    });
    const formattedDate = formatter.format(dateObj);
    return formattedDate;
  };

  useEffect(() => {
    getCompany(companyId);
  }, [companyId]);

  const handleShowMore = () => {
    setReviewsToShow(reviews); // Show all remaining reviews
  };

  const [reviewText, setReviewText] = useState("");

  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmitReview = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // console.log("New review:", reviewText); // Print submitted review to console
    const reviewObj = {
      company: companyId,
      employee: user._id,
      rating: 3,
      comment: reviewText,
    };
    // Replace this with your API call to submit the review
    // ... send review to API (future implementation)
    await axios.post("/reviews", reviewObj).then((res) => {
      // console.log(res);
      // console.log("reviewObj: ", reviewObj);
      // console.log("Review Posted");
      setReviews((old) => [...old, { ...reviewObj, _id: res.data.data._id }]);
      if (reviews.length == reviewsToShow.length)
        setReviewsToShow((old) => [...old, { ...reviewObj, _id: uuid() }]);
      setReviewText(""); // Clear review text after submission
    });
    // console.log("reviews", reviews);
    // window.location.reload();
  };

  return (
    <>
      {company && reviews ? (
        <section>
          <header className="bg-primary-light  pt-20 flex flex-col gap-3 p-20">
            <div className="  text-slate-300">
              Home/Companies/{company.name}
            </div>
            <div className="flex flex-wrap gap-3 p-1 mt-6">
              <img
                src="/Images/stripe_logo.png"
                className=" w-44 h-44 shadow-lg"
                alt="logo"
              />
              <div className="flex flex-col gap-8 justify-end">
                <h2 className="text-5xl font-semibold text-slate-100">
                  {company.name}
                </h2>
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-2">
                    <span className="p-1 bg-white rounded-3xl  w-8 h-8">
                      <FireIcon className="text-primary-500 w-full h-full" />
                    </span>
                    <div className="flex flex-col text-gray-300">
                      <span>Founded</span>
                      <span className="font-semibold">
                        {getFormatedDate(company.foundedIn)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="p-1 bg-white rounded-3xl  w-8 h-8">
                      <UsersIcon className="text-primary-500 w-full h-full" />
                    </span>
                    <div className="flex flex-col text-gray-300">
                      <span>Employees</span>
                      <span className="font-semibold">
                        {company.employeesNumber}+
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="p-1 bg-white rounded-3xl w-8 h-8">
                      <MapPinIcon className="text-primary-500 w-full h-full" />
                    </span>
                    <div className="flex flex-col text-gray-300">
                      <span>Location</span>
                      {/* <span className="font-semibold">20 countries</span> */}
                      <span className="font-semibold">{company.address}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="p-1 bg-white rounded-3xl  w-8 h-8">
                      <BuildingOffice2Icon className="text-primary-500 w-full h-full" />
                    </span>
                    <div className="flex flex-col text-gray-300">
                      <span>Industry</span>
                      <span className="font-semibold">{company.industry}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="p-10 flex flex-col md:flex-row gap-4 ">
            <div className=" max-w-screen-md flex flex-col gap-5">
              <h2 className="text-3xl  font-semibold">Company Profile</h2>
              <p className="p-3">
                Stripe is a software platform for starting and running internet
                businesses. Millions of businesses rely on Stripe software tools
                to accept payments, expand globally, and manage their businesses
                online. Stripe has been at the forefront of expanding internet
                commerce, powering new business models, and supporting the
                latest platforms, from marketplaces to mobile commerce sites. We
                believe that growing the GDP of the internet is a problem rooted
                in code and design, not finance. Stripe is built for developers,
                makers, and creators. We work on solving the hard technical
                problems necessary to build global economic infrastructure—from
                designing highly reliable systems to developing advanced machine
                learning algorithms to prevent fraud.
              </p>
            </div>
            <div>
              <h2 className="text-3xl  font-semibold">Tech stack</h2>
              <div className="flex flex-wrap p-4 gap-2">
                {company?.techStack?.map((tech) => (
                  <span
                    key={company.techStack.indexOf(tech)}
                    className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 p-2 px-4 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="px-10 pt-0 pb-10">
            <h2 className="text-3xl font-semibold">Contact</h2>
            <div className="p-3 flex gap-3 flex-wrap md:w-1/2">
              <div className=" border-2 border-primary w-fit p-2 flex justify-center  items-center gap-2 text-primary">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 5.80021C21.2483 6.1263 20.4534 6.34187 19.64 6.44021C20.4982 5.92753 21.1413 5.12099 21.45 4.17021C20.6436 4.65027 19.7608 4.98851 18.84 5.17021C18.2245 4.50278 17.405 4.05851 16.5098 3.90706C15.6147 3.75562 14.6945 3.90557 13.8938 4.3334C13.093 4.76123 12.4569 5.44274 12.0852 6.27105C11.7135 7.09935 11.6273 8.0276 11.84 8.91021C10.2094 8.82774 8.61444 8.40316 7.15865 7.66407C5.70287 6.92498 4.41885 5.8879 3.39 4.62021C3.02914 5.25038 2.83952 5.96403 2.84 6.69021C2.83872 7.36459 3.00422 8.02883 3.32176 8.62377C3.63929 9.21872 4.09902 9.72592 4.66 10.1002C4.00798 10.0825 3.36989 9.90751 2.8 9.59021V9.64021C2.80489 10.5851 3.13599 11.4993 3.73731 12.2282C4.33864 12.957 5.17326 13.4559 6.1 13.6402C5.74326 13.7488 5.37287 13.806 5 13.8102C4.74189 13.8072 4.48442 13.7838 4.23 13.7402C4.49391 14.553 5.00462 15.2634 5.69107 15.7724C6.37753 16.2814 7.20558 16.5638 8.06 16.5802C6.6172 17.7155 4.83588 18.3351 3 18.3402C2.66574 18.3413 2.33174 18.3213 2 18.2802C3.87443 19.4905 6.05881 20.1329 8.29 20.1302C9.82969 20.1462 11.3571 19.8552 12.7831 19.2743C14.2091 18.6934 15.505 17.8341 16.5952 16.7467C17.6854 15.6593 18.548 14.3656 19.1326 12.9411C19.7172 11.5166 20.012 9.98994 20 8.45021C20 8.28021 20 8.10021 20 7.92021C20.7847 7.33502 21.4615 6.61763 22 5.80021Z"
                    fill="#4640DE"
                  />
                </svg>
                <span>{company.links.instagram}</span>
              </div>
              <div className=" border-2 border-primary w-fit p-2 flex justify-center  items-center gap-2 text-primary">
                <svg
                  width="11"
                  height="20"
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.11986 3.32003H10.9999V0.14003C10.0896 0.045377 9.17502 -0.00135428 8.25986 2.98641e-05C5.53986 2.98641e-05 3.67986 1.66003 3.67986 4.70003V7.32003H0.609863V10.88H3.67986V20H7.35986V10.88H10.4199L10.8799 7.32003H7.35986V5.05003C7.35986 4.00003 7.63986 3.32003 9.11986 3.32003Z"
                    fill="#4640DE"
                  />
                </svg>

                <span>{company.links.facebook}</span>
              </div>
              <div className=" border-2 border-primary w-fit p-2 flex justify-center  items-center gap-2 text-primary">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.4696 0.000139831H1.52957C1.33915 -0.00250479 1.15007 0.0323873 0.973136 0.102824C0.796201 0.17326 0.634874 0.27786 0.498368 0.410652C0.361862 0.543443 0.252852 0.701824 0.177562 0.876749C0.102273 1.05167 0.0621787 1.23972 0.0595703 1.43014V18.5701C0.0621787 18.7606 0.102273 18.9486 0.177562 19.1235C0.252852 19.2985 0.361862 19.4568 0.498368 19.5896C0.634874 19.7224 0.796201 19.827 0.973136 19.8975C1.15007 19.9679 1.33915 20.0028 1.52957 20.0001H18.4696C18.66 20.0028 18.8491 19.9679 19.026 19.8975C19.2029 19.827 19.3643 19.7224 19.5008 19.5896C19.6373 19.4568 19.7463 19.2985 19.8216 19.1235C19.8969 18.9486 19.937 18.7606 19.9396 18.5701V1.43014C19.937 1.23972 19.8969 1.05167 19.8216 0.876749C19.7463 0.701824 19.6373 0.543443 19.5008 0.410652C19.3643 0.27786 19.2029 0.17326 19.026 0.102824C18.8491 0.0323873 18.66 -0.00250479 18.4696 0.000139831ZM6.08957 16.7401H3.08957V7.74014H6.08957V16.7401ZM4.58957 6.48014C4.17583 6.48014 3.77904 6.31578 3.48648 6.02323C3.19393 5.73067 3.02957 5.33388 3.02957 4.92014C3.02957 4.5064 3.19393 4.10961 3.48648 3.81705C3.77904 3.5245 4.17583 3.36014 4.58957 3.36014C4.80927 3.33522 5.03175 3.35699 5.24245 3.42402C5.45314 3.49105 5.64731 3.60183 5.81223 3.7491C5.97715 3.89637 6.1091 4.07682 6.19944 4.27862C6.28979 4.48043 6.33649 4.69904 6.33649 4.92014C6.33649 5.14124 6.28979 5.35985 6.19944 5.56166C6.1091 5.76346 5.97715 5.94391 5.81223 6.09118C5.64731 6.23845 5.45314 6.34923 5.24245 6.41626C5.03175 6.48329 4.80927 6.50505 4.58957 6.48014ZM16.9096 16.7401H13.9096V11.9101C13.9096 10.7001 13.4796 9.91014 12.3896 9.91014C12.0522 9.91261 11.7238 10.0184 11.4484 10.2133C11.1731 10.4082 10.9641 10.6828 10.8496 11.0001C10.7713 11.2352 10.7374 11.4827 10.7496 11.7301V16.7301H7.74957C7.74957 16.7301 7.74957 8.55014 7.74957 7.73014H10.7496V9.00014C11.0221 8.52725 11.4185 8.13766 11.896 7.87334C12.3735 7.60902 12.9141 7.47999 13.4596 7.50014C15.4596 7.50014 16.9096 8.79014 16.9096 11.5601V16.7401Z"
                    fill="#4640DE"
                  />
                </svg>
                <span>{company.links.linkedIn}</span>
              </div>
            </div>
          </div>
          <div className="px-10 pb-10">
            <h2 className=" text-3xl font-semibold py-3">Reviews & Comments</h2>
            <div className="flex flex-col gap-5 md:flex-row">
              {reviewsToShow && (
                <div className=" md:w-2/3 p-2">
                  {reviewsToShow.map((review) => (
                    <Review
                      key={uuid()}
                      {...review}
                      updateReviews={setReviews} // Pass setReviews function
                      updateReviewsToShow={setReviewsToShow} // Pass setReviewsToShow function
                    />
                  ))}
                  {reviews.length >= 3 && reviewsToShow.length <= 2 ? (
                    <div className="flex justify-center p-3">
                      <Button onClick={handleShowMore}>Show more</Button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              )}
              <div className="md:w-1/3 flex flex-col gap-4">
                <h2 className=" text-2xl font-medium">Add your Review</h2>
                <textarea
                  className="border-2 border-primary-light rounded-lg w-full h-2/3 focus:outline-none p-3"
                  placeholder="Write your review..."
                  value={reviewText}
                  onChange={handleReviewChange}
                  rows="5"
                />
                <div className="flex justify-end">
                  <Button
                    className="flex justify-center items-center gap-2 rounded"
                    onClick={handleSubmitReview}
                  >
                    Submit <PaperAirplaneIcon className="w-4 h-4 " />{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
