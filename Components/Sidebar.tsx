

import { Home, Menu, Settings, User } from "lucide-react"
import Link from "next/link"


export default function Sidebar(){
    return(
        <aside className="w-64 h-full bg-gray-900 text-white p-4 flex flex-col gap-4">
            <div className="mb-6 flex items-center gap-3">
                <Menu className="min-w-[20px]" />
                    <h2 className="text-2xl font-bold">Dashboard</h2>
            </div>
            <nav className="flex flex-col gap-2">
                <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700">
                    <Home className="min-w-[20px]"/>
                    <span>Home</span>
                </Link>
                <Link href="/dashbors/users"className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700">
                    <User className="min-w-[20px]"/>
                    <span>Users</span>
                </Link>
                <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700">
                    <Settings className="min-w-[20px]"/>
                    <span>Settings</span>
                </Link>
            </nav>
        </aside>
    )
}