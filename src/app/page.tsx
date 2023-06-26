import ImageCarousel from "@/components/ImageCarousel";

const Home = () => {
  const a = [];
  for (let i = 0; i < 10; i++) {
    a.push(i);
  }
  return (
    <div className="min-h-[200vh] w-full flex flex-col">
      <ImageCarousel />
      <div className="h-64"></div>
    </div>
  );
};

export default Home;
