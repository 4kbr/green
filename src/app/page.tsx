import HomeIconMenus from "@/components/HomeIconMenus/HomeIconMenus";
import ImageCarousel from "@/components/ImageContainer/ImageCarousel";

const Home = () => {
  const a = [];
  for (let i = 0; i < 10; i++) {
    a.push(i);
  }
  return (
    <div className="min-h-[200vh] w-full flex flex-col gap-y-5">
      <ImageCarousel />
      <HomeIconMenus />
      <div className="">
        <h1 className="text-2xl">New medical product</h1>
      </div>
    </div>
  );
};

export default Home;
