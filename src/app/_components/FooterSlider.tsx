"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";

const animation = { duration: 50000, easing: (t: number) => t };

const FooterSlider = () => {
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
  }, []);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 0,
    },
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
  });

  return (
    <section className="w-full">
      <div ref={sliderRef} className="keen-slider w-full">
        <div className="keen-slider__slide w-full text-[10rem]">C O D E S L U</div>
      </div>
    </section>
  );
};

export default FooterSlider;
