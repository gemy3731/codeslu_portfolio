'use client'
import Aos from "aos";
import { useEffect } from "react";


const AnimatedHeader = ({animation,header,classes}:{animation:string,header:string,classes?:string}) => {
      useEffect(() => {
        Aos.init({
          duration: 1500,
          easing: "ease-in-out",
        });
      }, []);
  return (
    <h2
        data-aos={animation}
        className={`${classes}  uppercase my-10 text-[32px] md:text-[48px] font-semibold text-center dark:text-transparent dark:bg-clip-text  dark:bg-gradient-to-t dark:from-transparent dark:via-white dark:to-transparent after:bg-black`}
      >
        {header}
      </h2>
  )
}

export default AnimatedHeader
