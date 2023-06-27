import Link from "next/link";
import React from "react";

const Footbar = () => {
  return (
    <div className="bg-main flex flex-col">
      <div className="">
        <ul>
          <li>
            <Link
              className="cursor-pointer hover:text-secondary"
              href={"/about-us"}
            >
              Tentang FUYYAHH
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer hover:text-secondary"
              href={"/blog"}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer hover:text-secondary"
              href={"/contact-us"}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="font-bold text-lg">
        <span>&copy; 2023, FUYYAHH</span>
      </div>
    </div>
  );
};

export default Footbar;
