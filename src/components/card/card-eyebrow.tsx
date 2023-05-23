import React from "react";
import clsx from "clsx";

type Props = {
  as?: React.ElementType;
  decorate?: boolean;
  className?: string;
  children: React.ReactNode;
} & { [p: string]: any };

export function CardEyebrow({
  as: Component = "p",
  decorate = false,
  className,
  children,
  ...props
}: Props) {
  return (
    <Component
      className={clsx(
        className,
        "relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500",
        decorate && "pl-3.5"
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  );
}
