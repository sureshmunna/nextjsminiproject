// import Navbar from "@/Components/Navbar";
// import Sidebar from "@/Components/Sidebar";
// import { SidebarProvider } from "@/Components/SidebarContext";
// import { ThemeProvider } from "@/Components/ThemeContext";
import { getUser } from "@/lib/getUser";
import { ReactNode } from "react";
import ClientDashboardLayout from "./clientDashboardLayout";
import { redirect } from "next/navigation";
import { getCurrentUserRole } from "@/lib/getCurrentUserRoles";

export default async function DashboardLayout({children} :{children : ReactNode}){
        const user = await getUser();
            if (!user) {
                redirect("/login");
            }
        const data = await getCurrentUserRole();
   return <ClientDashboardLayout user = {data}>{children}</ClientDashboardLayout>;
       //return(
        // <SidebarProvider>
        //     <div className="flex h-screen">
        //     <Sidebar/>
        //     <div className="flex flex-col flex-1">
        //         <Navbar/>
        //         <main className="p-6 bg-gray-100 h-full overflow-y-auto">{children}</main>
        //     </div>
        // </div>
        // </SidebarProvider>
        // <ThemeProvider>
        //     <SidebarProvider>
        //         <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        //         <Sidebar />

        //         <div className="flex flex-col flex-1">
        //             <Navbar />
        //             <main className="p-6 flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        //             {children}
        //             </main>
        //         </div>
        //         </div>
        //     </SidebarProvider>
        // </ThemeProvider>


        //);
    
}