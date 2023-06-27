import { formatDecimalToPercent } from "@/utils/utils";
import Image from "next/image";

interface Props {
  title: string;
  imgSrc: string;
  currentPrice: number;
  discount?: number;
  price?: number;
  rate?: number;
  sold?: number;
  heightFit?: boolean;
}
const ProductItem = ({
  title,
  currentPrice,
  discount,
  price,
  imgSrc,
  rate,
  sold,
  heightFit,
}: Props) => {
  return (
    <div
      className={`flex flex-col w-36 bg-[#222] rounded-xl items-center overflow-hidden ${
        heightFit && "h-fit"
      } min-h-[275px]`}
    >
      <div className="relative w-full h-36">
        <Image src={imgSrc} fill alt="lemon" className="object-cover" />
      </div>
      <div className="w-full p-2 flex flex-col gap-1">
        <div className={`h-10 w-full text-sm line-clamp-2`}>
          <p>{title}</p>
        </div>
        <span className="font-bold">
          Rp {currentPrice.toLocaleString("id-ID")}
        </span>
        {discount && (
          <div className="flex gap-1 items-center">
            <span className="bg-red-200 text-xs p-1 rounded-md text-red-600">
              {formatDecimalToPercent(discount)}
            </span>
            <span className="text-xs line-through">
              Rp {price?.toLocaleString("id-ID")}
            </span>
          </div>
        )}
        {(rate || sold) && (
          <div className="text-xs">
            <span>
              {rate && "⭐️ " + rate + " | "}{" "}
              {sold && sold != 0 && "Terjual " + sold}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
