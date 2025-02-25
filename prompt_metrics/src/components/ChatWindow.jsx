import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { MenuIcon, SendIcon, PlusIcon } from "lucide-react"

const ChatWindow = ({ selectedChat, onSendMessage, onNewChat, isSidebarOpen, onToggleSidebar }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-center gap-2 bg-black p-4 text-white">
        <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
          <MenuIcon className="h-5 w-5" />
        </Button>
        <h2 className="flex-1 text-xl">{selectedChat?.title || 'New Chat'}</h2>
        <Button variant="ghost" size="icon" onClick={onNewChat}>
          <PlusIcon className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {selectedChat?.messages?.map((msg, index) => (
          <div 
            key={index}
            className={`mb-2 rounded-lg p-3 ${
              msg.isUser ? 'bg-primary/10' : 'bg-muted'
            }`}
          >
            <p>{msg.content}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2 p-4">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
          placeholder="Type your message..."
          className="flex-1"
        />
        <Button 
          onClick={handleSend}
          disabled={!message.trim()}
          size="icon"
        >
          <SendIcon className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default ChatWindow;
