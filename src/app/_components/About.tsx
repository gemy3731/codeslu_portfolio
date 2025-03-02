"use client";
import React, { useEffect, useState } from "react";
import AboutCard from "./AboutCard";
import imgThree from "../../../assests/1.jpg";
import img1 from "../../../assests/2.jpg";
import Aos from "aos";
const About = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
  
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-out",
    });
  }, []);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    checkScreenSize(); // Check on mount
    window.addEventListener("resize", checkScreenSize); // Update on resize

    return () => window.removeEventListener("resize", checkScreenSize);
  }, [window.innerWidth])
  return (
    <section
      id="about"
      className="mb-52 dark:bg-[#1b1b1b] bg-slate-100 dark:shadow-lg relative"
    >
      {isLargeScreen&&<svg
        className="absolute bottom-0 right-0 left-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          className="fill-white dark:fill-black"
          fillOpacity="1"
          d="M0,128L17.1,138.7C34.3,149,69,171,103,186.7C137.1,203,171,213,206,197.3C240,181,274,139,309,144C342.9,149,377,203,411,197.3C445.7,192,480,128,514,122.7C548.6,117,583,171,617,160C651.4,149,686,75,720,53.3C754.3,32,789,64,823,101.3C857.1,139,891,181,926,186.7C960,192,994,160,1029,133.3C1062.9,107,1097,85,1131,106.7C1165.7,128,1200,192,1234,197.3C1268.6,203,1303,149,1337,133.3C1371.4,117,1406,139,1423,149.3L1440,160L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
        ></path>
      </svg>}
      
      <div className="container mx-auto pt-10 pb-10 md:pb-36">
        <h2
          data-aos="fade-right"
          className="about-section after:bg-black dark:after:bg-white  uppercase text-[clamp(24px,48px,48px)] font-bold"
        >
          About us
        </h2>
        <p data-aos="fade-left" className="ml-4 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          dicta accusantium, vitae eius dignissimos molestiae, consequatur
          numquam maxime itaque, exercitationem distinctio repellendus illo?
          Perspiciatis expedita, beatae at pariatur similique maxime ipsam
          labore nesciunt, aut, nulla rem quibusdam quo illum delectus obcaecati
          possimus! Cumque expedita blanditiis voluptatum saepe voluptates
          consequatur, tempora assumenda corporis amet eaque totam iste in
          deserunt sunt non hic soluta rerum optio quisquam corrupti distinctio
          quas maiores. Recusandae totam nulla nemo, saepe excepturi possimus
          suscipit optio doloremque quidem repellat cum natus ipsa molestiae
          odio dolor harum laudantium magnam facere et obcaecati labore eius! Id
          cupiditate unde molestias tenetur?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
          <div className="px-10 md:p-0">
            <AboutCard
              image={img1}
              topText={"Years Experience"}
              bottomText={"8+"}
              anims={"zoom-in-down"}
            />
          </div>
          <div className="md:translate-y-24 translate-y-0 px-10 md:p-0">
            <AboutCard
              image={imgThree}
              topText={"Completed Projects"}
              bottomText={"+1k"}
              anims={"zoom-in-down"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
