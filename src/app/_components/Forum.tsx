"use client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ForumCard from "./ForumCard";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import AnimatedHeader from "./AnimatedHeader";

gsap.registerPlugin(ScrollTrigger);
const images = [
  { url: "https://i.ibb.co/qCkd9jS/img1.jpg", name: "Switzerland" },
  { url: "https://i.ibb.co/jrRb11q/img2.jpg", name: "Finland" },
  { url: "https://i.ibb.co/NSwVv8D/img3.jpg", name: "Iceland" },
];

const Forum = () => {
  const router = useRouter();
  const containerRef = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".layer").forEach((layer) => {
        gsap.to(layer as HTMLElement, {
          scrollTrigger: {
            trigger: layer as HTMLElement,
            start: "top top",
            end: "bottom 100vh",
            pin: true,
            pinSpacing: false,
            scrub: 1,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const onSeeMore = () => {
    router.push("/blog");
  };

  return (
    <section id="forum" className="container mx-auto px-10 xl:px-0 relative">
      <AnimatedHeader animation="fade-down" header="Blog" classes="forum-header" />
      <div ref={containerRef}>
        {images.map((image, index) => (
          <div key={index} className="layer">
            <ForumCard image={image} />
          </div>
        ))}
        <div className="h-[800px] xs:h-[750px] md:h-[700px] flex flex-col justify-end">
          <Button onClick={onSeeMore} className="forumBtn px-4 py-1 rounded-3xl  absolute bottom-0 left-[50%] -translate-x-[50%]">
           <span className="z-[1]"> See more...</span>
            <div className="forumBtn-overlay"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Forum;
