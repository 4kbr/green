"use client";
import Image from "next/image";
import { LegacyRef, ReactNode, useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  const imgs = [
    "https://images.unsplash.com/photo-1550401732-f2615d09b2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.pexels.com/photos/14502681/pexels-photo-14502681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/16968225/pexels-photo-16968225/free-photo-of-blue-angels-5-6.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3074526/pexels-photo-3074526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/16208497/pexels-photo-16208497/free-photo-of-hills-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  // for (let i = 0; i < 5; i++) {
  //   a.push("https://images.unsplash.com/photo-1550401732-f2615d09b2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80");
  // }
  const handleArrow = (direction: string) => {
    if (direction === "l") {
      const isFirstSlid = currentIndex === 0;
      const newIndex = isFirstSlid ? imgs.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }
    if (direction === "r") {
      const isLastChild = currentIndex === imgs.length - 1;
      const newIndex = isLastChild ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  };
  return (
    <div className="testSlider relative h-[60vw] w-full  flex items-center">
      <div
        className="sticky w-5 h-5 left-0 bottom-0 top-0 m-auto z-[2]"
        onClick={() => handleArrow("l")}
      >
        <AiOutlineArrowLeft className="w-5 h-5" />
      </div>

      <div
        className="w-[95vw] h-[45vw] relative m-auto bg-cover bg-center  duration-1000"
        style={{ backgroundImage: `url(${imgs[currentIndex]})` }}
      >
        {/* <Image
          src={imgs[currentIndex]}
          alt=""
          fill
          className="object-cover object-center rounded-xl transition-all duration-1000"
        /> */}
      </div>

      <div
        className="sticky w-5 h-5 right-0 bottom-0 top-0 m-auto z-[2]"
        onClick={() => handleArrow("r")}
      >
        <AiOutlineArrowRight className="w-5 h-5" />
      </div>
    </div>
  );
};

export default ImageCarousel;
