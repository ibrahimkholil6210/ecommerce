import Products from "@/components/Products";
import ProductsPlaceholder from "@/components/ProductsPlaceholder";
import { Suspense } from "react";

export function generateMetadata({ params }: { params: { name: string } }) {
  return {
    title: `Category: ${params.name}`,
    description: "Deshi store has wide range of products",
  };
}

const Category = ({ params }: { params: { name: string } }) => {
  return (
    <div>
      <Suspense fallback={<ProductsPlaceholder />}>
        <Products category={params.name} />
      </Suspense>
    </div>
  );
};

export default Category;
