import React from "react";

export type Project = {
  name: string;
  description: string;
  link: {
    href: string;
    label: string;
  };
  role: string;
  tasksAndAchievements: string[];
  technologies: string[];
};

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <div className={"flex flex-col gap-6"}>
      <div className="flex text-xl font-semibold leading-7 md:text-3xl">
        <h3 className="text-blue-500 dark:text-blue-400">{project.name}</h3>
        <p className={"mx-2 font-normal text-zinc-800 dark:text-zinc-100"}>-</p>
        <p className="text-zinc-800 dark:text-zinc-100">{project.role}</p>
      </div>
      <div
        className={
          "group rounded-lg border-2 border-zinc-100  px-4 py-2 dark:border-zinc-800"
        }
      >
        <dl className="divide-y divide-zinc-300 dark:divide-white/10">
          <ProjectDescriptionTerm heading={"Project Description"}>
            <p>{project.description}</p>
          </ProjectDescriptionTerm>
          <ProjectDescriptionTerm heading={"Tasks and Achievements"}>
            <div className={"flex flex-col gap-3"}>
              {project.tasksAndAchievements.map((task) => (
                <p key={task}>{task}</p>
              ))}
            </div>
          </ProjectDescriptionTerm>
          <ProjectDescriptionTerm heading={"Technologies"}>
            <ul role={"list"} className={"list-inside list-none"}>
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </ProjectDescriptionTerm>
        </dl>
      </div>
    </div>
  );
}

type ProjectListingProps = {
  heading: string;
  children: React.ReactNode;
};

function ProjectDescriptionTerm({ heading, children }: ProjectListingProps) {
  return (
    <div className="flex flex-col gap-2 py-4">
      <dt className="text-sm leading-6 text-zinc-800 dark:text-zinc-100">
        {heading}
      </dt>
      <dd className="text-md mt-1 leading-6 text-zinc-600 dark:text-zinc-400 sm:col-span-2 sm:mt-0">
        {children}
      </dd>
    </div>
  );
}
