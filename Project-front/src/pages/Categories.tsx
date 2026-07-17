import Category from "@/components/eCommerce/Category/Category";
import { useAppSelector } from "@/store/Hooks/Hooks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useRef } from "react";

export default function Categories() {
  const records = useAppSelector((state) => state.CategoriesReducer.records);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (records && records.length > 0) {
        gsap.fromTo(
          ".CategoryCard",
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
    },
    {
      dependencies: [records],
      scope: containerRef,
    },
  );
  return (
    <section className="py-4">
      <div
        ref={containerRef}
        className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3"
      >
        {records.length > 0 &&
          records.map((item) => (
            <Category key={item.id} item={item} style="CategoryCard" />
          ))}
      </div>
    </section>
  );
}
