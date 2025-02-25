import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { TrendingUpIcon, TimelineIcon, BarChart3Icon } from "lucide-react"

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <TrendingUpIcon className="text-primary" />
            <h2 className="text-lg font-semibold">Metrics Overview</h2>
          </CardHeader>
          <CardContent>
            {/* Add metrics content */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <TimelineIcon className="text-primary" />
            <h2 className="text-lg font-semibold">Recent Activity</h2>
          </CardHeader>
          <CardContent>
            {/* Add activity content */}
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center gap-2">
            <BarChart3Icon className="text-primary" />
            <h2 className="text-lg font-semibold">Statistics</h2>
          </CardHeader>
          <CardContent>
            {/* Add statistics content */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
