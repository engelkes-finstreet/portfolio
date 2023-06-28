import Head from "next/head";
import { SimpleLayout } from "@/components/SimpleLayout";
import React from "react";
import { Project, ProjectCard } from "@/components/project-card";

const projects: Array<Project> = [
  {
    name: "eco.banking",
    description:
      "eco.banking is a SaaS product poised to revolutionize the banking sector. Designed to empower banks to deliver fully digital inquiry processes to their customers, this white-label solution offers flexibility and customization to match each bank's unique needs. But it doesn't stop at the banks – we've integrated a dedicated portal for both customers and bank employees. This ensures streamlined management of inquiries, ushering in a new era of digital banking processes. With eco.banking, we're breaking down the walls of traditional banking and making room for seamless, digital interactions!",
    link: { href: "https://ecobanking.de", label: "eco.banking.de" },
    role: "Frontend-Lead",
    tasksAndAchievements: [
      "Navigating through the sea of diverse data that our inquiry processes generate at eco.banking, I had the pleasure of crafting a dynamic, fully typesafe form builder. This ingenious tool allows us to effortlessly create customized forms for each bank and inquiry process, a truly revolutionary stride in our operational efficiency. Around this time, I also introduced a significant transformation in our design language by replacing styled-components, which had been in use since our inception in 2018, with ChakraUI in 2021. This refreshed design library has been embraced enthusiastically by our team and continues to be utilized to its full capacity.",
      "Day-to-day, my role is as vibrant as it is rewarding. Welcoming new developers into our fold and guiding them through our extensive codebase is a delightful experience. Seeing them learn and grow with each detailed code review I conduct, where we collectively strive for excellence, makes every day meaningful. I enjoy the responsibility of delegating tasks to team members, matching their unique strengths and capabilities with the tasks at hand, nurturing not just project success, but also individual growth. I also get to breathe new life into our code, refurbishing older snippets with modern architectural principles, ensuring our tech stack stays as fresh as a daisy. In the midst of all this, I also play the pivotal role of coordinating new releases and deployments, seamlessly transitioning our projects with minimal hiccups. It's quite a journey, and I relish every bit of it!",
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
    tasksAndAchievements: [
      "When I embarked on this journey, I carefully selected technologies that turned out to be a perfect match for our needs, facilitating a fast and smooth development process. I championed automation by implementing a fully automated release to TestFlight and AppStore, using Fastlane and GithubActions. Additionally, I set up a CI/CD pipeline with GitHubActions and docker-compose for the backend, improving our development and production environment.",
      "My role included making key decisions regarding technologies and architecture, administering Jira, Confluence, and Slack to foster smooth team collaboration, and wearing the DevOps hat for our Flutter app, Next.js frontend, and Rails backend. I took joy in providing guidance to the development team, creating a supportive and engaging environment, and ensuring our code quality remained top-notch through thorough frontend code reviews.",
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
    tasksAndAchievements: [
      "Steering our technology direction towards Django/Wagtail, I led the initial decision that resulted in robust and user-friendly web development. My successful implementation of Algolia introduced a highly flexible and efficient search engine that significantly enriched our user experience. Notably, my decision to switch to MapBox was a game-changer, bringing high-quality, intuitive maps to our application and enhancing the user interface. I delivered all work packages on time and within budget, a testament to my project management skills and commitment to efficiency.",
      "I became a vital link between the customer and the development team, a go-to contact for clearing blockers, and a guide making critical technology decisions. My responsibilities also included administering Jira, Confluence, and Slack, managing Algolia to continually improve our search capabilities, and crafting MapBox designs that align with customer CI/CD.",
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
    tasksAndAchievements: [
      "The journey of setting up evalue.in was an exhilarating adventure from scratch. I was instrumental in making crucial tech stack decisions leading to our maiden release. To add a touch of elegance to our user interface, I customized Highcharts for our dashboard. I also spun a Jenkins-based CI/CD pipeline, ensuring automated, seamless deployments of both the frontend and backend.",
      "Diving into the world of frontend feature development, I brought essential app functionalities to life, and extended my guiding hand to junior frontend colleagues, aiding their growth. Playing the role of a translator, I adeptly bridged the gap between business goals and technical implementations, ensuring every line of code we crafted was an opportunity for learning and maintaining code excellence.",
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
        <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </ul>
      </SimpleLayout>
    </>
  );
}
