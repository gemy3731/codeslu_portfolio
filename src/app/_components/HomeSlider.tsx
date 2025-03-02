"use client";

import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import imgOne from "../../../assests/logo.png";
import imgTwo from "../../../assests/1_New1.jpg";
import imgFour from "../../../assests/2.jpg";
import imgThree from "../../../assests/1.jpg";
import Image from "next/image";
import Fade from "embla-carousel-fade";
import { useEffect, useState } from "react";
type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const HomeSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const SLIDES = Array.from(Array(5).keys());
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect(); // Set initial opacity
  }, [emblaApi]);
  const slides = [imgOne, imgTwo, imgFour, imgThree];
  return (
    <section id="home" className="embla container mx-auto">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((img, index) => {
            return (
              <div
                className={`embla__slide transition-opacity duration-500 ${
                  index === selectedIndex ? "opacity-100" : "opacity-20"
                }`}
                key={index}
              >
                <div className="embla__slide__number">
                  <Image src={img} className="w-full max-h-[500]" alt=""></Image>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
