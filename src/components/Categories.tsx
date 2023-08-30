"use client";
import clsx from "clsx";
import { Suspense } from "react";
import FilterItem from "./FilterItem";

export interface CategoryItem {
  path: string;
  name: string;
  resourceName: string;
}

const categoriesList: CategoryItem[] = [
  { path: "/category/all", name: "All", resourceName: "all" },
  { path: "/category/gadget", name: "Gadget", resourceName: "gadget" },
  { path: "/category/drinks", name: "Drinks", resourceName: "drinks" },
];

const CategoriesList = () => {
  return <FilterList list={categoriesList} title="Collections" />;
};

const skeleton = "mb-3 h-4 w-5/6 animate-pulse rounded";
const activeAndTitles = "bg-neutral-800 dark:bg-neutral-300";
const items = "bg-neutral-400 dark:bg-neutral-700";

const Categories = () => {
  return (
    <Suspense
      fallback={
        <div className="col-span-2 hidden h-[400px] w-full flex-none py-4 lg:block">
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
        </div>
      }
    >
      <CategoriesList />
    </Suspense>
  );
};

export default Categories;

const FilterList = ({
  list,
  title,
}: {
  list: CategoryItem[];
  title?: string;
}) => {
  return (
    <>
      <nav>
        {title ? (
          <h3 className="hidden text-xs text-neutral-500 md:block">
            Categories
          </h3>
        ) : null}
        <ul>
          <FilterItemList list={list} />
        </ul>
      </nav>
    </>
  );
};

const FilterItemList = ({ list }: { list: CategoryItem[] }) => {
  return (
    <>
      {list.map((item, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </>
  );
};
