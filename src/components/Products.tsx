import supabase from "@/config/supabase";
import Product from "./Product";

const fetchProducts = async (category: string) => {
  if (category === "all") {
    const { data } = await supabase.from("products").select("*");
    return data;
  } else {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category", category);
    return data;
  }
};

export const revalidate = 10;

const Products = async ({ category }: { category: string }) => {
  const products = await fetchProducts(category);

  return (
    <div className="grid grid-cols-5 gap-4">
      {products?.map((p) => {
        return <Product key={p.id} product={p} />;
      })}
    </div>
  );
};

export default Products;
