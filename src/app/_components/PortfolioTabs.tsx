'use client'
import { Tabs } from "flowbite-react";
import { ImAppleinc } from "react-icons/im";
import { GrAndroid } from "react-icons/gr";
import { FaGamepad } from "react-icons/fa";
import { IoPlanetSharp } from "react-icons/io5";
import PortfolioCard from "./PortfolioCard";
import imgThree from "../../../assests/1.jpg";
import img1 from "../../../assests/1_New1.jpg";
const PortfolioTabs = () => {
  return (
    <Tabs aria-label="Tabs with icons" variant="underline" className="flex justify-center gap-10">
      <Tabs.Item active title="IOS" icon={ImAppleinc}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <PortfolioCard key={i} image={imgThree} />
        ))}
        </div>
      </Tabs.Item>
      <Tabs.Item title="ANDROID" icon={GrAndroid}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <PortfolioCard key={i} image={img1} />
        ))}
        </div>
      </Tabs.Item>
      <Tabs.Item title="WEB" icon={IoPlanetSharp}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <PortfolioCard key={i} image={imgThree} />
        ))}
        </div>
      </Tabs.Item>
      <Tabs.Item title="GAMES" icon={FaGamepad}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <PortfolioCard key={i} image={img1} />
        ))}
        </div>
      </Tabs.Item>
    </Tabs>
  )
}

export default PortfolioTabs
