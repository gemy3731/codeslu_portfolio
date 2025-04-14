"use client";

import Image, { StaticImageData } from "next/image";
// import Link from "next/link";
import { IProjectData } from "./Portfolio";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

const PortfolioCard = ({ image, activeTab, tab, project }: { image: StaticImageData, activeTab: string, tab: string, project: IProjectData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    router.push(`/project/${project._id}`);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <a href={`/project/${project._id}`} onClick={handleClick}>
      <div
        className={activeTab === tab ? 'portfolio-card border-[5px] border-[#f1f5f9] dark:border-[#1b1b1b] rounded-3xl overflow-hidden aspect-[568/478]' : ""}
      >
        <Image src={image} alt="" className="w-full"></Image>
        <div className="overlay flex justify-center items-center text-[28px] text-white">
          <h5>Details</h5>
        </div>
      </div>
    </a>
  );
};

export default PortfolioCard;
