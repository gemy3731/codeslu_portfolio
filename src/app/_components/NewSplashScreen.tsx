'use client'
import  { useEffect, useState } from 'react'

const NewSplashScreen = () => {
    const [isSplash, setIsSplash] = useState(true);

      useEffect(() => {
        if (sessionStorage.getItem("isSplash")) {
          setIsSplash(false);
        }else{
        setTimeout(() => {
          setIsSplash(false);
          sessionStorage.setItem("isSplash", isSplash.toString());
        },6000);
      }
      }, [isSplash]);

  return (
    <div className={
        isSplash 
          ? "fixed top-0 right-0 bottom-0 left-0 z-50 bg-white overflow-hidden flex justify-center items-center splashScreen"
          : "hidden"
      }>
      <h3 className="codesluScreen  ">
          <span className="c-char">C</span>
          <span className="o-char">O</span>
          <span className="d-char">D</span>
          <span className="e-char">E</span>
          <span className="s-char">S</span>
          <span className="l-char">L</span>
          <span className="u-char">U</span>
        </h3>
    </div>
  )
}

export default NewSplashScreen
