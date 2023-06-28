import { OuterContainer } from "./outer-container";
import { InnerContainer } from "./inner-container";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: any;
};

function Container({ children, className }: Props) {
  return (
    <OuterContainer className={className}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
}

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;

export default Container;
