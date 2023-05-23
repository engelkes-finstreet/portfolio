import clsx from "clsx";
import React from "react";
import { CardLink } from "@/components/card/card-link";
import { CardAchievements } from "@/components/card/card-achievements";
import { CardCta } from "@/components/card/card-cta";
import { CardDescription } from "@/components/card/card-description";
import { CardEyebrow } from "@/components/card/card-eyebrow";
import { CardRole } from "./card-role";
import { CardTitle } from "@/components/card/card-title";

type IndexProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

function Card({ as: Component = "div", className, children }: IndexProps) {
  return (
    <Component
      className={clsx(className, "group relative flex flex-col items-start")}
    >
      {children}
    </Component>
  );
}

Card.Achievements = CardAchievements;
Card.Cta = CardCta;
Card.Description = CardDescription;
Card.Eyebrow = CardEyebrow;
Card.Link = CardLink;
Card.Role = CardRole;
Card.Title = CardTitle;

export default Card;
