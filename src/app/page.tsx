import HomeIconMenus from "@/components/HomeIconMenus/HomeIconMenus";
import HomeProducts from "@/components/HomeProducts/HomeProducts";
import ImageCarousel from "@/components/ImageContainer/ImageCarousel";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-y-5">
      <ImageCarousel />
      <HomeIconMenus />
      <HomeProducts />
    </div>
  );
};

export default Home;
