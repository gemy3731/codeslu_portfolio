"use client";
import { useEffect } from "react";
import PortfolioTabs from "./PortfolioTabs";
import Aos from "aos";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";

const Portfolio = () => {
  const router = useRouter();
  useEffect(() => {
      Aos.init({
        duration: 1500,
        easing: "ease-in-out",
      });
    }, []);
    const onSeeMore = () => {
      router.push("/allProjects");
    };
  return (
    <section id="portfolio" className="overflow-hidden">
      <div className="container mx-auto py-10 flex flex-col gap-8">
        <h2 data-aos='fade-down' className="portfolio-section uppercase text-[24px] md:text-[48px] font-semibold text-center dark:text-transparent dark:bg-clip-text  dark:bg-gradient-to-t dark:from-transparent dark:via-white dark:to-transparent after:bg-black">
          Portfolio
        </h2>
        <div>
          <PortfolioTabs />
        </div>
      </div>
      {/* <div className="shine-line"></div> */}
      <Button onClick={onSeeMore} className="forumBtn px-4 py-1 rounded-3xl  mx-auto">
           <span className="z-[1]"> See more...</span>
            <div className="forumBtn-overlay"></div>
          </Button>

    </section>
  );
};

export default Portfolio;
