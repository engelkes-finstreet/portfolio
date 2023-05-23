import React from "react";

type Props = {
  role: string;
};

export function CardRole({ role }: Props) {
  return <p className={"text-sm text-zinc-400 dark:text-zinc-300"}>{role}</p>;
}
