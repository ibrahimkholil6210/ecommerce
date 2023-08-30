import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";
import { CategoryItem } from "./Categories";

const FilterItem = ({ item }: { item: CategoryItem }) => {
  const params = useParams();
  const active = params.name === item.resourceName;
  return (
    <li className="mt-2 flex text-black dark:text-white" key={item.name}>
      <Link
        href={item.path}
        className={clsx(
          "w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100",
          {
            "underline underline-offset-4": active,
          }
        )}
      >
        {item.name}
      </Link>
    </li>
  );
};

export default FilterItem;