import { Section } from "@/components/Section";
import React from "react";

type Props = {
  title: string;
  children?: React.ReactNode;
};

export function ToolsSection({ children, ...props }: Props) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}
