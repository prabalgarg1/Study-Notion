
import React, { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { FaStar } from "react-icons/fa"
import { Autoplay, FreeMode, Pagination } from "swiper/modules"

function ReviewSlider() {
  const [reviews, setReviews] = useState([])
  const truncateWords = 15

  useEffect(() => {
    const dummyReviews = [
      {
        user: { firstName: "John", lastName: "Doe", image: "" },
        course: { courseName: "React Basics" },
        review: "This course really helped me get a solid foundation in React. The instructor was clear and concise.",
        rating: 4.7,
      },
      {
        user: { firstName: "Aisha", lastName: "Khan", image: "" },
        course: { courseName: "Advanced Node.js" },
        review: "Loved the deep dive into backend architecture. It’s well-paced and thorough.",
        rating: 5,
      },
      {
        user: { firstName: "Ravi", lastName: "Patel", image: "" },
        course: { courseName: "MongoDB Mastery" },
        review: "Great explanations and project examples. A must for anyone starting with NoSQL.",
        rating: 4.5,
      },
      {
        user: { firstName: "Emily", lastName: "Smith", image: "" },
        course: { courseName: "CSS for Beginners" },
        review: "Clear instructions with hands-on styling. I finally understand Flexbox!",
        rating: 4.8,
      },
    ]
    setReviews(dummyReviews)
  }, [])

  return (
    <div className="text-white">
      <div className="my-[50px] max-w-maxContentTab lg:max-w-maxContent mx-auto">
        <Swiper
          spaceBetween={25}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="w-full"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col gap-3 bg-richblack-800 p-4 text-[14px] text-richblack-25 rounded-md shadow">
                <div className="flex items-center gap-4">
                  <img
                    src={
                      review?.user?.image
                        ? review?.user?.image
                        : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                    }
                    alt="User"
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <div>
                    <h1 className="font-semibold text-richblack-5">
                      {`${review.user.firstName} ${review.user.lastName}`}
                    </h1>
                    <h2 className="text-[12px] font-medium text-richblack-500">
                      {review.course.courseName}
                    </h2>
                  </div>
                </div>
                <p className="font-medium text-richblack-25">
                  {review.review.split(" ").length > truncateWords
                    ? `${review.review.split(" ").slice(0, truncateWords).join(" ")} ...`
                    : review.review}
                </p>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-yellow-100">{review.rating.toFixed(1)}</h3>
                  <ReactStars
                    count={5}
                    value={review.rating}
                    size={20}
                    edit={false}
                    activeColor="#ffd700"
                    emptyIcon={<FaStar />}
                    fullIcon={<FaStar />}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ReviewSlider

{/*import React, { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import 'swiper/css/navigation';
import "swiper/css/pagination"
import "../../App.css"
// Icons
import { FaStar } from "react-icons/fa"
// Import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules"

// Get apiFunction and the endpoint
import { apiConnector } from "../../services/apiconnector"
import { ratingsEndpoints } from "../../services/apis"

function ReviewSlider() {
  const [reviews, setReviews] = useState([])
  const truncateWords = 15

 {/* useEffect(() => {
    // Wrap API in try-catch
    ;(async () => {
      try {
        const { data } = await apiConnector(
          "GET",
          ratingsEndpoints.REVIEWS_DETAILS_API
        )
        console.log("Fetched Reviews:", data)
        if (data?.success) {
          setReviews(data?.data)
        }
      } catch (err) {
        console.error("Error fetching reviews", err)
      }
    })()
  }, [])
useEffect(() => {
  // ✅ Replace API with mock data
  const dummyReviews = [
    {
      user: {
        firstName: "John",
        lastName: "Doe",
        image: ""
      },
      course: {
        courseName: "React Basics"
      },
      review:
        "This course really helped me get a solid foundation in React. The instructor was clear and concise.",
      rating: 4.7
    },
    {
      user: {
        firstName: "Aisha",
        lastName: "Khan",
        image: ""
      },
      course: {
        courseName: "Advanced Node.js"
      },
      review:
        "Loved the deep dive into backend architecture. It’s well-paced and thorough.",
      rating: 5
    },
    {
      user: {
        firstName: "Ravi",
        lastName: "Patel",
        image: ""
      },
      course: {
        courseName: "MongoDB Mastery"
      },
      review:
        "Great explanations and project examples. A must for anyone starting with NoSQL.",
      rating: 4.5
    },
    {
      user: {
        firstName: "Emily",
        lastName: "Smith",
        image: ""
      },
      course: {
        courseName: "CSS for Beginners"
      },
      review:
        "Clear instructions with hands-on styling. I finally understand Flexbox!",
      rating: 4.8
    }
  ]

  // Set dummy data to state
  setReviews(dummyReviews)
}, [])

  return (
    <div className="text-white">
      <div className="my-[50px] max-w-maxContentTab lg:max-w-maxContent">
        {reviews.length === 0 ? (
          <p className="text-center text-richblack-200">No reviews found.</p>
        ) : (
          <Swiper
            slidesPerView={4}
            spaceBetween={25}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="w-full"
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25 rounded-md">
                  <div className="flex items-center gap-4">
                    <img
                      src={
                        review?.user?.image
                          ? review?.user?.image
                          : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                      }
                      alt="User Avatar"
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-richblack-5">
                        {`${review?.user?.firstName} ${review?.user?.lastName}`}
                      </h1>
                      <h2 className="text-[12px] font-medium text-richblack-500">
                        {review?.course?.courseName}
                      </h2>
                    </div>
                  </div>

                  <p className="font-medium text-richblack-25">
                    {review?.review.split(" ").length > truncateWords
                      ? `${review?.review
                          .split(" ")
                          .slice(0, truncateWords)
                          .join(" ")} ...`
                      : `${review?.review}`}
                  </p>

                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-yellow-100">
                      {review.rating.toFixed(1)}
                    </h3>
                    <ReactStars
                      count={5}
                      value={review.rating}
                      size={20}
                      edit={false}
                      activeColor="#ffd700"
                      emptyIcon={<FaStar />}
                      fullIcon={<FaStar />}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  )
}

export default ReviewSlider
import React, { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import 'swiper/css/navigation';
import "swiper/css/pagination"
import "../../App.css"
// Icons
import { FaStar } from "react-icons/fa"
// Import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules"

// Get apiFunction and the endpoint
import { apiConnector } from "../../services/apiconnector"
import { ratingsEndpoints } from "../../services/apis"

function ReviewSlider() {
  const [reviews, setReviews] = useState([])
  const truncateWords = 15

  useEffect(() => {
    ;(async () => {
      const { data } = await apiConnector(
        "GET",
        ratingsEndpoints.REVIEWS_DETAILS_API
      )
      if (data?.success) {
        setReviews(data?.data)
      }
    })()
  }, [])

  // console.log(reviews)

  return (
    <div className="text-white">
      <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent">
        <Swiper
          slidesPerView={4}
          spaceBetween={25}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          
          modules={[FreeMode, Pagination, Autoplay]}
          className="w-full "
        >
          {reviews.map((review, i) => {
            return (
              <SwiperSlide key={i}>
                <div className=" flex flex-col gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25">
                  <div className="flex items-center gap-4">
                    <img
                      src={
                        review?.user?.image
                          ? review?.user?.image
                          : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                      }
                      alt=""
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-richblack-5">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
                      <h2 className="text-[12px] font-medium text-richblack-500">
                        {review?.course?.courseName}
                      </h2>
                    </div>
                  </div>
                  <p className="font-medium text-richblack-25">
                    {review?.review.split(" ").length > truncateWords
                      ? `${review?.review
                          .split(" ")
                          .slice(0, truncateWords)
                          .join(" ")} ...`
                      : `${review?.review}`}
                  </p>
                  <div className="flex items-center gap-2 ">
                    <h3 className="font-semibold text-yellow-100">
                      {review.rating.toFixed(1)}
                    </h3>
                    <ReactStars
                      count={5}
                      value={review.rating}
                      size={20}
                      edit={false}
                      activeColor="#ffd700"
                      emptyIcon={<FaStar />}
                      fullIcon={<FaStar />}
                    />
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
          // <SwiperSlide>Slide 1</SwiperSlide> 
        </Swiper>
      </div>
    </div>
  )
}

export default ReviewSlider; */}