"use client"
import {  Modal } from "flowbite-react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState } from "react"

interface ScreensSliderProps {
  url: string,
  name: string
}

const carousel: KeenSliderPlugin = (slider) => {
    const z = 300
    function rotate() {
      const deg = 360 * slider.track.details.progress
      slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
      const deg = 360 / slider.slides.length
      slider.slides.forEach((element, idx) => {
        element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
      })
      rotate()
    })
    slider.on("detailsChanged", rotate)
  }

const ScreensSlider = ({screens}:{screens:ScreensSliderProps[]}) => {
    const [openModal, setOpenModal] = useState<string|undefined>('');
    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
          loop: true,
          selector: ".carousel__cell",
          renderMode: "custom",
          mode: "free-snap",
        },
        [carousel]
      )
  return (
    <>
    <div className="wrapper">
    <div className="scene">
      <div className="carousel keen-slider" ref={sliderRef}>
        {screens.map((screen, i) => (
          <div onClick={() => setOpenModal(screen.url)} key={i} className={`carousel__cell number-slide${i+1}`}>
            <img src={screen.url} alt={screen.name}  className="w-full "/>
          </div>
        ))}
      </div>
    </div>
  </div>
  <Modal show={openModal?true:false} onClose={() => setOpenModal('')}>
        <Modal.Header>Project Screens</Modal.Header>
        <Modal.Body className="p-0">
          <img src={openModal} alt=""  className="w-full"/>
        </Modal.Body>
      </Modal>
  </>
  )
}

export default ScreensSlider
