import Head from "next/head";
import { SimpleLayout } from "@/components/SimpleLayout";
import React from "react";
import Card from "@/components/card";

type Projects = {
  name: string;
  description: string;
  link: {
    href: string;
    label: string;
  };
  role: string;
  achievements: string[];
};

const projects: Array<Projects> = [
  {
    name: "eco.banking",
    description:
      "eco.banking digitizes the initiation and processing of commercial loan processes.",
    link: { href: "https://ecobanking.de", label: "eco.banking.de" },
    role: "Frontend-Lead",
    achievements: [
      "Created flexible Architecture for all processes",
      "Made the change from Styled-Components to ChakraUI",
      "Introduced react-query",
    ],
  },
  {
    name: "Senger Mobility Hub",
    description: "Online presence for a car dealership",
    link: { href: "https://senger-mobility.de", label: "senger-mobility.de" },
    role: "Architect",
    achievements: [
      "Made the initial decision to go with Wagtail",
      "Implemented Algolia as flexible search engine",
      "Switched to MapBox for great cards inside the application",
    ],
  },
  {
    name: "tr8fin",
    description:
      "tr8fin is a digital platform that enables German companies to export their goods and services to world markets.",
    link: { href: "https://tr8fin.de", label: "tr8fin.de" },
    role: "Software Architect",
    achievements: [
      "Set up the general Architecture - React.js + Ruby on Rails",
      "Setup the deployment process with Docker / docker-compose",
      "Streamlined the testing process",
    ],
  },
  {
    name: "Finannzierungsportal",
    description:
      "Financing portal for medium-sized companies in three steps - digital, fast and tailor made",
    link: {
      href: "http://finanzierungsporta.ermoeglicher.de",
      label: "finanzierungsportal.ermoeglicher.de",
    },
    role: "Software Architect",
    achievements: [
      "Usage of Lerna as a Monorepo in the Frontend",
      "Zero downtime deployments with docker-compose",
      "First time working on a project as technical Product Owner",
    ],
  },
];

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Patrick Engelkes</title>
        <meta
          name="description"
          content="Projects I have been involved in my professional live"
        />
      </Head>
      <SimpleLayout
        title="Projects I have been involved in my professional live"
        intro="In my professional live I was part of a lot of exciting and challenging projects but these are the ones that I am most proud of. These are all business applications so unfortunately I cannot share the code with you."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <h2 className="mt-6 text-base font-semibold text-blue-600 dark:text-blue-200">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Role role={project.role} />
              <Card.Description className="h-20">
                {project.description}
              </Card.Description>
              <ul
                role="list"
                className="mt-4 list-inside list-disc text-sm text-zinc-600 dark:text-zinc-400"
              >
                {project.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-blue-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  );
}
