import { CleanUpRecordsByPrefix } from "@/store/Products/ProductsSlice";
import type { ICategory } from "@/types/CategoryTypes";
import { Link } from "react-router-dom";

interface CategoryProps {
  style?: string;
  item: ICategory;
}

export default function Category({ style, item }: CategoryProps) {
  return (
    <Link
      
      to={`/categories/products/${item.prefix}`}
    >
      <div
        key={item.id}
        className={`group flex flex-col items-center gap-2 cursor-pointer overflow-hidden ${style}`}
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-full border-2 border-transparent bg-gray-50 shadow-sm transition-all duration-300  group-hover:border-black group-hover:shadow-md">
          <img
            className="group-hover:scale-[1.1] group-hover:-rotate-10 duration-300"
            src={item?.img}
            alt={item.prefix}
          />
        </div>

        <h2 className="text-center text-xs sm:text-sm font-medium tracking-wide text-gray-600 capitalize transition-colors duration-300 group-hover:text-black">
          {item?.title}
        </h2>
      </div>
    </Link>
  );
}
