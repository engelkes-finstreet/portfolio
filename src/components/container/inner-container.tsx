import React, { forwardRef } from "react";
import clsx from "clsx";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function InnerContainer({ className, children }: Props) {
  return (
    <div className={clsx("relative px-4 sm:px-8 lg:px-12", className)}>
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
}
