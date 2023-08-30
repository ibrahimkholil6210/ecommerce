import Product from "@/components/Product";
import supabase from "@/config/supabase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search | Deshi Store",
  description: "Ecommerce website for Deshi Store",
};

const fetchSearchedProducts = async (query: string) => {
  const { data, error } = await supabase
    .from("products")
    .select("")
    .textSearch("title", query);
  if (error) {
    console.log(error);
  }
  return data;
};

const Search = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const query = searchParams?.q;
  const products = await fetchSearchedProducts(query as string);
  const resultsText = products && products?.length > 1 ? "results" : "result";

  return (
    <div className="container mx-auto min-h-screen">
      {query ? (
        <p className="mb-4">
          {products?.length === 0
            ? "There are no products that match "
            : `Showing ${products?.length} ${resultsText} for `}
          <span className="font-bold">&quot;{query}&quot;</span>
        </p>
      ) : null}
      <div className="grid grid-cols-5 gap-4">
        {products?.map((p: any) => {
          return <Product key={p.id} product={p} />;
        })}
      </div>
    </div>
  );
};

export default Search;
