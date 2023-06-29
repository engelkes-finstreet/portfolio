import React from "react";
import Card from "@/components/card";

export type Project = {
  name: string;
  description: string;
  link: {
    href: string;
    label: string;
  };
  role: string;
  tasks: string[];
  achievements: string[];
  technologies: string[];
};

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <div className="gap-x-8 md:grid md:grid-cols-4 md:items-baseline">
      <Card className={"w-full md:col-span-3 md:w-3/4"}>
        <div className={"block md:hidden"}>
          <Card.PrimaryTitle>{project.name}</Card.PrimaryTitle>
          <Card.Description className={"mb-4"}>{project.role}</Card.Description>
        </div>
        <div
          className={
            "flex flex-col gap-y-6 divide-y divide-zinc-100 dark:divide-zinc-100/10"
          }
        >
          <div>
            <Card.Title>Project Description</Card.Title>
            <Card.Description>{project.description}</Card.Description>
          </div>
          <ProjectList heading={"Tasks"} items={project.tasks} />
          <ProjectList heading={"Achievements"} items={project.achievements} />
          <ProjectList heading={"TechStack"} items={project.technologies} />
        </div>
      </Card>
      <Card.Eyebrow className={"hidden md:block"}>
        <div className={"flex flex-col"}>
          <p className={"text-blue-600 dark:text-blue-500"}>{project.name}</p>
          <p className={"text-zinc-500 dark:text-zinc-200"}>{project.role}</p>
        </div>
      </Card.Eyebrow>
    </div>
  );
}

type ProjectListProps = {
  heading: string;
  items: string[];
};

function ProjectList({ heading, items }: ProjectListProps) {
  return (
    <div>
      <Card.Title className={"mt-4"}>{heading}</Card.Title>
      <Card.Description>
        <ul
          role={"list"}
          className={"list-inside list-disc space-y-3 md:list-outside"}
        >
          {items.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </Card.Description>
    </div>
  );
}
