import Container from "@/components/container";
import React from "react";

type Props = {
  title: string;
  intro: string[] | string;
  children?: React.ReactNode;
};

export function SimpleLayout({ title, intro, children }: Props) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        {Array.isArray(intro) ? (
          intro.map((intro) => (
            <p
              key={intro}
              className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
            >
              {intro}
            </p>
          ))
        ) : (
          <p className={"mt-6 text-base text-zinc-600 dark:text-zinc-400"}>
            {intro}
          </p>
        )}
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  );
}
