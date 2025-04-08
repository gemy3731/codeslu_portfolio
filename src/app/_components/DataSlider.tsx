"use client";
import Image from "next/image";
import CountUp from "./CountUp";
import img1 from "../../../assets/1.jpg";
import img2 from "../../../assets/1_New1.jpg";
import img3 from "../../../assets/2.jpg";
import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";

const animation = { duration: 50000, easing: (t: number) => t };
const DataSlider = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 8,
      spacing: 0,
    },
    loop: true,
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      if (s.track && s.track.details) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      }
    },
    animationEnded(s) {
      if (s.track && s.track.details) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      }
    },
  });
  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.update();
    }
  }, [ instanceRef]);
  return (
    <div className="relative border-t-[1px] border-b-[1px] border-[#222832] h-[50vh] overflow-hidden">
        <div className="dataSlider-container flex flex-col gap-7 h-full z-[1]">
          {[img1, img2, img3].map((img, rowIndex) => (
            <div key={rowIndex} ref={sliderRef} className="keen-slider dataSlide !overflow-visible z-[2] mb-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="keen-slider__slide !overflow-visible relative">
                  <Image
                    src={img}
                    alt=""
                    className="w-[90px] h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      <div className="py-10 bg-[#00000058] absolute top-0 left-0 right-0 bottom-0 z-[3]">
        <div className="flex justify-center items-center h-full gap-52 text-[270%] font-[700]">
          <div className="flex flex-col items-center">
            <CountUp
              from={0}
              to={100}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
            <div>All Projects</div>
          </div>
          <div className="flex flex-col items-center">
            <CountUp
              from={0}
              to={200}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
            <div>All Projects</div>
          </div>
          <div className="flex flex-col items-center">
            <CountUp
              from={0}
              to={50}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
            <div>All Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSlider;

//   {[...Array(1)].flatMap(() =>
//     [...Array(5)].map((_, index) => (
//       <Image
//         src={img}
//         alt=""
//         className="w-[120px] h-full object-cover"
//         key={`${rowIndex}-${index}-${Math.random()}`} // unique key
//       />
//     ))
//   )}
