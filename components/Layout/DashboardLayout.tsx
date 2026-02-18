'use client';

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-background-light dark:bg-background-dark text-gray-900 dark:text-white">
        <Navbar />
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
