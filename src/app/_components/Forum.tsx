"use client";
import ForumCard from "./ForumCard";
import { useEffect, useRef, useState } from "react";
import AnimatedHeader from "./AnimatedHeader";
import { IBlogData } from "../(pages)/blog/[blogID]/page";
import SeeMoreBtn from "./SeeMoreBtn";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const images = [
  { url: "https://i.ibb.co/qCkd9jS/img1.jpg", name: "Switzerland" },
  { url: "https://i.ibb.co/jrRb11q/img2.jpg", name: "Finland" },
  { url: "https://i.ibb.co/NSwVv8D/img3.jpg", name: "Iceland" },
];

const Forum = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lastCardSticky, setLastCardSticky] = useState(true);
  const spacerRef = useRef<HTMLDivElement>(null);
  const [blogsData,setBlogsData] = useState<IBlogData[]>([])
  useEffect(()=>{
    const getData = async () => {
      const res = await fetch(`${apiUrl}/api/blog`,{cache:'no-cache'});
      const blogs:IBlogData[] = await res.json();
      console.log(blogs)
      setBlogsData(blogs)
    }
    getData()
  },[])

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




  return (
    <section id="forum" className="container mx-auto px-10 xl:px-0 relative">
      <AnimatedHeader animation="fade-down" header="Success Stories" classes="forum-header" />
      <div ref={containerRef} className="mt-20 relative">
        {/* Cards container with z-index */}
        <div className="relative z-10">
          {blogsData.map((blog, index) => (
            <div 
              key={index} 
              className={`layer ${index === images.length - 1 ? '!sticky' : 'sticky'} top-0`}
            >
              <ForumCard  blog={blog} />
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
          <SeeMoreBtn path="blog" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forum;
