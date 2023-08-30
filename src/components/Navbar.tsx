import React, { Suspense } from "react";
import LogoSquare from "./Logo";
import Link from "next/link";
import Search from "./Search";
import clsx from "clsx";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import OpenCart from "./OpenCart";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <div className="relative flex items-center justify-between py-4 sm:py-6 container mx-auto">
      <div className="flex items-center md:w-1/3">
        <Link
          href="/"
          className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
        >
          <LogoSquare />
          <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
            Deshi Store
          </div>
        </Link>
        <div>
          <ul className="gap-6 text-sm md:flex md:items-center">
            <li>
              <Link
                href={"/category/all"}
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                All
              </Link>
            </li>
            <li>
              <Link
                href={"/category/gadget"}
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                Gadget
              </Link>
            </li>
            <li>
              <Link
                href={"/category/drinks"}
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                Drinks
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden justify-center md:flex md:w-1/3">
        <Search />
      </div>
      <div className="flex justify-end md:w-1/3">
        <Suspense fallback={<OpenCart />}>
          <Cart />
        </Suspense>
      </div>
    </div>
  );
};

export default Navbar;
