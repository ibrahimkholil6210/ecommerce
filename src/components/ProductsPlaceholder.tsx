const ProductsPlaceholder = async () => {
  return (
    <div className="grid grid-cols-5 gap-4 mt-1">
      {[1, 2, 3, 4, 5]?.map((p) => {
        return (
          <div key={p} className="bg-white rounded shadow">
            <div className="relative aspect-square mb-1">
              <div className="w-full min-h-full bg-gray-300 rounded animate-pulse" />
            </div>
            <div className="h-[40px] rounded">
              <div className="w-full min-h-full bg-gray-300 animate-pulse" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsPlaceholder;
