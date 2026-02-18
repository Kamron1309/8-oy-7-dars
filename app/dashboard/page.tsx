'use client';

import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, DollarSign, GraduationCap } from "lucide-react";
import SalesChart from "@/components/Dashboard/SalesChart";

const stats = [
  {
    title: "Jami Studentlar",
    value: "1,450",
    icon: Users,
    description: "+20.1% o'tgan oydan",
    trend: "up"
  },
  {
    title: "Faol Kurslar",
    value: "25",
    icon: BookOpen,
    description: "+5 yangi kurs",
    trend: "up"
  },
  {
    title: "Oylik Daromad",
    value: "15.5 mln",
    icon: DollarSign,
    description: "+12.5% o'sish",
    trend: "up"
  },
  {
    title: "Faol Guruhlar",
    value: "30",
    icon: GraduationCap,
    description: "8 guruh to'liq",
    trend: "neutral"
  },
];

const recentActivities = [
  { text: "Yangi student qo'shildi", time: "5 daqiqa oldin" },
  { text: "To'lov qabul qilindi", time: "10 daqiqa oldin" },
  { text: "Yangi guruh ochildi", time: "1 soat oldin" },
  { text: "Yangi kurs yaratildi", time: "2 soat oldin" },
];

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Admin boshqaruv paneli
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.title}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Charts and Activities */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {/* Sales Chart */}
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Haftalik Sotuvlar</CardTitle>
                <CardDescription>
                  So'nggi 7 kunlik statistika
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <SalesChart />
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>So'nggi Faoliyatlar</CardTitle>
                <CardDescription>
                  Bugungi yangiliklar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center">
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {activity.text}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Progress Card */}
          <Card>
            <CardHeader>
              <CardTitle>Oylik Reja</CardTitle>
              <CardDescription>
                Hozirda reja 90% bajarildi
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-secondary rounded-full h-3">
                <div
                  className="bg-primary h-3 rounded-full transition-all"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
