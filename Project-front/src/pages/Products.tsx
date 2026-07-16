import Product from "@/components/eCommerce/Product/Product";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

export default function Products() {
  useGSAP(() => {
    gsap.fromTo(
      ".abo",
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
  }, []);
  return (
    <section className="py-4">
      <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        <Product style="opacity-0 translate-y-[100px] abo" />
        <Product style="opacity-0 translate-y-[100px] abo" />
        <Product style="opacity-0 translate-y-[100px] abo" />
        <Product style="opacity-0 translate-y-[100px] abo" />
        <Product style="opacity-0 translate-y-[100px] abo" />
        <Product style="opacity-0 translate-y-[100px] abo" />
        <Product style="opacity-0 translate-y-[100px] abo" />
        <Product style="opacity-0 translate-y-[100px] abo" />
        <Product style="opacity-0 translate-y-[100px] abo" />
        <Product style="opacity-0 translate-y-[100px] abo" />
      </div>
    </section>
  );
}
