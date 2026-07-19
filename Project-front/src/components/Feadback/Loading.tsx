import type { TLoading } from "@/types/shared";
import type React from "react";
import { LoadSpinner } from "../common/LoadSpinner";
import { ImSpinner10 } from "react-icons/im";
import { MdOutlineDangerous } from "react-icons/md";

interface LoadingProps {
  loading: TLoading;
  error: string;
  children?: React.ReactNode;
}

export default function Loading({ loading, error, children }: LoadingProps) {
  if (loading === "pending") {
    return (
      <LoadSpinner title="loading please wait.." style=" mt-5 ">
        <ImSpinner10 />
      </LoadSpinner>
    );
  }
  if (loading === "failed") {
    return (
      <LoadSpinner title={error} style=" mt-5 ">
        <MdOutlineDangerous />
      </LoadSpinner>
    );
  }
  

  return <>{children}</>;
}
