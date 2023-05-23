import clsx from "clsx";
import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function CardDescription({ className, children }: Props) {
  return (
    <p
      className={clsx(
        "text-md relative z-10 mt-2 text-zinc-500 dark:text-zinc-200",
        className
      )}
    >
      {children}
    </p>
  );
}
