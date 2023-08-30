import ProductsPlaceholder from "@/components/ProductsPlaceholder";
import Products from "../components/Products";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto">
      <Suspense fallback={<ProductsPlaceholder />}>
        <Products category="all" />
      </Suspense>
    </main>
  );
}
