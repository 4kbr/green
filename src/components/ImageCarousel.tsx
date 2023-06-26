"use client";
import Image from "next/image";
import { LegacyRef, ReactNode, useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef(null);
  const a = [];
  for (let i = 0; i < 5; i++) {
    a.push(i);
  }
  const handleArrow = (direction: string) => {
    console.log(window.screen.width);
    const widthScreen = window.screen.width;
    const whalf = window.screen.width / 8;
    if (direction === "l") {
      index !== 0 && setIndex((prev) => prev - 1);
      scrollRef.current.scrollLeft -= widthScreen - whalf * index;
    }
    if (direction === "r") {
      index !== a.length - 1 && setIndex((prev) => prev + 1);
      scrollRef.current.scrollLeft += widthScreen - whalf * index;
    }
    console.log("index ke " + index);
  };
  return (
    <div
      className="testSlider relative h-[60vw] bg-blue-300 flex items-center overflow-auto scroll-smooth gap-5 w-[100vw]"
      ref={scrollRef}
    >
      <div
        className="sticky w-5 h-5 left-0 bottom-0 top-0 z-[2]"
        onClick={() => handleArrow("l")}
      >
        <AiOutlineArrowLeft className="w-5 h-5" />
      </div>
      {a.map((i, nome) => (
        <div className="carouselContainer" key={i}>
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
      ))}
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
