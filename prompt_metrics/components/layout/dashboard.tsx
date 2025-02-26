"use client";

import { StatsCards } from "@/components/dashboard/stats-cards";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  return (
    <div className="space-y-6 pb-8">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>

      <StatsCards />

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
              <CardDescription>
                View your prompt performance metrics over time
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center border-t">
              <p className="text-muted-foreground">
                Chart visualization would go here
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-2">
                    <p className="text-sm font-medium">
                      New prompt template added
                    </p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="text-sm font-medium">
                      Response time improved by 15%
                    </p>
                    <p className="text-xs text-muted-foreground">5 hours ago</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      User feedback collected
                    </p>
                    <p className="text-xs text-muted-foreground">Yesterday</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Top Performing Prompts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <p className="text-sm font-medium">Product description</p>
                    <p className="text-sm font-medium">98%</p>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <p className="text-sm font-medium">Customer service</p>
                    <p className="text-sm font-medium">95%</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Code generation</p>
                    <p className="text-sm font-medium">92%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}