"use client";
import Image from "next/image";
import CountUp from "./CountUp";
import { useKeenSlider } from "keen-slider/react";
import { useCallback, useEffect, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const animation = { duration: 50000, easing: (t: number) => t };

interface ItemType {
  _id: string;
  image: string;
  isHidden: boolean;
}

const DataSlider = () => {
  const [imgs, setImgs] = useState<ItemType[]>([]);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 9,
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

  // Fetch images from API
  const getImages = useCallback(() => {
    fetch(`${apiUrl}/api/images`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data.length);
        if (data.length < 20) {
          const duplicatedData = duplicateArrayToLength(data, 20);
          setImgs(duplicatedData);
        } else {
          setImgs(data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [apiUrl]);

  useEffect(() => {
    getImages();
  }, [getImages]);

  useEffect(() => {
    if (instanceRef.current && imgs.length > 0) {
      instanceRef.current.update(); // Reinitialize the slider
      instanceRef.current?.moveToIdx(5, true, animation); // Start animation
    }
  }, [imgs, instanceRef]);

  function duplicateArrayToLength(array: ItemType[], targetLength = 20): ItemType[] {
    if (array.length >= targetLength) {
      return array.slice(0, targetLength);
    }

    const duplicatedArray = [];
    while (duplicatedArray.length < targetLength) {
      duplicatedArray.push(...array);
    }

    return duplicatedArray.slice(0, targetLength);
  }

  return (
    <div className="relative border-t-[1px] border-b-[1px] border-[#eef4fd] dark:border-[#222832] h-[40vh] overflow-hidden">
      <div className="dataSlider-container flex flex-col items-center justify-s gap-7 h-full z-[1]">
        <div ref={sliderRef} className="keen-slider dataSlide !overflow-visible z-[2] mb-4">
          {/* Group images into sets of three for each slide */}
          {Array.from({ length: Math.ceil(imgs.length ) }).map((_, groupIndex) => {
            const startIndex = groupIndex ; // Starting index for the group
            const group = imgs.slice(startIndex, startIndex + 3); // Get 3 images for the group

            return (
              <div key={groupIndex} className="keen-slider__slide !overflow-visible relative">
                <div className="transform rotate-45 flex flex-col gap-4">
                  {group.map((img, rowIndex) => (
                    <div key={rowIndex} className="relative w-[110px] h-[120px]">
                      <Image
                        src={img.image}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-10 bg-[#ffffffc3] dark:bg-[#000000c3] absolute top-0 left-0 right-0 bottom-0 z-[3]">
        <div className="flex justify-center items-center h-full gap-52 text-[250%] font-[700]">
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
            <div>Number Of Clients</div>
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