import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import Image from "next/image";
import avatarImage from "@/images/avatar.png";
import React from "react";

type AvatarContainerProps = {
  className?: string;
  HTMLAttributes?: React.HTMLAttributes<HTMLDivElement>;
  children?: React.ReactNode;
  style?: any;
};

export function AvatarContainer({ className, ...props }: AvatarContainerProps) {
  return (
    <div
      className={clsx(
        className,
        "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
      )}
      {...props}
    />
  );
}

type AvatarProps = {
  large?: boolean;
  className?: string;
  style?: any;
} & Omit<LinkProps, "href">;

export function Avatar({ large = false, className, ...props }: AvatarProps) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, "pointer-events-auto")}
      {...props}
    >
      <Image
        src={avatarImage}
        alt=""
        sizes={large ? "4rem" : "2.25rem"}
        className={clsx(
          "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
          large ? "h-16 w-16" : "h-9 w-9"
        )}
        priority
        placeholder={"blur"}
      />
    </Link>
  );
}
