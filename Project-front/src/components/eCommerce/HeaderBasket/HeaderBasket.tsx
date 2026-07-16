import { HiOutlineShoppingCart } from "react-icons/hi2";

export default function HeaderBasket() {
  return (
    <div className="relative">
        <span className="ml-auto absolute -right-1 top-1 translate-y-[-50%] block w-fit bg-violet-500 px-1 rounded-full text-white text-[13px]">0</span>
      <HiOutlineShoppingCart className="text-3xl -mt-px" />
    </div>
  );
}
