"use client";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import ReviewsCard from "./ReviewsCard";
import imgOne from "../../../assests/logo.png";
import { useEffect, useState } from "react";

const images = [
  { url: "https://i.ibb.co/qCkd9jS/img1.jpg", name: "Switzerland" },
  { url: "https://i.ibb.co/jrRb11q/img2.jpg", name: "Finland" },
  { url: "https://i.ibb.co/NSwVv8D/img3.jpg", name: "Iceland" },
  { url: "https://i.ibb.co/Bq4Q0M8/img4.jpg", name: "Australia" },
  { url: "https://i.ibb.co/jTQfmTq/img5.jpg", name: "Netherland" },
  { url: "https://i.ibb.co/RNkk6L0/img6.jpg", name: "Ireland" },

];
const animation = { duration: 20000, easing: (t: number) => t };

const Reviews = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isMdScreen, setIsMdScreen] = useState(false);


    useEffect(() => {
        const checkScreenSize = () => {
          setIsLargeScreen(window.innerWidth > 1080);
          setIsMdScreen(window.innerWidth > 768 && window.innerWidth < 1080);
        };
    
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
    
        return () => window.removeEventListener("resize", checkScreenSize);
      }, [window.innerWidth]);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: isLargeScreen?4:isMdScreen?3:1,
      spacing: 15,
    },
    loop: true,
    renderMode: "performance",
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
  });
  return (
    <section className="">
        <h2 className="ms-20 mb-14 dark:text-transparent dark:bg-clip-text  dark:bg-gradient-to-t dark:from-transparent dark:via-white dark:to-transparent after:bg-black dark:after:bg-gradient-to-r from-transparent via-white to-transparent  uppercase text-[clamp(24px,48px,48px)] font-bold">Our Reviews</h2>
      <div ref={sliderRef} className="keen-slider ">
        {images.map((imge, index) => (
          <div key={index} className="keen-slider__slide">
            <ReviewsCard image={imgOne} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
