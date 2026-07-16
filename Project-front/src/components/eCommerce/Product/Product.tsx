"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
interface ProductProps {
  style?: string;
}
export default function Product({ style }: ProductProps) {
  return (
    <CardContainer className={`inter-var ${style}`}>
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]   h-auto rounded-xl p-4 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white capitalize"
        >
          title
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-3">
          <img
            src="https://www.brandingdesignpro.com/wp-content/uploads/2024/05/Facial-Care-Product-Packaging-Design-Example.jpg"
            height="1000"
            width="1000"
            className="h-30 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
           as={"p"}
            className="px-4 py-2 rounded-xl  font-normal dark:text-white"
          >
            150$
          </CardItem>

          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-violet-600 dark:bg-white dark:text-black text-white text-xs font-bold capitalize cursor-pointer"
          >
            Add to cart
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
