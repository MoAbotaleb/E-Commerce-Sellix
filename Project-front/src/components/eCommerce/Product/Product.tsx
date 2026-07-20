"use client";
import { LoadSpinner } from "@/components/common/LoadSpinner";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ItemMedia } from "@/components/ui/item";
import { Spinner } from "@/components/ui/spinner";
import { addToCart } from "@/store/Cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@/store/Hooks/Hooks";
import type { IProduct } from "@/types/ProductTypes";
import React, { useState } from "react";
import { RiLoader5Fill } from "react-icons/ri";

interface ProductProps {
  style?: string;
  item: IProduct;
}
export default React.memo(function Product({ style, item }: ProductProps) {
  const dispatch = useAppDispatch();
  const [btnAddCartDisable, setBtnAddCartDisable] = useState(false);
  const QtyInCart = useAppSelector(
    (state) => state.CartReducer.items[item.id] || 0,
  );

  const remain = item.max - QtyInCart;
  const canAdd = remain > 0 ? true : false;
  function handleAddToCart() {
    setBtnAddCartDisable(true);
    dispatch(addToCart(item.id));
    setTimeout(() => {
      setBtnAddCartDisable(false);
    }, 400);
  }

  return (
    <CardContainer
      className={`inter-var border border-black/[0.08] dark:border-white/[0.08] rounded-xl  ${style}`}
    >
      <CardBody className="flex! flex-col! justify-between! items-center gap-2 bg-white dark:bg-neutral-950 rounded-xl relative group/card p-4 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-violet-500/[0.03] dark:hover:shadow-emerald-500/[0.03]">
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
          className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 capitalize block w-full text-center "
        >
          {item.title}
        </CardItem>
        <CardItem
          translateZ={40}
          as="p"
          className="text-base font-bold text-neutral-700 dark:text-neutral-200 "
        >
          {item.price.toFixed(2)} $
        </CardItem>
        <p className="text-gray-500 text-xs capitalize font-semibold ">
          {canAdd ? `you can add: ${remain} item(s)` : `you reach to the limit`}
        </p>

        <CardItem
          onClick={handleAddToCart}
          translateZ={40}
          as="button"
          disabled={btnAddCartDisable}
          className={`px-4 py-3 w-full text-xs font-bold capitalize transition-all duration-200 shadow-sm flex items-center justify-center gap-2
            ${
              btnAddCartDisable
                ? "bg-violet-400 dark:bg-neutral-400 opacity-80 cursor-not-allowed scale-95 rounded-4xl"
                : "rounded-bl-4xl rounded-tr-4xl hover:rounded-bl-none! hover:rounded-tr-none! hover:rounded-tl-4xl hover:rounded-br-4xl bg-violet-600 hover:bg-violet-700 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-neutral-200 text-white cursor-pointer"
            }

            ${
              canAdd
                ? ""
                : "bg-violet-400 hover:bg-violet-400 dark:bg-neutral-400 opacity-80 cursor-not-allowed scale-95 rounded-4xl pointer-events-none"
            }
            
            `}
        >
          {btnAddCartDisable ? (
            <>
              <RiLoader5Fill className="animate-spin text-base" />
              <span>Adding...</span>
            </>
          ) : (
            "Add to cart"
          )}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
});
