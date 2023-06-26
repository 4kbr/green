import ImageCarousel from "@/components/ImageCarousel";
import Image from "next/image";
import React from "react";

const Home = () => {
  const a = [];
  for (let i = 0; i < 10; i++) {
    a.push(i);
  }
  return (
    <div className="min-h-[200vh] w-full flex flex-col">
      <ImageCarousel />
    </div>
  );
};

export default Home;
