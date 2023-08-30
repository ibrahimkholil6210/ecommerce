import Image from "next/image";
import Link from "next/link";

export interface Product {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  slug: string;
  category: string;
}

const Product = ({ product }: { product: Product }) => {
  return (
    <Link key={product.id} href={`/product/${product.slug}`} className="cursor-pointers">
      <div className="rounded">
        <div className="relative aspect-square h-full w-full">
          <Image
            src={product.thumbnailUrl}
            fill
            alt="Product Image"
            className="rounded"
          />
        </div>
        <div className="text-white bg-[#121212] rounded mt-3 text-xs font-semibold flex justify-between items-center">
          <span>{product.title}</span>
          <span className="bg-[#2563eb] rounded-full px-2 py-3">
            ৳1200 Taka
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
