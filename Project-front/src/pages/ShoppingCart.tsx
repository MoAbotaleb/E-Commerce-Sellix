import Heading from "@/components/common/Heading/Heading";
import CartIemList from "@/components/eCommerce/CartIemList/CartIemList";
import CartItem from "@/components/eCommerce/CartItem/CartItem";
import CartTotal from "@/components/eCommerce/CartTotal/CartTotal";
import Loading from "@/components/Feadback/Loading";
import { actGetProductFullInfo } from "@/store/Cart/act/actGetProductsFullInfo";
import { useAppDispatch, useAppSelector } from "@/store/Hooks/Hooks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useEffect, useRef } from "react";

export default function ShoppingCart() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actGetProductFullInfo());

    // console.log("fill product full info");
  }, [dispatch]);
  const { ProductsFullInfo, loading, error } = useAppSelector(
    (state) => state.CartReducer,
  );



  return (
    <section  className="py-4">
      <Heading title={`shopping cart`} />
      <Loading error={error as string} loading={loading} >
       <CartIemList ProductsFullInfo={ProductsFullInfo}/>
      </Loading>

      <CartTotal items={ProductsFullInfo} />
    </section>
  );
}
