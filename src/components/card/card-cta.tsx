import React from "react";
import { ChevronRightIcon } from "@/components/icons/ChevronRightIcon";

type Props = {
  children: React.ReactNode;
};

export function CardCta({ children }: Props) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-blue-500"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  );
}
