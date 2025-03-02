"use client";

import { useEffect, useRef } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";

const Portfolio = () => {
//   const sliderRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     if (!sliderRef.current) return;

//     const slider = tns({
//       container: sliderRef.current,
//       items: 1,
//       slideBy: "page",
//       autoplay: true,
//       axis: "vertical", // Vertical slider
//       controls: true,
//       nav: true,
//       mouseDrag: true,
//       speed: 500,
//     });
//     return () => {
//       slider.destroy(); // Cleanup on unmount
//     };
//   }, []);

  return (
    <></>
//     <section id="portfolio" className="container mx-auto">
//       <div className="container mx-auto">
//         <div ref={sliderRef} className="my-slider">
//           <div>
//             {/* <img src="" alt="Slide 1" /> */}
// <h4>hello</h4>
//           </div>
//           <div>
//             {/* <img src="" alt="Slide 2" /> */}
// <h4>hello</h4>
//           </div>
//           <div>
//             <h4>hello</h4>
//             {/* <img src="" alt="Slide 3" /> */}
//           </div>
//         </div>
//       </div>
//     </section>
  );
};

export default Portfolio;
