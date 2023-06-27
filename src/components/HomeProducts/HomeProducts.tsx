import Image from "next/image";
import styles from "./HomeProducts.module.css";
import ProductItem from "../ProductItem/ProductItem";
const HomeProducts = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold text-primary">New medical product</h1>
      <div className="flex gap-5 bg-blue-300 w-[100vw] ">
        <ProductItem
          currentPrice={25000}
          imgSrc="https://images.pexels.com/photos/2477379/pexels-photo-2477379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Teh Manis Asli Sunda Minuman manis seperti anda CIRAOUS PUNYA"
          sold={10}
        />
        <ProductItem
          currentPrice={35000}
          imgSrc="https://images.pexels.com/photos/2477379/pexels-photo-2477379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Teh Manis Asli Sunda Minuman manis seperti anda CIRAOUS PUNYA"
          sold={10}
          rate={4.5}
          discount={0.5}
          price={35000 / 0.5}
        />
        <ProductItem
          currentPrice={35000}
          imgSrc="https://images.pexels.com/photos/2477379/pexels-photo-2477379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Teh Manis Asli Sunda Minuman manis seperti anda CIRAOUS PUNYA"
          sold={10}
          rate={4.5}
          discount={0.9}
          price={35000 / 0.9}
        />
        <ProductItem
          currentPrice={35000}
          imgSrc="https://images.pexels.com/photos/2477379/pexels-photo-2477379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Teh Manis Asli Sunda Minuman manis seperti anda CIRAOUS PUNYA"
          sold={10}
          rate={4.5}
          discount={0.87}
          price={35000 / 0.87}
        />
      </div>
    </div>
  );
};

export default HomeProducts;
{
  /* <div className="flex flex-col w-36 bg-secondary rounded-xl items-center overflow-hidden">
  <div className="relative w-full h-36">
    <Image
      src={
        "https://images.pexels.com/photos/952357/pexels-photo-952357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
      fill
      alt="lemon"
      className="object-cover"
    />
  </div>
  <div className="w-full p-2 flex flex-col gap-1">
    <div className={`h-10 w-full text-sm line-clamp-2`}>
      <p>Lemon Granade PH +3 Membantu Menyembuhkan Haus asd</p>
    </div>
    <div className="">
      <span className="font-bold">Rp 12.000</span>
      <div className="flex gap-1 items-center">
        <span className="bg-red-200 text-xs p-1 rounded-md text-red-600">
          61%
        </span>
        <span className="text-xs line-through">Rp 24.000</span>
      </div>
    </div>
    <div className="text-xs">
      <span>⭐️ 4.1 | Terjual 500+</span>
    </div>
  </div>
</div>; */
}
