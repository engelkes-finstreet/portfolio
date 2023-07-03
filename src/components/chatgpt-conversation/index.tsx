import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Markdown from "marked-react";
import { Disclosure } from "@headlessui/react";

export type Conversation = {
  prompt: string;
  answer: string;
};

type Props = {
  conversations: Conversation[];
  title: string;
};

function Conversation({ prompt, answer }: Conversation) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-zinc-300 px-4  py-2 text-left text-sm font-medium text-zinc-800 hover:bg-zinc-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75  dark:bg-zinc-600 dark:text-zinc-50 dark:hover:bg-zinc-500">
            <span>{prompt}</span>
            <ChevronUpIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-zinc-800 dark:text-zinc-200`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="prose px-4 pb-2 dark:prose-invert prose-h2:mt-8">
            <Markdown>{answer}</Markdown>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export const ChatGptConversation = ({ conversations, title }: Props) => {
  return (
    <div className="w-full">
      <h3>{title}:</h3>
      <div className="mx-auto w-full space-y-4 rounded-2xl bg-zinc-100 p-4 dark:bg-zinc-800">
        {conversations.map((conversation) => (
          <Conversation
            key={conversation.prompt}
            prompt={conversation.prompt}
            answer={conversation.answer}
          />
        ))}
      </div>
    </div>
  );
};
