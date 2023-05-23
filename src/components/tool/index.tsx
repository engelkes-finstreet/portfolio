import Card from "../card";
import React from "react";

type Props = {
  title: string;
  href?: string;
  children?: React.ReactNode;
};

export function Tool({ title, href, children }: Props) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}
