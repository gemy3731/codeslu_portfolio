'use client'
import React, { useEffect } from "react";
import AboutCard from "./AboutCard";
import imgThree from "../../../assests/1.jpg";
import img1 from "../../../assests/2.jpg";
import Aos from "aos";
const About = () => {
  useEffect(() => {
      Aos.init({
        duration: 1500,
        easing: "ease-in-out",
      });
    }, []);
  return (
    <div className="mb-52">
      <h2 data-aos='fade-right' className="uppercase text-[48px] font-bold">About us</h2>
      <p data-aos='fade-left'  className="ml-4 mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        dicta accusantium, vitae eius dignissimos molestiae, consequatur numquam
        maxime itaque, exercitationem distinctio repellendus illo? Perspiciatis
        expedita, beatae at pariatur similique maxime ipsam labore nesciunt,
        aut, nulla rem quibusdam quo illum delectus obcaecati possimus! Cumque
        expedita blanditiis voluptatum saepe voluptates consequatur, tempora
        assumenda corporis amet eaque totam iste in deserunt sunt non hic soluta
        rerum optio quisquam corrupti distinctio quas maiores. Recusandae totam
        nulla nemo, saepe excepturi possimus suscipit optio doloremque quidem
        repellat cum natus ipsa molestiae odio dolor harum laudantium magnam
        facere et obcaecati labore eius! Id cupiditate unde molestias tenetur?
      </p>
      <div className="grid grid-cols-2 gap-4 mt-14">

      <AboutCard  image={img1} topText={'Years Experience'} bottomText={'8+'} anims={"zoom-in-down"}/>
      <div className="md:translate-y-24 translate-y-0">
      <AboutCard  image={imgThree} topText={'Completed Projects'} bottomText={'+1k'} anims={"zoom-in-down"}/>

      </div>
      </div>
    </div>
  );
};

export default About;
