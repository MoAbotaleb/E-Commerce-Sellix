import Product from "@/components/eCommerce/Product/Product";
import { useAppDispatch, useAppSelector } from "@/store/Hooks/Hooks";
import actGetProductsByCatPerfix from "@/store/Products/act/actGetProductsByCatePerfix";
import { CleanUpRecordsByPrefix } from "@/store/Products/ProductsSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductsByPrefix() {
  const { prefix } = useParams();
  const dispatch = useAppDispatch();
  const records = useAppSelector(
    (state) => state.ProductsReducer.RecordsByPrefix,
  );
  useEffect(() => {
    dispatch(actGetProductsByCatPerfix(prefix as string));
    return () => {
      CleanUpRecordsByPrefix();
    };
  }, [prefix, dispatch]);
  useGSAP(() => {
    if (records && records.length > 0) {
      gsap.fromTo(
        ".productCard",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.2,
        },
      );
    }
  }, [records]);
  return (
    <section className="py-4">
      <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {records.length > 0 &&
          records.map((item) => (
            <Product
              key={item.id}
              item={item}
              style="productCard opacity-0 translate-y-[100px] h-full shadow-xl "
            />
          ))}
      </div>
    </section>
  );
}
