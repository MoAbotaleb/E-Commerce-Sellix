import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import type React from "react";
import { useRef } from "react";

// interface GridListProps<T extends {id:number}> {
//   records: T[];
//   renderItem: (record: T) => React.ReactNode;
//   style?:string,
// }
interface GridListProps<T> {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
  style?: string;
}

// export default function GridList<T extends {id:number}>({ records, renderItem,style }: GridListProps<T>) {
export default function GridList<T>({
  records,
  renderItem,
  style,
}: GridListProps<T>) {
  // const ListRender = records.map((item) => <div key={item.id}>{renderItem(item)}</div> );
  const ListRender = records.map((item) => renderItem(item));
  const containerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (ListRender && ListRender.length > 0) {
        gsap.fromTo(
          ".intialAnimate",
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
      dependencies: [ListRender],
      scope: containerRef,
    },
  );
  return (
    <div
      ref={containerRef}
      className={`grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 ${style}`}
    >
      {ListRender}
    </div>
  );
}
