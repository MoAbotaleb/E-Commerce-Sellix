import GridList from "@/components/common/GridList/GridList";
import Product from "@/components/eCommerce/Product/Product";
import Loading from "@/components/Feadback/Loading";
import { useAppDispatch, useAppSelector } from "@/store/Hooks/Hooks";
import actGetProductsByCatPerfix from "@/store/Products/act/actGetProductsByCatePerfix";
import { CleanUpRecordsByPrefix } from "@/store/Products/ProductsSlice";
import type { IProduct } from "@/types/ProductTypes";

import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductsByPrefix() {
  const { prefix } = useParams();
  const dispatch = useAppDispatch();
  const { RecordsByPrefix, loading, error } = useAppSelector(
    (state) => state.ProductsReducer,
  );
  useEffect(() => {
    dispatch(actGetProductsByCatPerfix(prefix as string));
    return () => {
      CleanUpRecordsByPrefix();
    };
  }, [prefix, dispatch]);
 
  return (
    <Loading loading={loading} error={error as string}>
      <section className="py-4">
        <GridList style=" xs:grid-cols-2! sm:grid-cols-3! md:grid-cols-4! lg:grid-cols-5! "
          records={RecordsByPrefix}
          renderItem={(record: IProduct) => {
            return <Product key={record.id} item={record} style="intialAnimate opacity-0 translate-y-[100px] h-full" />;
          }}
        />
      </section>
    </Loading>
  );
}
