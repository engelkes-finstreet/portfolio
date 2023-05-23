import React from "react";

type Props = {
  achievements: string[];
};

export function CardAchievements({ achievements }: Props) {
  return (
    <div className="flex">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
        Responsibilities
      </h2>
      <ul
        role="list"
        className="list-inside list-disc text-zinc-400 dark:text-zinc-100"
      >
        {achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
}
