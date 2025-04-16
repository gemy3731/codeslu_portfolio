'use client'
import { Tabs } from "flowbite-react";
import { ImAppleinc } from "react-icons/im";
import { GrAndroid } from "react-icons/gr";
import { FaGamepad } from "react-icons/fa";
import { IoPlanetSharp } from "react-icons/io5";
import PortfolioCard from "./PortfolioCard";
import { useEffect, useState } from "react";
import Aos from "aos";
import { IProjectData } from "./Portfolio";
const PortfolioTabs = ({projects}:{projects:IProjectData[]}) => {
  const [activeTab, setActiveTab] = useState('ios')
  useEffect(() => {
    // console.log(projects.filter(project=>project.category==="ios"))
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

  }, [activeTab,projects])
  
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <Tabs aria-label="Tabs with icons" variant="underline" className="flex justify-center gap-10 tabsItems" >
      {projects.filter(project=>project.category==="ios").length>0&&<Tabs.Item active title="IOS" icon={ImAppleinc}  >
          <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-0">
        {projects.filter(project=>project.category==="ios").splice(0,4).map((project) => (
          <PortfolioCard key={project._id}  activeTab={activeTab} tab='ios' project={project} />
        ))}
        </div>
      </Tabs.Item>}
     { projects.filter(project=>project.category==="android").length>0&&<Tabs.Item title="ANDROID" icon={GrAndroid} >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-0">
        {projects.filter(project=>project.category==="android").splice(0,4).map((project) => (
          <PortfolioCard key={project._id}  activeTab={activeTab} tab='android' project={project} />
        ))}
        </div>
      </Tabs.Item>}
      {projects.filter(project=>project.category==="web").length>0&&<Tabs.Item title="WEB" icon={IoPlanetSharp} >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-0">
        {projects.filter(project=>project.category==="web").splice(0,4).map((project) => (
          <PortfolioCard key={project._id}  activeTab={activeTab} tab='web' project={project} />
        ))}
        </div>
      </Tabs.Item>}
      {projects.filter(project=>project.category==="games").length>0&&<Tabs.Item title="GAMES" icon={FaGamepad} >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-0">
        {projects.filter(project=>project.category==="games").splice(0,4).map((project) => (
          <PortfolioCard key={project._id}  activeTab={activeTab} tab='games' project={project} />
        ))}
        </div>
      </Tabs.Item>}
      
    </Tabs>
  )
}

export default PortfolioTabs
