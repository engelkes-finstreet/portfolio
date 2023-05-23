import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Patrick Engelkes</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-24">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M1 Max, 32GB RAM (2021)">
              Before my current device, I used an Intel-based 16” MacBook Pro. However, transitioning to my new machine has been a remarkable upgrade. It's truly like night and day! The most impressive aspect? Despite subjecting it to demanding tasks, I've never heard the fans spin up, not even once. It handles heavy loads with such grace and quiet efficiency - a testament to its robustness and superior design. A true digital powerhouse that never breaks a sweat!
            </Tool>
            <Tool title="Apple Pro Display XDR (Standard Glass)">
              The only display on the market if you want something HiDPI and
              bigger than 27”. When you’re working at planetary scale, every
              pixel you can get counts.
            </Tool>
            <Tool title="MX Keys Master Serie">
              In my digital toolkit, you'll find a fantastic external keyboard for my MacBook. This keyboard isn't just good, it's one of the best. Thanks to its impressive battery life, I can type away to my heart's content without constantly looking for the charger. Every keystroke feels delightful, making it a pleasure to use.
            </Tool>
            <Tool title="MX MASTER 3S">
              The same praise goes for my trusty mouse, a sibling to the keyboard with its equally long battery life. The mouse's design is ergonomic, fitting perfectly in my hand and providing a comfortable grip. When it comes to precision, this mouse doesn't disappoint, delivering accurate movements whether I'm designing or browsing.
            </Tool>
            <Tool title="DXRacer Gaming Stuhl, F-Serie">
              Meet my trusty throne - a chair that has truly redefined comfort for me. Whether I'm in for a short stint or settling down for a marathon coding session, it's got my back (literally!). It's designed to offer all-day comfort and ensure my back feels just as relaxed after long hours as when I first sat down. Pure bliss, no matter how long I'm in the coding zone!
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="WebStorm">
              WebStorm is my magic wand when it comes to web development. Its comprehensive features make it an absolute delight to use. From auto-completion to real-time error detection, it's got all the bells and whistles a coder could wish for. Plus, the interface is incredibly user-friendly, ensuring I can focus on writing the best code possible.
            </Tool>
            <Tool title="Hyper">
              Hyper Terminal is my command line companion, a sleek, customizable terminal that never lets me down. Its speedy performance and extensible features make every task a breeze, whether I'm compiling code or navigating directories. It's the perfect blend of simplicity and power, bringing a dash of style to my workflow.
            </Tool>
            <Tool title="Fig">
              Fig is a real game-changer for terminal usage. It supercharges my command line with auto-completions, reducing guesswork and enhancing productivity. The suggestions are intuitive and spot-on, turning my terminal into a powerhouse of efficiency. It's like having a co-pilot for my coding journey, guiding me through each command.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              Figma is my canvas for creativity in the realm of digital design. This powerful tool lets me breathe life into my ideas, whether I'm working on UI/UX designs, wireframes, or prototyping. Its collaborative features make teamwork a breeze, allowing real-time feedback and adjustments. Even when I'm flying solo, Figma's intuitive interface and extensive toolset ensure my designs are always a step ahead. It's the perfect companion for transforming my visual concepts into stunning realities.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Raycast">
              Raycast is my trusty assistant in productivity. It's like having a digital personal assistant on my desktop. With its shortcuts and scripts, it makes navigating through my tasks, files, and applications quick and effortless. Every feature seems designed to save time and reduce clicks - making every day a more productive one.
            </Tool>
            <Tool title="Contexts">
              Contexts is my window-switching wizard. With its super-fast search, it lets me bounce between application windows with ease. Its enhanced command-tab and sidebar features are lifesavers for multiple spaces and displays. Plus, the quick gesture feature means I'm always just a flick away from my next task. It's a brilliant tool that streamlines my workspace, no matter how busy I get.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
