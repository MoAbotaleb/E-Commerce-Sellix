import GridList from "@/components/common/GridList/GridList";
import Category from "@/components/eCommerce/Category/Category";
import Loading from "@/components/Feadback/Loading";
import { useAppSelector } from "@/store/Hooks/Hooks";
import type { ICategory } from "@/types/CategoryTypes";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useRef } from "react";

export default function Categories() {
  const { records, loading, error } = useAppSelector(
    (state) => state.CategoriesReducer,
  );


  return (
    <Loading loading={loading} error={error as string}>
      <section className="py-4">
        <GridList
          records={records}
          renderItem={(record: ICategory) => {
            return (
              <Category key={record.id} item={record}  />
            );
          }}
        />
      </section>
    </Loading>
  );
}
