// "use client";

import { useAppSelector } from "@/store/Hooks/Hooks";
import type { IProduct } from "@/types/ProductTypes";

import { FiCreditCard, FiLock, FiShoppingCart } from "react-icons/fi";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

interface CartTotalProps {
  style?: string;
  items: IProduct[];
}
export default function CartTotal({ style, items }: CartTotalProps) {
  const cartItems = useAppSelector((state) => state.CartReducer.items);

  const subtotal = items.reduce((total, next) => {
    return total + next.price * cartItems[next.id];
  }, 0);

  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Proceeding to checkout page...");
    }, 1200);
  };
  const emptyConatiner = useRef(null);
  useGSAP(
    () => {
      gsap.from(emptyConatiner.current,{
        y:350,
        scale:0,
        duration:0.7
      })
    },
    {
      dependencies: [emptyConatiner]
    },
  );
  if (items.length === 0) {
    return (
      <div
        ref={emptyConatiner}
        className={`my-6 p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-sm text-center ${style}`}
      >
        <div className="w-14 h-14 mx-auto mb-4 bg-violet-50 dark:bg-neutral-800 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center">
          <FiShoppingCart className="w-7 h-7" />
        </div>

        <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-2">
          Your cart is empty
        </h3>

        <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs mx-auto">
          Add some products to your cart to proceed with checkout.
        </p>
      </div>
    );
  }
  return (
    <div
      className={`my-6 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-sm  ${style}`}
    >
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-5 border-b border-neutral-100 dark:border-neutral-800 pb-3">
        Order Summary
      </h2>

      <div className="space-y-3.5 text-sm">
        <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
          <span>Subtotal</span>
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">
            ${subtotal.toFixed(2)}
          </span>
        </div>
      </div>

      <button
        onClick={handleCheckout}
        disabled={isLoading}
        className={`w-full mt-6 py-3.5 px-4 flex items-center justify-center gap-2 text-sm font-bold text-white transition-all duration-200 shadow-md cursor-pointer
          ${
            isLoading
              ? "bg-violet-400 dark:bg-neutral-600 cursor-not-allowed rounded-xl"
              : "rounded-bl-3xl rounded-tr-3xl hover:rounded-bl-none! hover:rounded-tr-none! hover:rounded-tl-3xl hover:rounded-br-3xl bg-violet-600 hover:bg-violet-700 active:scale-98 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          }`}
      >
        {isLoading ? (
          <>
            <div className="w-4 h-4 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin" />
            <span>Processing...</span>
          </>
        ) : (
          <>
            <FiCreditCard className="text-lg" />
            <span>Proceed to Checkout</span>
          </>
        )}
      </button>

      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-neutral-400 dark:text-neutral-500">
        <FiLock className="w-3.5 h-3.5 text-emerald-500" />
        <span>Encrypted and Secure Checkout</span>
      </div>
    </div>
  );
}
