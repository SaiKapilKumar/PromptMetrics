"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { History, Send, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

// Sample chat messages for demonstration
const sampleMessages = [
  { id: 1, role: "user", content: "How can I improve my prompt engineering?" },
  { id: 2, role: "assistant", content: "To improve prompt engineering, focus on clarity, specificity, and providing context. Use examples, be explicit about the format you want, and iterate on your prompts based on the responses you receive." },
  { id: 3, role: "user", content: "What metrics should I track for my prompts?" },
  { id: 4, role: "assistant", content: "Important metrics to track include response quality, response time, token usage, cost per interaction, user satisfaction, and completion rate. These will help you optimize your prompts for both effectiveness and efficiency." }
];

// Sample chat history
const chatHistory = [
  { id: 1, title: "Prompt Engineering Best Practices", date: "2023-10-15" },
  { id: 2, title: "Cost Optimization Strategies", date: "2023-10-12" },
  { id: 3, title: "Response Quality Analysis", date: "2023-10-10" },
  { id: 4, title: "Token Usage Optimization", date: "2023-10-08" },
];

export function ChatPanel() {
  const [showHistory, setShowHistory] = useState(false);
  
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
                    onClick={() => setShowHistory(false)}
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
        </div>
      ) : (
        // Chat Panel View
        <div className="flex flex-col h-full">
          <div className="border-b px-4 py-3">
            <div className="flex items-center justify-between">
              <CardTitle>Chat Assistant</CardTitle>
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
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full px-4 py-4">
              <div className="space-y-4 pb-4">
                {sampleMessages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
              </div>
            </ScrollArea>
          </div>
          
          {/* Fixed input area at bottom */}
          <div className="border-t px-4 py-3 bg-background">
            <div className="flex gap-2">
              <Input placeholder="Type your message..." />
              <Button size="icon">
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