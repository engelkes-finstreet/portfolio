import { forwardRef } from "react";
import clsx from "clsx";
import { OuterContainer } from "./outer-container";
import { InnerContainer } from "./inner-container";

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
