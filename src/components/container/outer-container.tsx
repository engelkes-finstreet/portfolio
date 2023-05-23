import React, { forwardRef } from "react";
import clsx from "clsx";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function OuterContainer({ className, children }: Props) {
  return (
    <div className={clsx("sm:px-8", className)}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
}
