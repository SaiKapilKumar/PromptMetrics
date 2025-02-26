"use client";

import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatButtonProps {
  onClick: () => void;
}

export function ChatButton({ onClick }: ChatButtonProps) {
  return (
    <Button
      className="rounded-full h-12 w-12 shadow-lg"
      onClick={onClick}
      variant="default"
    >
      <MessageSquare className="h-5 w-5" />
    </Button>
  );
}
