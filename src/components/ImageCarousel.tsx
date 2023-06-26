"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const a = [];
  for (let i = 0; i < 10; i++) {
    a.push(i);
  }
  const handleArrow = (direction: string) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : a.length - 1);
    }
    if (direction === "r") {
      setIndex(index !== a.length - 1 ? index + 1 : 0);
    }
    console.log("index ke " + index);
  };
  return (
    <div className="testSlider relative h-[60vw] bg-blue-300 flex items-center overflow-auto gap-5">
      <div className="sticky w-5 h-5 left-0 bottom-0 top-0 m-auto z-[2]">
        <AiOutlineArrowLeft className="w-5 h-5" />
      </div>
      <div className="carouselContainer">
        <div className="w-[80vw] h-[40vw] relative">
          <Image
            src={
              "https://images.unsplash.com/photo-1550401732-f2615d09b2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            }
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="carouselContainer">
        <div className="w-[80vw] h-[40vw] bg-gray-500"></div>
      </div>
      <div className="carouselContainer">
        <div className="w-[80vw] h-[40vw] bg-gray-400"></div>
      </div>
      <div className="carouselContainer">
        <div className="w-[80vw] h-[40vw] bg-gray-300"></div>
      </div>
      <div className="sticky w-5 h-5 right-0 bottom-0 top-0 m-auto z-[2]">
        <AiOutlineArrowRight className="w-5 h-5" />
      </div>
    </div>
  );
};

export default ImageCarousel;
