"use client";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);


const SplashScreen = () => {
  const [isSplash, setIsSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 7000);
  }, []);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const words = gsap.utils.toArray<SVGTextElement>(svgRef.current.querySelectorAll("text") );
    const tl = gsap.timeline({ delay: 0.5 });
    const timePerCharacter = 0.2;

    words.forEach((el) => {
      tl.from(el, {
        text: "",
        duration: el.innerHTML.length * timePerCharacter,
        ease: "none",
      });
    });

  }, []);
  return (
    <div
      className={
        isSplash
          ? "fixed top-0 right-0 bottom-0 left-0 z-50 bg-black overflow-hidden splashScreen"
          : "hidden"
      }
    >
      <div className="flex justify-center items-center fixed top-0 right-0 bottom-0 left-0 ">
      <svg
      ref={svgRef}
      viewBox="0 0 240 80"
      xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
        <linearGradient id="myGradient" x1="65%" y1="55%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#215efa" />
          <stop offset="100%" stopColor="white" />
        </linearGradient>
      </defs>
      <style>{`
        .small {
          font: italic 13px sans-serif;
          fill:white;
        }
        .heavy {
          font: bold 30px sans-serif;
          fill:white;
        }
        .Rrrrr {
          font: italic 40px serif;
          fill: url(#myGradient);
        }
      `}</style>

      {/* <text x="20" y="35" className="small">Hello,</text> */}
      <text x="40" y="35" className="heavy">Welcome</text>
      <text x="55" y="55" className="small">in</text>
      <text x="65" y="55" className="Rrrrr">CodeSlu!</text>
    </svg>
      </div>
    </div>
  );
};

export default SplashScreen;


