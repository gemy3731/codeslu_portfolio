"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";
import Aos from "aos";

const animation = { duration: 50000, easing: (t: number) => t };

const FooterSlider = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-out",
    });
  }, []);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
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
    <section data-aos='fade-up' className="w-full footerSlider">
      <div ref={sliderRef} className="keen-slider w-[auto] h-auto">
        <div className="keen-slider__slide  text-responsive2 dark:text-transparent  dark:bg-clip-text  dark:bg-gradient-to-b dark:from-white  dark:to-black">C O D E S L U</div>
        <div className=" keen-slider__slide  text-responsive2 dark:text-transparent  dark:bg-clip-text  dark:bg-gradient-to-b dark:from-white  dark:to-black">C O D E S L U</div>
      </div>
    </section>
  );
};

export default FooterSlider;
