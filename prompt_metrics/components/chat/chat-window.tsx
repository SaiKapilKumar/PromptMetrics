"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChatPanel } from "@/components/chat/chat-panel";

interface ChatWindowProps {
  onClose: () => void;
}

export function ChatWindow({ onClose }: ChatWindowProps) {
  return (
    <Card className="w-80 sm:w-96 h-[500px] fixed bottom-16 left-6 z-50 shadow-xl flex flex-col">
      <CardHeader className="py-3 px-4 flex flex-row items-center justify-between border-b">
        <CardTitle className="text-sm font-medium">PromptMetrics Assistant</CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="p-0 overflow-hidden flex-1">
        <div className="h-full">
          <ChatPanel />
        </div>
      </CardContent>
    </Card>
  );
}