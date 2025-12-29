import Navbar from "@/Components/Navbar";
import Sidebar, { SidebarProvider } from "@/Components/Sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({children} :{children : ReactNode}){
    return(
        <SidebarProvider>
            <div className="flex h-screen">
            <Sidebar/>
            <div className="flex flex-col flex-1">
                <Navbar/>
                <main className="p-6 bg-gray-100 h-full overflow-y-auto">{children}</main>
            </div>
        </div>
        </SidebarProvider>
        
    )
}