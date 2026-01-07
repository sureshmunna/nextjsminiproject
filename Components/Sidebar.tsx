"use client"

import { Home, Menu, Settings, Shield, User } from "lucide-react"
import Link from "next/link"
import { createContext, ReactNode, useState } from "react";
import { useSidebar } from "./SidebarContext";


// interface SidebarContextType {
//     collapsed : boolean;
//     toggle : () =>void;
// }

// const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// export function SidebarProvider({children}:{children : ReactNode}){
//     const [collapsed,setCollapsed] = useState(false);
//     const toggle = ()=> setCollapsed((prev)=>!prev);

//     return (
//         <SidebarContext.Provider value={{collapsed,toggle}}>{children}</SidebarContext.Provider>
//     )
// }

export default function Sidebar(){
    const {collapsed} = useSidebar();

    return (
        // <aside className={`h-full bg-gray-900 text-white transition-all duration-300 ${
        //     collapsed ? "w-16" : "w-64"}`}>
                <aside className={`h-full transition-all duration-300 
                    ${collapsed ? "w-16" : "w-64"} 
                    bg-gray-900 dark:bg-black text-white`}>
                {/* <div className="flex items-center gap-3 mb-6">
                    <Menu/>
                    {!collapsed && <h2 className="text-xl font-bold">Dashboard</h2> }
                </div>

                <nav className="flex flex-col gap-2">
                    <SidebarItem 
                    href="/dashboard"
                    icon={<Home/>}
                    label = "Home"
                    collapsed={collapsed} 
                    />
                    <SidebarItem
                        href="/dashboard/users"
                        icon={<User />}
                        label="Users"
                        collapsed={collapsed}
                    />
                    <SidebarItem
                        href="/dashboard/settings"
                        icon={<Settings />}
                        label="Settings"
                        collapsed={collapsed}
                    />
                </nav> */}

                <div className="p-4">
                    <div className="flex items-center gap-3 mb-6">
                    <Menu />
                    {!collapsed && <h2 className="text-xl font-bold">Dashboard</h2>}
                    </div>

                    <nav className="flex flex-col gap-2">
                    <SidebarItem
                        href="/dashboard"
                        icon={<Home />}
                        label="Home"
                        collapsed={collapsed}
                    />
                    <SidebarItem
                        href="/dashboard/users"
                        icon={<User />}
                        label="Users"
                        collapsed={collapsed}
                    />
                    <SidebarItem
                        href="/dashboard/settings"
                        icon={<Settings />}
                        label="Settings"
                        collapsed={collapsed}
                    />
                    {/* {role ==='admin' &&(
                            <SidebarItem href="/dashboard/admin"
                            icon = {<Shield/>}
                            label="Admin"
                            collapsed ={collapsed}
                            />
                        )
                    } */}
                    </nav>
                </div>
            </aside>
    )
    // return(
    //     <aside className="w-64 h-full bg-gray-900 text-white p-4 flex flex-col gap-4">
    //         <div className="mb-6 flex items-center gap-3">
    //             <Menu className="min-w-[20px]" />
    //                 <h2 className="text-2xl font-bold">Dashboard</h2>
    //         </div>
    //         <nav className="flex flex-col gap-2">
    //             <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700">
    //                 <Home className="min-w-[20px]"/>
    //                 <span>Home</span>
    //             </Link>
    //             <Link href="/dashbors/users"className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700">
    //                 <User className="min-w-[20px]"/>
    //                 <span>Users</span>
    //             </Link>
    //             <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700">
    //                 <Settings className="min-w-[20px]"/>
    //                 <span>Settings</span>
    //             </Link>
    //         </nav>
    //     </aside>
    // )
}

function SidebarItem({
    href,
    icon,
    label,
    collapsed,
}:{
    href :string;
    icon : React.ReactNode;
    label : string;
    collapsed : boolean
}){
    return(
        // <Link href={href} className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700">
            <Link href={href}  className="
                flex items-center gap-3 px-3 py-2 rounded
                hover:bg-gray-700 dark:hover:bg-gray-800
            "
            >
            {icon}
            {!collapsed && <span>{label}</span>}
        </Link>
    )
}