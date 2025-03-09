"use client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ForumCard from "./ForumCard"
import gsap from "gsap";
import { useEffect, useRef } from 'react';
import Aos from "aos";

gsap.registerPlugin(ScrollTrigger);
const images = [
  { url: "https://i.ibb.co/qCkd9jS/img1.jpg", name: "Switzerland" },
  { url: "https://i.ibb.co/jrRb11q/img2.jpg", name: "Finland" },
  { url: "https://i.ibb.co/NSwVv8D/img3.jpg", name: "Iceland" },
  { url: "https://i.ibb.co/Bq4Q0M8/img4.jpg", name: "Australia" },
  { url: "https://i.ibb.co/jTQfmTq/img5.jpg", name: "Netherland" },
  { url: "https://i.ibb.co/RNkk6L0/img6.jpg", name: "Ireland" },
];

const Forum = () => {
  const containerRef = useRef(null);

    useEffect(() => {
        Aos.init({
          duration: 1500,
          easing: "ease-in-out",
        });
      }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".layer").forEach((layer) => {
        gsap.to(layer as HTMLElement, {
          scrollTrigger: {
            trigger: layer as HTMLElement,
            start: "top top",
            end: "bottom 90vh",
            pin: true,
            pinSpacing: false, 
            scrub: 1,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  },[])
  return (
    <section  id='forum' className="container mx-auto px-10 xl:px-0">
      <h2 data-aos='fade-down' className="forum-header uppercase my-10 text-[32px] md:text-[48px] font-semibold text-center dark:text-transparent dark:bg-clip-text  dark:bg-gradient-to-t dark:from-transparent dark:via-white dark:to-transparent after:bg-black">
          Blog
        </h2>
      <div ref={containerRef}>
      {images.map((image, index) => (
        <div key={index} className="layer">
          <ForumCard image={image} />  
        </div>
      ))}
      <div className="h-[90vh] md:[80vh]"></div>
      </div>
    </section>
  )
}

export default Forum