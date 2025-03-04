"use client";
import Image, { StaticImageData } from "next/image";
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutCard = ({
  image,
  topText,
  bottomText,
  anims,
}: {
  className?: string;
  image: StaticImageData;
  topText: string;
  bottomText: string;
  anims: string;
}) => {
  const cardText = topText.split(" ");
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div
    className={`md:w-1/2 w-full mx-auto relative `}
      data-aos={anims}
      data-aos-anchor-placement="top-bottom"
    >
      <Image src={image} alt="" className="rounded-3xl w-full" />
      <h4 className="absolute top-4 right-4  font-bold text-right card-text">
        <p>{cardText[0]}</p>
        <p>{cardText[1]}</p>
      </h4>
      <span className="absolute bottom-4 left-4 text-[32px] font-bold text-right">
        {bottomText}
      </span>
    </div>
  );
};

export default AboutCard;
