"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import type { IProduct } from "@/types/ProductTypes";

interface ProductProps {
  style?: string;
  item: IProduct;
}
export default function Product({ style, item }: ProductProps) {
  return (
    <CardContainer
      className={`inter-var border border-black/[0.08] dark:border-white/[0.08] rounded-xl  ${style}`}
    >
      <CardBody className="flex flex-col justify-between bg-white dark:bg-neutral-950 rounded-xl relative group/card p-4 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-violet-500/[0.03] dark:hover:shadow-emerald-500/[0.03]">
        <CardItem translateZ="60" className="w-full">
          <img
            src={item.img}
            height="1000"
            width="1000"
            className="h-30 w-full object-cover rounded-xl group-hover/card:shadow-md transition-shadow duration-300 bg-gray-200"
            alt={item.title}
          />
        </CardItem>

        <CardItem
          translateZ="50"
          className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 capitalize block w-full mt-4 text-center "
        >
          {item.title}
        </CardItem>

        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={40}
            as="p"
            className="text-base font-bold text-neutral-700 dark:text-neutral-200"
          >
            ${item.price}
          </CardItem>

          <CardItem
            translateZ={40}
            as="button"
            className="px-4 py-2  rounded-bl-4xl rounded-tr-4xl hover:rounded-bl-none! hover:rounded-tr-none! hover:rounded-tl-4xl hover:rounded-br-4xl bg-violet-600 hover:bg-violet-700 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-neutral-200 text-white text-xs font-bold capitalize cursor-pointer transition-all duration-200 shadow-sm"
          >
            Add to cart
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
