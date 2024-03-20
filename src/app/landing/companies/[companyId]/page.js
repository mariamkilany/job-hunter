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
            setReviews(true);
          }); // Clear review text after submission
      })
      .finally(() => {
        setReviewText("");
        setAddReview(false);
      });
  };

  return (
    <>
      {company && reviews ? (
        <section>
          <header className="bg-primary-light  pt-20 flex flex-col gap-3 p-20">
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
                            <stop offset="0" stopColor="#fd5"></stop>
                            <stop offset=".328" stopColor="#ff543f"></stop>
                            <stop offset=".348" stopColor="#fc5245"></stop>
                            <stop offset=".504" stopColor="#e64771"></stop>
                            <stop offset=".643" stopColor="#d53e91"></stop>
                            <stop offset=".761" stopColor="#cc39a4"></stop>
                            <stop offset=".841" stopColor="#c837ab"></stop>
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
                            <stop offset="0" stopColor="#4168c9"></stop>
                            <stop
                              offset=".999"
                              stopColor="#4168c9"
                              stopOpacity="0"
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
