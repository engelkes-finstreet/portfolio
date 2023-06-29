import React from "react";
import Card from "@/components/card/index";
import clsx from "clsx";

type Props = {
  as?: React.ElementType;
  href?: string;
  children: React.ReactNode;
  className?: string;
};

export function CardTitle({
  as: Component = "h2",
  href,
  children,
  className,
}: Props) {
  return (
    <Component
      className={clsx(
        "text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100",
        className
      )}
    >
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
}

export function CardPrimaryTitle({
  as: Component = "h2",
  href,
  children,
  className,
}: Props) {
  return (
    <Component
      className={clsx(
        "text-base font-semibold tracking-tight text-blue-500 dark:text-blue-600",
        className
      )}
    >
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
}
