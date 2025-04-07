"use client";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import { useState, useEffect } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const images = [
  { url: "https://i.ibb.co/qCkd9jS/img1.jpg", name: "Switzerland" },
  { url: "https://i.ibb.co/jrRb11q/img2.jpg", name: "Finland" },
  { url: "https://i.ibb.co/NSwVv8D/img3.jpg", name: "Iceland" },
  { url: "https://i.ibb.co/Bq4Q0M8/img4.jpg", name: "Australia" },
  { url: "https://i.ibb.co/jTQfmTq/img5.jpg", name: "Netherland" },
  { url: "https://i.ibb.co/RNkk6L0/img6.jpg", name: "Ireland" },
];

interface ISliderData {
  _id: string;
  name: string;
  description: string;
  image: string;
}

export default function NewSlider() {
  // const [items, setItems] = useState(images);
  const [sliderData, setSliderData] = useState<ISliderData[]>([]);
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/slider`);
        const data = await response.json();
        // console.log(data)
        setSliderData(data);
      } catch (error) {
        console.error("Error in getData:", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(()=>{
        nextSlide()
    }, 4000);
    return () => {
        clearInterval(slideInterval)
    }
  }, []);

  const nextSlide = () => {
    setSliderData((prevItems) => [...prevItems.slice(1), prevItems[0]]);
  };

  const prevSlide = () => {
    setSliderData((prevItems) => [
      prevItems[prevItems.length - 1],
      ...prevItems.slice(0, prevItems.length - 1),
    ]);
  };

  return (
    <section id="home" className="container mx-auto">
      <div className="slider-container mx-auto rounded-xl">
        <div className="new-slide">
          {sliderData.map((item,i) => (
            <div
              key={item._id}
              className="item"
              style={{
                backgroundImage: `url(${images[i].url})`,
              }}
            >
              <div className="slider-content">
                <div className="slider-name sm:text-[40px]">{item.name}</div>
                <div className="des text-[14px] sm:text-[18px]">
                  {item.description}
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
    </section>
  );
}
