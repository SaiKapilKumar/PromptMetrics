"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChatPanel } from "@/components/chat/chat-panel";
import { Menu } from "lucide-react";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import Dashboard from "@/components/layout/dashboard";
import { SidebarProvider, useSidebar } from "@/lib/context/sidebar-context";

function MainLayout() {
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <div className="min-h-screen flex">
      {/* Sidebar - conditionally rendered based on toggle state */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:static lg:z-auto">
          {/* Backdrop for mobile */}
          <div className="fixed inset-0 bg-black/30 lg:hidden" onClick={closeSidebar}></div>
          
          {/* Sidebar container */}
          <div className="fixed inset-y-0 left-0 w-64 z-50 lg:static lg:w-64 lg:block lg:h-screen">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Rest of your component remains the same */}
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

export default function Home() {
  return (
    <SidebarProvider>
      <MainLayout />
    </SidebarProvider>
  );
}