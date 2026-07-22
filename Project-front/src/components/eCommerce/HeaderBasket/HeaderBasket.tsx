import { GetCartTotalQty } from "@/selectors/cart/GetCartTotalQty";
import { useAppSelector } from "@/store/Hooks/Hooks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { scale } from "motion/react";
import { useMemo, useRef } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function HeaderBasket() {
  // const { items } = useAppSelector((state) => state.CartReducer);
  // const sum = useMemo(() => {
  //   console.log("calculation...");
  //   let arr = Object.values(items);
  //   if (arr.length > 0) {
  //     return arr.reduce((acc, cur) => {
  //       return acc + cur;
  //     }, 0);
  //   } else {
  //     return 0;
  //   }
  // }, [items]);
  const qty = useAppSelector(GetCartTotalQty);
  const currentScope = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (qty > 0) {
        const tl = gsap.timeline({
          defaults: {
            duration: 0.2,
            ease: "power4.inOut",
          },
        });
        tl.to("span", {
          rotate: 100,
          y: -50,
          x: 50,
        });
        tl.to(
          "span",

          {
            rotate: 0,
            y: 0,
            x: 0,
            duration: 1,
          },
        );
      }
    },
    {
      dependencies: [qty],
      scope: currentScope,
    },
  );

  return (
    <Link to="shopping-cart">
      <div className="flex items-center gap-2">
        <div className="relative" ref={currentScope}>
          <span className="ml-auto absolute -right-1 top-1 translate-y-[-50%] block w-fit bg-violet-500 px-1 rounded-full text-white text-[13px]">
            {/* {sum} */}
            {qty}
          </span>
          <HiOutlineShoppingCart className="text-3xl -mt-px" />
        </div>
        <span className="capitalize">cart</span>
      </div>
    </Link>
  );
}
