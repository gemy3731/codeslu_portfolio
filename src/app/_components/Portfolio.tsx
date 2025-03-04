"use client";
import { useEffect } from "react";
import PortfolioTabs from "./PortfolioTabs";
import Aos from "aos";

const Portfolio = () => {
  useEffect(() => {
      Aos.init({
        duration: 1500,
        easing: "ease-in-out",
      });
    }, []);
  return (
    <section id="portfolio" className="overflow-hidden">
      <div className="container mx-auto py-10 flex flex-col gap-8">
        <h2 data-aos='fade-up' className="portfolio-section uppercase text-[24px] md:text-[48px] font-semibold text-center dark:text-transparent dark:bg-clip-text  dark:bg-gradient-to-t dark:from-transparent dark:via-white dark:to-transparent after:bg-blacko">
          Portfolio
        </h2>
        <div>
          <PortfolioTabs />
        </div>
      </div>
      {/* <div className="shine-line"></div> */}
    </section>
  );
};

export default Portfolio;
