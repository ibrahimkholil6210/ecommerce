import {
  ArrowLeftIcon,
  ArrowRightIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import supabase from "@/config/supabase";
import Image from "next/image";
import React from "react";
import { GridTileImage } from "@/components/GridTileImage";

export async function generateStaticParams() {
  const { data: products } = await supabase.from("products").select("*");

  return (
    products?.map((product) => ({
      slug: product.slug,
    })) || []
  );
}

export const revalidate = 10;

const fetchProduct = async (slug: string) => {
  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  return product;
};

const Product: React.FC<{ params: { slug: string } }> = async ({ params }) => {
  const product = await fetchProduct(params.slug);
  const buttonClassName =
    "h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center";
  return (
    <div className="grid grid-cols-3 gap-8 container mx-auto bg-black p-12 min-h-screen">
      <div className="col-span-2">
        <div className="aspect-square relative">
          <Image src={product.thumbnailUrl} fill alt="product img" className="rounded" />
        </div>
        <div className="flex justify-center mt-8">
          <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
            <button
              aria-label="Previous product image"
              className={buttonClassName}
            >
              <ArrowLeftIcon className="h-5" />
            </button>
            <div className="mx-1 h-6 w-px bg-neutral-500"></div>
            <button aria-label="Next product image" className={buttonClassName}>
              <ArrowRightIcon className="h-5" />
            </button>
          </div>
        </div>
        <div>
          <ul className="my-8 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
            <li className="h-20 w-20">
              <GridTileImage
                alt={"image.altText"}
                src={product.thumbnailUrl}
                width={80}
                height={80}
                active={true}
              />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="pb-6 border-b-[1.5px] border-[#404040]">
          <h1 className=" text-5xl font-medium mb-2">{product.title}</h1>
          <div className="flex">
            <p className="bg-[#2563eb] rounded-full px-2 py-3">৳1200 Taka</p>
          </div>
        </div>
        <div className="mt-6">
          <p className=" text-sm text-[#ffffff99]">{product.description}</p>
        </div>
        <div className="mt-6">
          <button
            aria-label="Add item to cart"
            className={clsx(
              "relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90"
            )}
          >
            <div className="absolute left-0 ml-4">
              <PlusIcon className="h-5" />
            </div>
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
