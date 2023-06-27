import { FaHandHoldingMedical } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { ImPriceTags } from "react-icons/im";
import { TfiPackage } from "react-icons/tfi";
import styles from "./HomeIconstyles.module.css";
import Link from "next/link";

const HomeIconMenus = () => {
  return (
    <div className="flex items-start justify-center text-center overflow-hidden flex-wrap gap-y-5">
      <Link className={`${styles.iconDiv}`} href={"/"}>
        <FaRankingStar size={35} />
        <span>Super League</span>
      </Link>
      <Link className={`${styles.iconDiv}`} href={"/"}>
        <TfiPackage size={35} />
        <span>New Product</span>
      </Link>
      <Link className={`${styles.iconDiv}`} href={"/"}>
        <FaHandHoldingMedical size={35} />
        <span>Medical Kit</span>
      </Link>
      <Link className={`${styles.iconDiv}`} href={"/"}>
        <ImPriceTags size={35} />
        <span>Promo List</span>
      </Link>
      <Link className={`${styles.iconDiv}`} href={"/"}>
        <ImPriceTags size={35} />
        <span>Promo List</span>
      </Link>
      <Link className={`${styles.iconDiv}`} href={"/"}>
        <ImPriceTags size={35} />
        <span>Promo List</span>
      </Link>
      <Link className={`${styles.iconDiv}`} href={"/"}>
        <ImPriceTags size={35} />
        <span>Promo List</span>
      </Link>
    </div>
  );
};

export default HomeIconMenus;
