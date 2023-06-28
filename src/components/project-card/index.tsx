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
    <div
      className={
        "group rounded-lg p-4 shadow-md dark:border-2 dark:border-zinc-800"
      }
    >
      <div className="px-4 sm:px-0">
        <div className="flex text-lg font-semibold leading-7">
          <h3 className="text-lg text-blue-500 dark:text-blue-400">
            {project.name}
          </h3>
          <p className={"mx-2 text-zinc-600 dark:text-zinc-400"}>-</p>
          <p className="text-zinc-500 dark:text-zinc-400">{project.role}</p>
        </div>
        <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-200">
          {project.description}
        </p>
      </div>
      <div className="mt-6 border-t border-zinc-300 dark:border-white/10">
        <dl className="divide-y divide-zinc-300 dark:divide-white/10">
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
      <dt className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {heading}
      </dt>
      <dd className="mt-1 text-sm leading-6 text-zinc-900 dark:text-white sm:col-span-2 sm:mt-0">
        {children}
      </dd>
    </div>
  );
}
