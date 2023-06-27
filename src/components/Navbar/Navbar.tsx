import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex h-24 justify-between items-center px-5 fixed bg-main w-full z-[99]">
      <Link href={"/"} className="font-bold text-xl hidden">
        FUYYA
      </Link>
      <div className="relative w-[80%]">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          🔍
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Kue putu..."
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-transparent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          🔍
        </button>
      </div>
      <button className="hidden">Sigin</button>
      <button>
        <AiOutlineMenu className="h-10 w-10" />
      </button>
    </div>
  );
};

export default Navbar;
