


import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IProjectData } from "./Portfolio";
// import { useEffect } from "react";

const PortfolioCard = ({ image, activeTab,tab,project }: { image: StaticImageData,activeTab:string,tab:string,project:IProjectData }) => {


  return (
    <Link href={`/project/${project._id}`}>
      <div
        className={activeTab===tab?'portfolio-card border-[5px] border-[#f1f5f9] dark:border-[#1b1b1b] rounded-[100px] overflow-hidden':""}
      >
        <Image src={image} alt="" className="w-full"></Image>
        <div className="overlay flex justify-center items-center text-[28px] text-white">
          <h5>Details</h5>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
