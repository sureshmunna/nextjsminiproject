"use client";

import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import { SidebarProvider } from "@/Components/SidebarContext";
import { ThemeProvider } from "@/Components/ThemeContext";
import { ReactNode } from "react";

export default function ClientDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
          <Sidebar />

          <div className="flex flex-col flex-1">
            <Navbar />
            <main className="p-6 flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
