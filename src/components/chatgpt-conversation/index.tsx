import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Markdown from "marked-react";
import { Disclosure } from "@headlessui/react";

export type Conversation = {
  question: string;
  answer: string;
  defaultOpen: boolean;
};

type Props = {
  conversations: Conversation[];
};

function Conversation({ question, answer, defaultOpen }: Conversation) {
  return (
    <Disclosure defaultOpen={defaultOpen}>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-zinc-600 px-4 py-2 text-left text-sm font-medium text-zinc-50 hover:bg-zinc-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <span>{question}</span>
            <ChevronUpIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-blue-200`}
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

export const ChatGptConversation = ({ conversations }: Props) => {
  return (
    <div className="w-full">
      <h3>Conversation with ChatGPT:</h3>
      <div className="mx-auto w-full space-y-4 rounded-2xl bg-zinc-800 p-4">
        {conversations.map((conversation) => (
          <Conversation
            key={conversation.question}
            question={conversation.question}
            answer={conversation.answer}
            defaultOpen={conversation.defaultOpen}
          />
        ))}
      </div>
    </div>
  );
};
