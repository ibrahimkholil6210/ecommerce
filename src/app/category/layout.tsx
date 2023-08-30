import Categories from "@/components/Categories";
import { Suspense } from "react";

const CategoryLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex container mx-auto">
      <div className="order-first w-full flex-none md:max-w-[125px]">
        <Suspense>
          <Categories />
        </Suspense>
      </div>
      <div className="order-last min-h-screen w-full md:order-none">
        {children}
      </div>
    </div>
  );
};

export default CategoryLayout;
