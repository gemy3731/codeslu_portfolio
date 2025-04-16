"use client";

import Image from "next/image";
// import Link from "next/link";
import { IProjectData } from "./Portfolio";

import { useRouter } from "next/navigation";


const PortfolioCard = ({  activeTab, tab, project }: {  activeTab: string, tab: string, project: IProjectData }) => {

  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(`/project/${project._id}`);
  };



  return (
    <a href={`/project/${project._id}`} onClick={handleClick}>
      <div
        className={activeTab === tab ? 'portfolio-card border-[5px] border-[#f1f5f9] dark:border-[#1b1b1b] rounded-3xl overflow-hidden aspect-[568/478]' : ""}
      >
        <Image src={project.poster} alt="project poster" width={568} height={478} className="w-full aspect-[568/478]"></Image>
        <div className="overlay flex justify-center items-center text-[28px] text-white">
          <h5>Details</h5>
        </div>
      </div>
    </a>
  );
};

export default PortfolioCard;
