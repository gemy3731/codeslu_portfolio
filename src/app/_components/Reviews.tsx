"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ReviewsCard from "./ReviewsCard";
import imgOne from "../../../assests/logo.png";
import { useEffect, useState } from "react";
import Aos from "aos";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export interface IReviewsData {
  _id: string;
  name: string;
  rating: number;
  role: string;
  description: string;
}

const animation = { duration: 50000, easing: (t: number) => t };

const Reviews = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isMdScreen, setIsMdScreen] = useState(false);
  const [reviewsData, setReviewsData] = useState<IReviewsData[]>([]);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      slides: {
        perView: isLargeScreen ? 4 : isMdScreen ? 3 : 1,
        spacing: 30,
      },
      loop: true,
      drag: false,
      created(s) {
        s.moveToIdx(5, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
    }
  );

  const getData = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/reviews`);
      const data = await response.json();
      setReviewsData(data);
    } catch (error) {
      console.error("Error in getData:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1080);
      setIsMdScreen(window.innerWidth > 768 && window.innerWidth < 1080);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // عند تغيير حجم الشاشة أو تحميل البيانات، تحديث النزلاق
  useEffect(() => {
    if (instanceRef.current && reviewsData.length > 0) {
      instanceRef.current.update();
    }
  }, [isLargeScreen, isMdScreen, reviewsData, instanceRef]);

  return (
    <section>
      <h2 data-aos='fade-right' className="ms-20 mb-14 dark:text-transparent dark:bg-clip-text  dark:bg-gradient-to-t dark:from-transparent dark:via-white dark:to-transparent after:bg-black dark:after:bg-gradient-to-r from-transparent via-white to-transparent  uppercase text-[24px] md:text-[48px] font-bold">
        Our Reviews
      </h2>
      <div ref={sliderRef} className="keen-slider">
        {reviewsData.map((review) => (
          <div key={review._id} className="keen-slider__slide">
            <ReviewsCard image={imgOne} review={review} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
