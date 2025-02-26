"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChatPanel } from "@/components/chat/chat-panel";
import { Menu } from "lucide-react";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import Dashboard from "@/components/layout/dashboard"; // <-- Our dashboard content

export default function Home() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar - Desktop */}
      <div className="hidden lg:block w-64 border-r">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <Header />

        {/* Scrollable content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Dashboard />
        </main>
      </div>

      {/* Chat Panel - Mobile */}
      <div className="fixed bottom-4 right-4 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] flex flex-col p-0"
          >
            <ChatPanel />
          </SheetContent>
        </Sheet>
      </div>

      {/* Chat Panel - Desktop */}
      <aside className="hidden lg:block w-[400px] border-l h-screen overflow-hidden">
        <ChatPanel />
      </aside>
    </div>
  );
}