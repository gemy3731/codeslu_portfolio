'use client';


import Aos from "aos";
import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";


const PortfolioCard = ({image}:{image:StaticImageData}) => {
    useEffect(() => {
          Aos.init({
            duration: 1500,
            easing: "ease-in-out",
          });
        }, []);
  return (
    <div data-aos='zoom-in' className="portfolio-card border-[5px] border-[#f1f5f9] dark:border-[#1b1b1b] rounded-[100px] overflow-hidden ">
        <Image src={image} alt="" className="w-full"></Image>
      <div className="overlay flex justify-center items-center text-[24px] text-white">
        <h5>Details</h5>
      </div>
    </div>
  );
};

export default PortfolioCard;
