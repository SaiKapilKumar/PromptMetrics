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
} from "lucide-react";

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

  return (
    <div className="flex h-full flex-col bg-muted/20">
      <div className="px-3 py-4">
        <div className="flex h-10 items-center px-3">
          <span className="text-lg font-semibold">PromptMetrics</span>
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