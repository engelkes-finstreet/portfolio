import Link from "next/link";
import Container from "./container";
import React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="transition hover:text-blue-500 dark:hover:text-blue-400"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/uses">Uses</NavLink>
              </div>
              <div
                className={
                  "flex flex-col text-sm text-zinc-400 dark:text-zinc-500"
                }
              >
                <p>
                  &copy; {new Date().getFullYear()} Patrick Engelkes. All rights
                  reserved.
                </p>
                <div className={"flex gap-4"}>
                  <NavLink href={"/imprint"}>Imprint</NavLink>
                  <NavLink href={"/privacy-policy"}>Privacy Policy</NavLink>
                </div>
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
}
