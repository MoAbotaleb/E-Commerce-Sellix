import type { IProduct } from "@/types/ProductTypes";
import CartItem from "../CartItem/CartItem";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

interface CartIemListProps {
  ProductsFullInfo: IProduct[];
}

export default function CartIemList({ ProductsFullInfo }: CartIemListProps) {
  const ShopCartScope = useRef(null);
  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".CartItem").forEach((item, index) => {
        gsap.from(item, {
          xPercent: index % 2 === 0 ? 120 : -120,
         
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
          delay: index * 0.15,
        });
      });
    },
    { scope: ShopCartScope },
  );
 
  return (
    <div ref={ShopCartScope} className="overflow-hidden">
      {ProductsFullInfo.length > 0 &&
        ProductsFullInfo.map((item) => (
          <CartItem key={item.id} item={item} style="CartItem" />
        ))}
    </div>
  );
}
