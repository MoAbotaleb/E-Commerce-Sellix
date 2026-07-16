"use client";

import { useEffect, useState } from "react";
import {
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "react-router-dom";
export default function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  const [errorStatus, setErrorStatus] = useState<number>(404);
  const [errorStatusText, setErrorStatusText] =
    useState<string>("Page not found");
  useEffect(() => {
    if (isRouteErrorResponse(error)) {
      setErrorStatus(error.status);
      setErrorStatusText(error.statusText);
    } 
  }, [error]);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 text-center font-sans">
      <div className="max-w-md">
        <h1 className="text-9xl font-extrabold text-black/70 tracking-widest animate-pulse">
          {errorStatus}
        </h1>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl capitalize">
          {errorStatusText}
        </h2>

        <p className="mt-4 text-base text-gray-600">
          Sorry, we couldn't find the page you're looking for. It might have
          been moved or deleted.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition active:scale-95 cursor-pointer"
          >
            Go Back
          </button>

          <button
            onClick={() => navigate("/", { replace: true })}
            className="rounded-md bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 transition active:scale-95 cursor-pointer"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
