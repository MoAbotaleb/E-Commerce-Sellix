import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Spinner } from "@/components/ui/spinner";

import type React from "react";
import { TextShimmerWave } from "../ui/TextShimmerWave";
interface LoadSpinnerProps {
  title: string;
  style?: string;
  children?: React.ReactNode;
}
export function LoadSpinner({ title, style, children }: LoadSpinnerProps) {
  return (
    <div
      className={`flex w-full  flex-col gap-4 [--radius:1rem] size-5  animate-bounce mb-7 ${style}`}
    >
      <Item variant="muted" className="bg-gray-300">
        <ItemMedia>
          <Spinner>{children}</Spinner>
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="line-clamp-1">
            <TextShimmerWave
              className="font-mono text-sm [--base-color:#000] [--base-gradient-color:#202020]"
              duration={1}
            >
              {title}
            </TextShimmerWave>
          </ItemTitle>
        </ItemContent>
      </Item>
    </div>
  );
}
