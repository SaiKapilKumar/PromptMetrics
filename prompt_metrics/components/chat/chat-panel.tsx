"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { History, Send, X, Plus } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useChat } from "@/lib/hooks/use-chat"

export function ChatPanel() {
  const [showHistory, setShowHistory] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  const {
    messages,
    chatHistory,
    activeChat,
    sendMessage,
    createNewChat,
    loadChat
  } = useChat();
  
  // Scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollArea = scrollAreaRef.current;
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [messages]);
  
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue("");
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  return (
    <div className="flex flex-col h-full">
      {showHistory ? (
        // Chat History View
        <div className="flex flex-col h-full">
          <div className="border-b px-4 py-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Chat History</h3>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setShowHistory(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full px-4 py-2">
              <div className="space-y-2">
                {chatHistory.map((chat) => (
                  <Button 
                    key={chat.id} 
                    variant="ghost" 
                    className="w-full justify-start text-left h-auto py-3 px-4"
                    onClick={() => {
                      loadChat(chat.id);
                      setShowHistory(false);
                    }}
                  >
                    <div>
                      <div className="font-medium">{chat.title}</div>
                      <div className="text-xs text-muted-foreground">{chat.date}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>
          <div className="border-t p-3">
            <Button 
              onClick={() => {
                createNewChat();
                setShowHistory(false);
              }}
              className="w-full"
            >
              <Plus className="mr-2 h-4 w-4" />
              New Chat
            </Button>
          </div>
        </div>
      ) : (
        // Chat Panel View
        <div className="flex flex-col h-full">
          <div className="border-b px-4 py-3">
            <div className="flex items-center justify-between">
              <CardTitle>{activeChat?.title || "New Conversation"}</CardTitle>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setShowHistory(true)}
              >
                <History className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Main chat messages area */}
          <div className="flex-1 overflow-hidden" ref={scrollAreaRef}>
            <ScrollArea className="h-full px-4 py-4">
              <div className="space-y-4 pb-4">
                {messages.map((message, index) => (
                  <ChatMessage key={index} message={message} />
                ))}
              </div>
            </ScrollArea>
          </div>
          
          {/* Fixed input area at bottom */}
          <div className="border-t px-4 py-3 bg-background">
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                className="flex gap-1 items-center"
                onClick={() => {
                  createNewChat();
                }}
              >
                <Plus className="h-3.5 w-3.5" />
              </Button>
              <div className="flex-1">
                <Input 
                  placeholder="Type your message..." 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <Button 
                size="icon"
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ChatMessage({ message }: { message: { role: string; content: string } }) {
  const isUser = message.role === "user";
  
  return (
    <div className={cn(
      "flex",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[80%] rounded-lg px-3 py-2",
        isUser ? "bg-primary text-primary-foreground" : "bg-muted/70 text-foreground"
      )}>
        {message.content}
      </div>
    </div>
  );
}