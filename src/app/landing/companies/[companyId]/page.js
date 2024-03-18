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
  console.log("company: ", company);
  const [reviews, setReviews] = useState(false);
  const [reviewsToShow, setReviewsToShow] = useState(false);
  const [addingReview, setAddReview] = useState(false);

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
          // console.log(err);
          setReviews(true);
        });
    } catch (error) {
      // setReviews(true);
      // Handle errors appropriately
      console.error("Error fetching data:", error);
    }
  };

  const reviewsResponse = async (id) => {
    await axios
      .get(`/reviews/company/${id}`)
      .then(async (res) => {
        const revs = res.data.data;
        for (let i = 0; i < revs.length; i++) {
          const review = revs[i];
          const getEmployee = await axios.get(`/employees/${review.employee}`);
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
        // console.log(err);
        setReviews(true);
      });
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
    setAddReview(true);
    // console.log("New review:", reviewText); // Print submitted review to console
    const reviewObj = {
      company: companyId,
      employee: user._id,
      rating: 3,
      comment: reviewText,
    };
    // Replace this with your API call to submit the review
    // ... send review to API (future implementation)
    await axios
      .post("/reviews", reviewObj)
      .then(async (res) => {
        // if (reviews && reviewsToShow) {
        // setReviews((old) => [...old, { ...reviewObj, _id: res.data.data._id }]);
        // if (reviews.length == reviewsToShow.length)
        // setReviewsToShow((old) => [...old, { ...reviewObj, _id: uuid() }]);
        // reviewsResponse(companyId);
        // } else {
        //   setReviews([{ ...reviewObj, _id: res.data.data._id }]);
        //   setReviewsToShow([{ ...reviewObj, _id: res.data.data._id }]);
        // }
        await axios
          .get(`/reviews/company/${companyId}`)
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
                employeeImage: emp.image,
              };
            }
            setReviews(revs);
            setReviewsToShow(revs.slice(0, 2));
          })
          .catch((err) => {
            // console.log(err);
            setReviews(true);
          }); // Clear review text after submission
      })
      .finally(() => {
        setReviewText("");
        setAddReview(false);
      });
    // console.log("reviews", reviews);
    // window.location.reload();
  };

  return (
    <>
      {company && reviews ? (
        <section>
          <header className="bg-primary-light  pt-20 flex flex-col gap-3 p-20">
            {/* <div className="  text-slate-300">
              Home/Companies/{company.name}
            </div> */}
            <div className="flex flex-wrap gap-3 p-1 mt-6">
              <img
                src={company.image}
                className=" w-44 h-44 shadow-lg rounded mx-3 hover:translate-y-1 transition-all"
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
          <div className="p-10 mx-5 flex flex-col md:flex-row md:justify-between gap-4 ">
            <div className="max-w-screen-md flex flex-col gap-5">
              <h2 className="text-3xl  font-semibold">Company Profile</h2>
              <p className="p-3">{company.description}</p>
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
              {/* {company.links.instagram && (
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
                  <a href={company.links.instagram} target="_blank">
                    <span>{company.links.instagram}</span>
                  </a>
                </div>
              )}
              {company.links.facebook && (
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
                  <a href={company.links.facebook} target="_blank">
                    <span>{company.links.facebook}</span>
                  </a>
                </div>
              )} */}
              {/* {company.links.linkedIn && (
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
                  <a href={company.links.linkedIn} target="_blank">
                    <span>{company.links.linkedIn}</span>
                  </a>
                </div>
              )} */}
              {company.links &&
                Object.entries(company.links).map(([linkName, linkUrl]) =>
                  linkUrl !== "" ? (
                    <div
                      key={linkName}
                      className="flex flex-col items-start gap-2 pb-6 rounded-b-[--card-border-radius]"
                    >
                      {linkName === "linkedIn" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          data-name="Layer 1"
                          viewBox="0 0 24 24"
                          width={20}
                          height={20}
                          id="linkedin"
                        >
                          <path
                            d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"
                            fill="#64748b"
                            className="color000000 svgShape"
                          />
                        </svg>
                      )}
                      {linkName === "facebook" && (
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
                      )}
                      {linkName === "instagram" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="25"
                          height="25"
                          viewBox="0 0 48 48"
                        >
                          <radialGradient
                            id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                            cx="19.38"
                            cy="42.035"
                            r="44.899"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#fd5"></stop>
                            <stop offset=".328" stop-color="#ff543f"></stop>
                            <stop offset=".348" stop-color="#fc5245"></stop>
                            <stop offset=".504" stop-color="#e64771"></stop>
                            <stop offset=".643" stop-color="#d53e91"></stop>
                            <stop offset=".761" stop-color="#cc39a4"></stop>
                            <stop offset=".841" stop-color="#c837ab"></stop>
                          </radialGradient>
                          <path
                            fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                          ></path>
                          <radialGradient
                            id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                            cx="11.786"
                            cy="5.54"
                            r="29.813"
                            gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#4168c9"></stop>
                            <stop
                              offset=".999"
                              stop-color="#4168c9"
                              stop-opacity="0"
                            ></stop>
                          </radialGradient>
                          <path
                            fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                          ></path>
                          <circle
                            cx="31.5"
                            cy="16.5"
                            r="1.5"
                            fill="#fff"
                          ></circle>
                          <path
                            fill="#fff"
                            d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                          ></path>
                        </svg>
                      )}

                      {/*  */}
                      <div className="flex flex-col justify-center">
                        <div className="font-light text-zinc-500">
                          {linkName}
                        </div>
                        <div className="text-sm text-blue-600">
                          <a href={linkUrl} target="_blank">
                            {linkUrl.replace(/(?:https?:\/\/)?(?:www\.)?/i, "")}
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )
                )}
            </div>
          </div>
          <div className="px-10 pb-10">
            <h2 className=" text-3xl font-semibold py-3">Reviews & Comments</h2>
            <div className="flex flex-col gap-5 md:flex-row">
              {reviewsToShow ? (
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
              ) : (
                <div className="md:w-2/3 p-2">No Reviews Yet</div>
              )}
              {user?.role == "employee" && (
                <div className="md:w-1/3 flex flex-col gap-4">
                  <h2 className=" text-2xl font-medium">Add your Review</h2>
                  <textarea
                    className="border-2 border-primary-light rounded-lg w-full h-2/3 focus:outline-none p-3"
                    placeholder="Write your review..."
                    value={reviewText}
                    onChange={handleReviewChange}
                    disabled={addingReview}
                    rows="5"
                  />
                  <div className="flex justify-end">
                    <Button
                      className="flex justify-center items-center gap-2 rounded"
                      onClick={handleSubmitReview}
                      disabled={addingReview}
                    >
                      Submit{" "}
                      {!addingReview && (
                        <PaperAirplaneIcon className="w-4 h-4" />
                      )}
                      {addingReview && (
                        <svg
                          aria-hidden="true"
                          role="status"
                          className="inline w-4 h-4 me-3 text-white animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          />
                        </svg>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
