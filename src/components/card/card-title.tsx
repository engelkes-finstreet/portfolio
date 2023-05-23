import React from "react";
import Card from "@/components/card/index";

type Props = {
  as?: React.ElementType;
  href?: string;
  children: React.ReactNode;
};

export function CardTitle({ as: Component = "h2", href, children }: Props) {
  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
}
