"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Settings,
  Home,
  PieChart,
  MessageSquare,
  Users,
  X,
} from "lucide-react";
import { useSidebar } from "@/lib/context/sidebar-context";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Reports", href: "/reports", icon: PieChart },
  { name: "Prompts", href: "/prompts", icon: MessageSquare },
  { name: "Team", href: "/team", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const { closeSidebar } = useSidebar();

  return (
    <div className="flex h-full flex-col bg-muted/20">
      <div className="px-3 py-4">
        <div className="flex h-10 items-center px-3 justify-between">
          <span className="text-lg font-semibold">PromptMetrics</span>
          <Button variant="ghost" size="icon" onClick={closeSidebar} className="lg:hidden">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <nav className="mt-8 space-y-1">
          {navigation.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2 px-3",
                pathname === item.href 
                  ? "bg-accent text-accent-foreground" 
                  : "hover:bg-muted"
              )}
              asChild
              onClick={closeSidebar}
            >
              <Link href={item.href}>
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
}