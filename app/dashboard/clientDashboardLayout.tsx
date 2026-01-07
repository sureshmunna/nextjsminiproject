"use client";

import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import { SidebarProvider } from "@/Components/SidebarContext";
import { ThemeProvider } from "@/Components/ThemeContext";
import { getCurrentUserRole } from "@/lib/getCurrentUserRoles";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export default function ClientDashboardLayout({
  children,

}: {
  children: ReactNode;
  
}) {
    //const role = await getCurrentUserRole();
  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
          <Sidebar />

          <div className="flex flex-col flex-1">
            <Navbar />
            <main className="p-6 flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
              {children}
              <Toaster position="top-center" richColors />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
