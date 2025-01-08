import ChatLoading from "@/components/chat/chat-loading";
import ChatRow from "@/components/chat/chat-row";
import { useChatScrollAnchor } from "@/components/hooks/use-chat-scroll-anchor";
import { useSession } from "next-auth/react";
import { useRef } from "react";
import { useChatContext } from "./chat-context";
import { ChatHeader } from "./chat-header";

import ChatInput from "./chat-input/chat-input";

export const ChatMessageContainer = () => {
  const { data: session } = useSession();
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, isLoading } = useChatContext();

  useChatScrollAnchor(messages, scrollRef);

  return (
    <div className="h-full rounded-md overflow-y-auto " ref={scrollRef}>
      <div className="flex justify-center p-4">
        <ChatHeader />
      </div>
      <div className=" pb-[80px] flex flex-col justify-end flex-1">
        {messages.map((message, index) => (
          <ChatRow
          name={message.role === "user" ? session?.user?.name ?? "Unknown User" : process.env.NEXT_PUBLIC_AI_NAME ?? "AI"}
  //        name={message.role === "user" ? session?.user?.name! : process.env.NEXT_PUBLIC_AI_NAME}
          profilePicture={
              message.role === "user" ? session?.user?.image! : "/ai-icon.png"
            }
            message={message.content}
            type={message.role}
            key={index}
          />
        ))}
        {isLoading && <ChatLoading />}
      </div>
    </div>
  );
};
