// components/Chatbot.jsx
"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Meteors } from "./meteors";
import { Input } from "@nextui-org/input";

const Chatbot = () => {
  //   const [visible, setVisible] = useState(false);
  //   const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const messages = [
    {
      id: 1,
      message: "Hello, how can I help you today?",
      sender: "bot",
    },
    {
      id: 2,
      message: "I would like to know more about your services",
      sender: "user",
    },
    {
      id: 3,
      message:
        "Sure, we offer a wide range of services. What are you looking for?",
      sender: "bot",
    },
    {
      id: 4,
      message: "I am looking for a web developer",
      sender: "user",
    },
  ];

  return (
    <>
      {/* <Popover placement="top-end" offset={20} showArrow>
        <PopoverTrigger>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="text-small font-bold">Popover Content</div>
            <div className="text-tiny">This is the popover content</div>
          </div>
        </PopoverContent>
      </Popover> */}
      <div className="z-20">
        <div className=" w-full relative max-w-lg h-[40rem] space-y-2">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start gap-4">
            {/* <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div> */}

            {/* <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Meteors because they&apos;re cool
            </h1> */}
            <div className="flex items-center justify-between w-full">
              <h1 className="font-bold text-xl text-white mb-4 absolute top-3 z-50">
                Libr-AI-nian
              </h1>
              {/* <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                Close
              </button> */}
            </div>
            <div className="flex flex-col space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`${
                    message.sender === "bot" ? "justify-start" : " justify-end"
                  } flex`}
                >
                  <div
                    className={`${
                      message.sender === "bot"
                        ? "bg-gray-800 text-white justify-start"
                        : "bg-gray-700 text-gray-300 justify-end"
                    } px-4 py-2 rounded-lg`}
                  >
                    {message.message}
                  </div>
                </div>
              ))}
            </div>
            <Input
              type="text"
              label="Enter your message..."
              className="w-full"
            />

            {/* <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              I don&apos;t know what to write so I&apos;ll just paste something
              cool here. One more sentence because lorem ipsum is just
              unacceptable. Won&apos;t ChatGPT the shit out of this.
            </p> */}

            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Explore
            </button>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
