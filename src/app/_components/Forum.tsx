"use client";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import ForumCard from "./ForumCard";
// import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import AnimatedHeader from "./AnimatedHeader";

// gsap.registerPlugin(ScrollTrigger);
const images = [
  { url: "https://i.ibb.co/qCkd9jS/img1.jpg", name: "Switzerland" },
  { url: "https://i.ibb.co/jrRb11q/img2.jpg", name: "Finland" },
  { url: "https://i.ibb.co/NSwVv8D/img3.jpg", name: "Iceland" },
];

const Forum = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [lastCardSticky, setLastCardSticky] = useState(true);
  const spacerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const lastCard = document.querySelector('.layer:last-child');
      if (lastCard && containerRef.current) {
        const rect = lastCard.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        
        // Check if last card is in sticky state
        setLastCardSticky(rect.top <= containerRect.top);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const onSeeMore = () => {
    router.push("/blog");
  };

  return (
    <section id="forum" className="container mx-auto px-10 xl:px-0 relative">
      <AnimatedHeader animation="fade-down" header="Blog" classes="forum-header" />
      <div ref={containerRef} className="mt-20 relative">
        {/* Cards container with z-index */}
        <div className="relative z-10">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`layer ${index === images.length - 1 ? '!sticky' : 'sticky'} top-0`}
            >
              <ForumCard image={image} />
            </div>
          ))}
        </div>

        {/* Spacer for button positioning */}
        <div 
          ref={spacerRef} 
          className={`transition-all duration-300 ${
            lastCardSticky ? 'h-[700px]' : 'h-[100px]'
          }`}
        />

        {/* Button with dynamic positioning */}
        <div className="sticky bottom-10 z-0 mt-10">
          <div className="flex justify-center">
            <Button 
              onClick={onSeeMore} 
              className="forumBtn px-4 py-1 rounded-3xl relative z-0"
            >
              <span className="z-[1]">See more...</span>
              <div className="forumBtn-overlay"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forum;
