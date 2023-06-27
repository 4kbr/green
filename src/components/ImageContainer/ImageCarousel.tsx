"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadImage, setLoadImage] = useState(false);
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
    setLoadImage(true);
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
    setTimeout(() => {
      console.log("iya nih");
      setLoadImage(false);
    }, 100);
  };
  const goToImgIndex = (i: number) => {
    setLoadImage(true);
    setCurrentIndex(i);
    setTimeout(() => {
      console.log("iya nih");
      setLoadImage(false);
    }, 100);
  };

  return (
    <div className="testSlider relative h-[60vw] w-full  flex items-center flex-col">
      <div
        className="absolute w-5 h-5 left-5 bottom-0 top-0 m-auto z-[2] bg-gray-500 rounded-[50%] bg-opacity-25"
        onClick={() => handleArrow("l")}
      >
        <AiOutlineArrowLeft className="w-5 h-5" />
      </div>
      <div className="w-[90vw] h-[45vw] relative m-auto duration-1000">
        <Image
          src={imgs[currentIndex]}
          alt=""
          fill
          className={`object-cover object-center rounded-xl transition-all duration-500 ${
            loadImage && "scale-90 opacity-0"
          } `}
        />
      </div>
      <div
        className="absolute w-5 h-5 right-5 bottom-0 top-0 m-auto z-[2] bg-gray-500 rounded-[50%] bg-opacity-25"
        onClick={() => handleArrow("r")}
      >
        <AiOutlineArrowRight className="w-5 h-5" />
      </div>
      <div className="flex absolute bottom-0 justify-center items-center py-3">
        {imgs.map((imag, i) => (
          <div
            onClick={() => goToImgIndex(i)}
            className={`text-2xl cursor-pointer ${
              i === currentIndex && "text-primary"
            }`}
            key={i}
          >
            <BsDot />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
