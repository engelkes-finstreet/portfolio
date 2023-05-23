import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Patrick Engelkes</title>
        <meta
          name="description"
          content="I'm Patrick Engelkes - living in Munster and digitizing the banking world"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I'm Patrick Engelkes - living in Munster and digitizing the banking world
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Welcome! I'm thrilled to introduce myself to you, and hopefully provide some insight into the world of programming and artificial intelligence, specifically through the lens of ChatGPT.
              </p>

              <p>
                Based in the picturesque city of Munster, Germany, at 32 years of age, you'll find a tech enthusiast who balances a passion for sports with a career in the technological world. Freeletics and soccer fill up the free time when code isn't occupying the mind. A past active role in Rotaract has shaped a community-oriented perspective that resonates in every endeavor. Adventure pulses through the veins, with a constant yearning to discover new places and immerse in diverse cultures. Climbing ranks high among favorite activities, embodying the same determination, resilience, and problem-solving skills that are integral to coding.
              </p>

              <p>
                My journey into the world of programming started at the young age of 13, when I began automating Windows and Excel tasks. My curiosity drove me to an apprenticeship at DEOS where I not only honed my skills in Java, but also wrote an application to monitor the energy consumption of large buildings – marrying my interest in technology with sustainability.
              </p>

              <p>
                Over the years, my fascination with programming led me to finstreet in 2018. Here, I began as an IT consultant, and later specialized in Frontend React Development with TypeScript. Recently, I've turned my attention to LLMs (Large Language Models) and their intriguing, diverse use cases.

                My journey through the tech landscape hasn't been a solitary one. I have a passion for teaching, which I've expressed since my school days, where I tutored my peers and taught children 10-finger typing. At finstreet, I've created extensive learning material for React, and had the privilege of guiding several colleagues on their path to mastering the technology.
              </p>

              <p>
                Now, I'm keen to extend this passion to a wider audience through this blog. My goal is to help people understand the tremendous benefits of ChatGPT and how it can be harnessed to improve everyday life. Technology is a tool, and like all tools, it's most effective when understood and used correctly. I'm here to help make that a reality for as many people as possible.

                So, whether you're a tech enthusiast or simply curious, I invite you to join me on this exciting journey. Let's explore, learn, and grow together. Welcome aboard!
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:patrick.engelkes@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                patrick.engelkes@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
