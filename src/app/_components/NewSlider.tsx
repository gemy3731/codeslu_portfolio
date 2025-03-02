"use client";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import { useState, useEffect } from "react";
// import imgOne from "../../../assests/logo.png";
const images = [
  { url: "https://i.ibb.co/qCkd9jS/img1.jpg", name: "Switzerland" },
  { url: "https://i.ibb.co/jrRb11q/img2.jpg", name: "Finland" },
  { url: "https://i.ibb.co/NSwVv8D/img3.jpg", name: "Iceland" },
  { url: "https://i.ibb.co/Bq4Q0M8/img4.jpg", name: "Australia" },
  { url: "https://i.ibb.co/jTQfmTq/img5.jpg", name: "Netherland" },
  { url: "https://i.ibb.co/RNkk6L0/img6.jpg", name: "Ireland" },
];

export default function NewSlider() {
  const [items, setItems] = useState(images);

  const nextSlide = () => {
    setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
  };

  const prevSlide = () => {
    setItems((prevItems) => [
      prevItems[prevItems.length - 1],
      ...prevItems.slice(0, prevItems.length - 1),
    ]);
  };

  return (
    <div className="container mx-auto">
      <div className="slider-container mx-auto rounded-xl">
        <div className="new-slide">
          {items.map((item, index) => (
            <div
              key={index}
              className="item"
              style={{
                backgroundImage: `url(${item.url})`,
              }}
            >
              <div className="slider-content">
                <div className="slider-name">{item.name}</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-button">
          <button className="prev" onClick={prevSlide}>
            <GrFormPreviousLink className="text-[24px] text-black mx-auto" />
          </button>
          <button className="next" onClick={nextSlide}>
            <GrFormNextLink className="text-[24px] text-black mx-auto" />
          </button>
        </div>
      </div>
    </div>
  );
}
