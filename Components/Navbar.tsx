"use client"

import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import { useState } from "react"
import Avatar from "./Avatar";

export default function Navbar() {
    // return (
    //     <div className="w-full h-14 bg-white shadow flex items-center px-6 justify-between">
    //         <h1 className="text-xl font-semibold">Welcome User</h1>
    //         <button className="px-4 py-2 bg-blue-600 text-white rounded">Logout</button>
    //     </div>
    // )
    const [open,setOpen] = useState(false);

    const user = {
        name:"suresh",
        avatarUrl:"/window.svg"
    }
    return (
        <header className="w-full h-14 bg-white shadow flex items-center justify-between px-6">
            {/* Left */}
            <h1 className="text-lg font-semibold">Dashboard</h1>
            <div className="relative">
                <button onClick={()=>setOpen((prev)=>!prev)} className="flex items-center gap-2 focus:outline-none">
                    {/* Profile Picture */}
                    {/* <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                        <User size={18}/>
                    </div> */}
                    {/* User Name */}
                    
                    {/* <span className="text-sm font-medium">User</span> */}

                    <Avatar src={user.avatarUrl} />
                    <span className="text-sm font-medium">{user.name}</span>
                    <ChevronDown size={16}/>
                </button>
                {open &&(
                    <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-md overflow-hidden z-50">
                        <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2">
                            <User size={16}/>
                            Profile
                        </button>
                        <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2">
                            <Settings size={16}/>
                            Settings
                        </button>
                        <hr/>
                        <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2 text-red-600">
                            <LogOut size={16}/>
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </header>
    )
}