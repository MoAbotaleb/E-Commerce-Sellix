import { IoIosCart } from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { TextRoll } from "@/components/ui/TextRoll";

import { CiSearch } from "react-icons/ci";
import HeaderBasket from "@/components/eCommerce/HeaderBasket/HeaderBasket";
import HeaderLink from "./HeaderLink";
import "@/styles/HeaderStyle.css"

export default function Header() {
  const logoRef = useRef<HTMLSpanElement | null>(null);
  useGSAP(() => {
    gsap.fromTo(
      logoRef.current,
      {
        scale: 0.5,
        rotate: 10,
        transformOrigin: "center",
      },
      {
        scale: 1,
        rotate: 0,
        duration: 1,
        ease: "elastic",
        repeat: -1,
        yoyo: true,
      },
    );
  }, [logoRef]);

  return (
    <header className="">
      <div>
        <div className="flex items-center justify-between mt-3">
          <Link to="/">
            <div className="logo text-3xl capitalize font-Audiowide  tracking-[5px] flex items-center gap-2 ">
              <span
                ref={logoRef}
                className="flex items-center justify-center w-7 h-7 bg-violet-500  text-white rounded-full"
              >
                <IoIosCart />
              </span>

              <TextRoll
                className="overflow-clip text-3xl text-black dark:text-white"
                variants={{
                  enter: {
                    initial: { y: 0 },
                    animate: { y: 40 },
                  },
                  exit: {
                    initial: { y: -40 },
                    animate: { y: 0 },
                  },
                }}
                duration={0.3}
                getEnterDelay={(i) => i * 0.05}
                getExitDelay={(i) => i * 0.05 + 0.05}
                transition={{
                  ease: [0.175, 0.885, 0.32, 1.1],
                }}
              >
                Sellix
              </TextRoll>
            </div>
          </Link>
          <form className="flex items-center flex-[0.5] ">
            <input
              type="text"
              className="border border-r-0 h-10 flex-1 outline-0 rounded-l-full pl-3"
            />
            <button
              type="submit"
              className="bg-violet-500  h-10 text-white w-13 cursor-pointer rounded-r-full flex items-center justify-center text-2xl"
            >
              <CiSearch />
            </button>
          </form>
          <div>
            <HeaderBasket />
          </div>
        </div>

        <div className="flex justify-between items-center bg-black/80 px-4 py-2 mt-3">
          <ul className="flex items-center gap-3 text-white capitalize">
            <li>
              <HeaderLink url="/" title="home" />
            </li>
            <li>
              <HeaderLink url="/categories" title="categories" />
            </li>
            <li>
              
              <HeaderLink url="/about-us" title="about" />
            </li>
          </ul>
          <ul className="flex items-center gap-3 text-white capitalize">
            <li>
              
              <HeaderLink url="/login" title="login" />
            </li>
            <li>
                            <HeaderLink url="/register" title="register" />

            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
