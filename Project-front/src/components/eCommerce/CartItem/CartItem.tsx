"use client";

import { editItemQty, removeFromCart } from "@/store/Cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@/store/Hooks/Hooks";
import type { IProduct } from "@/types/ProductTypes";
import React from "react";
import { FiTrash2 } from "react-icons/fi";
interface CartItemProps {
  style?: string;
  item: IProduct;
}
export default React.memo(function CartItem({ style, item }: CartItemProps) {
  const qty = useAppSelector((state) => state.CartReducer.items[item.id]);
  const handleQtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(editItemQty({ id: item.id, qty: Number(e.target.value) }));
  };

  const dispatch = useAppDispatch();
  const handleRemove = () => {
   
    dispatch(removeFromCart(item.id));
  
  }; 
  console.log(`render item: ${item.id} : ${item.title}`);

  const qtyOptions = Array.from({ length: item.max }, (_, index) => index + 1);

  return (
    <div className={` my-6  ${style}`}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
            <img
              src={item.img}
              alt={item.title}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              {item.cat_prefix}
            </span>

            <h3 className="text-base font-bold text-neutral-800 dark:text-neutral-100 line-clamp-1">
              {item.title}
            </h3>

            <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
              ${item.price.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-neutral-100 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <label
              htmlFor={`qty-${item.id}`}
              className="text-xs font-medium text-neutral-500 dark:text-neutral-400"
            >
              Qty:
            </label>
            <select
              id={`qty-${item.id}`}
              value={qty}
              onChange={handleQtyChange}
              className="px-3 py-1.5 text-sm font-semibold bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer transition-all"
            >
              {qtyOptions.map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="text-right min-w-18.75">
            <span className="text-sm font-bold text-neutral-900 dark:text-white block">
              ${(item.price * qty).toFixed(2)}
            </span>
          </div>

          <button
            onClick={handleRemove}
            title="Remove item"
            className="p-2 text-neutral-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 cursor-pointer"
          >
            <FiTrash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
});
