import React from 'react';
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Trash2Icon } from "lucide-react"
import { formatDate } from '../utils/formatDate';

const ChatSidebar = ({ chats, selectedChat, onSelectChat, onDeleteChat, isOpen }) => {
  if (!isOpen) return null;

  return (
    <Card className="h-full w-64 overflow-hidden">
      <div className="bg-black p-4 text-white">
        <h2 className="text-xl">Chat History</h2>
      </div>
      
      <ScrollArea className="h-[calc(100%-4rem)]">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`group relative cursor-pointer p-3 hover:bg-muted ${
              selectedChat?.id === chat.id ? 'bg-muted' : ''
            }`}
            onClick={() => onSelectChat(chat)}
          >
            <div className="pr-8">
              <p className="truncate font-medium">{chat.title || 'New Chat'}</p>
              <p className="text-sm text-muted-foreground">
                {formatDate(chat.timestamp)}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteChat(chat.id);
              }}
            >
              <Trash2Icon className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </ScrollArea>
    </Card>
  );
};

export default ChatSidebar;
