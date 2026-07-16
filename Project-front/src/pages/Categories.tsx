import Category from "@/components/eCommerce/Category/Category";
import Product from "@/components/eCommerce/Product/Product";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

export default function Categories() {
  useGSAP(() => {
    gsap.fromTo(".abo", {
      opacity: 0,
      y: 100,
    },{
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: 0.2,
    });
  }, []);
  return (
    <section className="py-4">
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
        <Category style="abo" />
        <Category style="abo" />
        <Category style="abo" />
        <Category style="abo" />
        <Category style="abo" />
        <Category style="abo" />
        <Category style="abo" />
        <Category style="abo" />
        <Category style="abo" />
        <Category style="abo" />
      </div>
    </section>
  );
}
