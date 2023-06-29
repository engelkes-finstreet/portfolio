import Head from "next/head";
import { SimpleLayout } from "@/components/SimpleLayout";
import React from "react";
import { Project, ProjectCard } from "@/components/project-card";
import Card from "@/components/card";

const projects: Array<Project> = [
  {
    name: "eco.banking",
    description:
      "eco.banking is a SaaS product poised to revolutionize the banking sector. Designed to empower banks to deliver fully digital inquiry processes to their customers, this white-label solution offers flexibility and customization to match each bank's unique needs. But it doesn't stop at the banks – we've integrated a dedicated portal for both customers and bank employees. This ensures streamlined management of inquiries, ushering in a new era of digital banking processes. With eco.banking, we're breaking down the walls of traditional banking and making room for seamless, digital interactions!",
    link: { href: "https://ecobanking.de", label: "eco.banking.de" },
    role: "Frontend-Lead",
    tasks: [
      "Welcoming and mentoring developers",
      "Conducting detailed code reviews, ensuring our code is always of the highest standard, and creating learning opportunities for junior developers",
      "Divide tasks to team members, considering their strength and capabilities to ensure each project is running smooth",
      "Refactoring of older codesnippets with modern architechtural principles, increasing our developer experience and improving development speed",
      "Coordinating new releases and deployments",
      "Bridging the gap between development and stakeholders to keep both parties in the loop",
    ],
    achievements: [
      "Implemented a dynamic, fully typesafe form builder which allows us to create form for each banks need with ease",
      "Successfully introduced ChakraUI in favor of styled-components to improve the applications design and accesiibility",
      "Delivered multiple inquiry processes for different banks",
      "Set up robust infrastructure to deploy one application for each bank to a private cloud with CircleCI, TeamCity and docker-compose",
    ],
    technologies: [
      "Create React App with TypeScript / JavaScript",
      "React Final Form",
      "Redux - hopefully not for long",
      "react-query",
      "Axios",
    ],
  },
  {
    name: "SaveStrike",
    description:
      "SaveStrike is an innovative app designed to inspire young people to save effectively for their goals. With a user-friendly interface, users can effortlessly create multiple savings goals within the app. Each goal is then allocated a monthly saving target. The genius part? The app keeps track of their progress and nudges them with a celebration notification when they've saved enough to purchase their desired item. It's more than just an app - it's a fun, interactive financial companion nudging young people towards smarter saving habits",
    link: { href: "https://savestrike.de", label: "savestrike.de" },
    role: "Consultant, Developer and DevOps Engineer",
    tasks: [
      "Making key decisions on the choice of technologies and architecture",
      "Administering Jira, Confluence and Slack to ensure good team collaboration",
      "Wearing the DevOps hat for our Flutter app, Next.js frontend and Rails backend",
      "Providing guidance to the development team, fostering a supportive and engaging environment where everyone can thrive",
      "Conduction thorough code reviews for the frontend stack, ensuring the quality of our code is always top-notch",
    ],
    achievements: [
      "Initial choice of technologies turned out to be great - which led to a fast and smooth development process",
      "fully automated release to TestFlight and AppStore with Fastlane and GItHub Actions",
      "CI /CI with GitHub Actions and docker-compose for the backend test and production environment",
    ],
    technologies: [
      "Turborepo - Next.js + TypeScript + Blitz.js + Tailwind",
      "Flutter - Dart",
      "Ruby on Rails",
    ],
  },
  {
    name: "Senger Mobility Hub",
    description:
      "Senger Mobility Hub involved crafting a robust and dynamic online presence for a prominent car dealership. To mirror the expansive physical presence of the dealership, we developed an advanced search for all Senger locations, effectively digitalizing their brick-and-mortar stores. We didn't stop there; we also integrated a comprehensive job portal to attract top talent and ensure growth. Keeping users engaged, we added a news section for the latest updates, offers, and industry insights. The crowning glory, however, was the implementation of a next-level car search feature. This advanced tool allows customers to find their dream car with unparalleled ease and precision, truly elevating the digital car shopping experience. This project was all about marrying functionality with user experience, creating a digital platform as expansive and inviting as their physical locations.",
    link: { href: "https://senger-mobility.de", label: "senger-mobility.de" },
    role: "Innovation Architect and IT Consultant",
    tasks: [
      "Acting as a link between the customer and development team",
      "Being a go-to contact for the development team, helping to clear blockers and pave the way for uninterrupted work",
      "Making technology decisions, from the initial architecture to choosing new technologies for maps, search and various automobile APIs",
      "Administering Jira, Confluence and Slack to create a seamless and organized digital workspace for the team",
      "Managing and enhancing our search capabilities using Algolia, continually improvig search results",
      "Crafingt MapBox designs in line with Customer CI",
    ],
    achievements: [
      "Achieved a happy customer as they are delighted to use the Django / Wagtail CMS to create content in a whim",
      "Successfully implemented Algolia, enhancing our platform with a higly flexible and efficient search engine for cars",
      "Delivered all work packages on time and within budget",
    ],
    technologies: [
      "Python - Django / Wagtail + some React components",
      "Algolia as Search Engine",
      "Mapbox as Map Provider",
    ],
  },
  {
    name: "evalue.in",
    description:
      "evalue.in is a powerful tool that takes the guesswork out of evaluating your accounting data. It offers a wealth of KPIs, presenting insightful snapshots of your business and guiding future decision-making. What's more, all this rich data is beautifully laid out in a clear, visually pleasing dashboard.",
    link: { href: "https://evaluein.de", label: "evaluein.de" },
    role: "Frontend Developer + DevOps engineer",
    tasks: [
      "Developing core functionality in the Frontend application",
      "Guidance for younger Frontend developers",
      "Helping the business side to translate features to the technical side",
    ],
    achievements: [
      "Set up the project from the group up - from the initial decision on the Frontend and Backend stack to the first release",
      "Customized Highcharts for an legang and user-friendly dashboard",
      "Implmented CI / CD pipeline with Jenkins for fully automated deployments of the Frontend and Backend application",
    ],
    technologies: [
      "Create React App with TypeScript",
      "Axios",
      "Redux",
      "Material UI",
      "Highcharts",
    ],
  },
];

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
        intro={[
          "Throughout my career, I've been fortunate to partake in a range of thrilling and varied projects. From leading a dynamic frontend team at eco.banking to guiding strategic technology decisions for an automobile company, and even building a Flutter app from scratch, each role presented unique challenges and opportunities for growth.",
          "My diverse experiences have gifted me a panoramic view of the tech landscape, enabling me to understand the distinct needs of various stakeholders. I excel at transforming those needs into technical requirements or crafting hands-on solutions.",
          "Every project is a new adventure, and I'm driven by a passion for harnessing the potential of cutting-edge technologies. Yet, I also appreciate the reliability of battle-tested technologies, especially when it aligns with a client's preferences. The goal is always to strike a balance between innovation and dependability, to deliver the best solutions.",
          "Highlighted below are the projects that I take immense pride in, as they best exhibit my abilities and growth trajectory. Additionally, I've included a timeline to give a comprehensive view of my professional journey. Please note that due to the professional environment these projects were developed in, I'm unable to share GitHub links, but I'm excited to share these pieces of my career story with you.",
        ]}
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex flex-col space-y-16">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  );
}
