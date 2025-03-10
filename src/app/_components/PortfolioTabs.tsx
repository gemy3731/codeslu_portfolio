'use client'
import { Tabs } from "flowbite-react";
import { ImAppleinc } from "react-icons/im";
import { GrAndroid } from "react-icons/gr";
import { FaGamepad } from "react-icons/fa";
import { IoPlanetSharp } from "react-icons/io5";
import PortfolioCard from "./PortfolioCard";
import imgThree from "../../../assests/1.jpg";
import img1 from "../../../assests/1_New1.jpg";
import { useEffect, useState } from "react";
import Aos from "aos";
const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = useState('ios')
  useEffect(() => {
    const tabs = document.querySelectorAll('.tabsItems button');
    tabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        setActiveTab((e.target as HTMLElement)?.innerText?.toLowerCase());
      })
    })
    return () => {
      tabs.forEach((tab) => {
        tab.removeEventListener('click', (e) => {
          setActiveTab((e.target as HTMLElement)?.innerText?.toLowerCase());
        })
      })
    }

  }, [activeTab])
  
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <Tabs aria-label="Tabs with icons" variant="underline" className="flex justify-center gap-10 tabsItems" >
      <Tabs.Item active title="IOS" icon={ImAppleinc}  >
          <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <PortfolioCard key={i} image={imgThree} activeTab={activeTab} tab='ios' />
        ))}
        </div>
      </Tabs.Item>
      <Tabs.Item title="ANDROID" icon={GrAndroid} >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <PortfolioCard key={i} image={img1} activeTab={activeTab} tab='android' />
        ))}
        </div>
      </Tabs.Item>
      <Tabs.Item title="WEB" icon={IoPlanetSharp} >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <PortfolioCard key={i} image={imgThree} activeTab={activeTab} tab='web' />
        ))}
        </div>
      </Tabs.Item>
      <Tabs.Item title="GAMES" icon={FaGamepad} >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <PortfolioCard key={i} image={img1} activeTab={activeTab} tab='games' />
        ))}
        </div>
      </Tabs.Item>
    </Tabs>
  )
}

export default PortfolioTabs
