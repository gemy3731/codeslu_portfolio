"use client";
import { useEffect, useState } from "react";
import PortfolioTabs from "./PortfolioTabs";
import Aos from "aos";
import SeeMoreBtn from "./SeeMoreBtn";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export interface IProjectData {
  _id: string;
  name: string;
  description: string;
  poster: string;
  screens?: string[];
  demo_link?: string;
  purchase_link?: string;
  app_store_link?: string;
  google_play_link?: string;
  video_link?: string;
  category: string;
}
const Portfolio = () => {
  const [projects, setProjects] = useState<IProjectData[]>([]);
  useEffect(() => {
      Aos.init({
        duration: 1500,
        easing: "ease-in-out",
      });
    }, []);
    useEffect(() => {
      const getData = async () => {
        try {
          const response = await fetch(`${apiUrl}/api/projects`,{cache:'no-cache'});
          const data = await response.json();
          console.log("projects",data)
          setProjects(data);
        } catch (error) {
          console.error("Error in getData:", error);
        }
      };
      getData();
    }, []);
  return (
    <>
    {projects.length>0&&<section id="portfolio" className="overflow-x-hidden">
      <div className="container mx-auto py-10 flex flex-col gap-8">
        <h2 data-aos='fade-down' className="portfolio-section uppercase text-[24px] md:text-[48px] font-semibold text-center dark:text-transparent dark:bg-clip-text  dark:bg-gradient-to-t dark:from-transparent dark:via-white dark:to-transparent after:bg-black">
          Portfolio
        </h2>
        <div>
          <PortfolioTabs projects={projects} />
        </div>
      </div>
      {/* <div className="shine-line"></div> */}
      <SeeMoreBtn path="allProjects" />

    </section>}
    </>
  );
};

export default Portfolio;
