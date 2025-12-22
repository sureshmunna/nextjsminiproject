"use client"

import { Home, Menu, Settings, User } from "lucide-react"
import Link from "next/link"

export default function Sidebar(){
    return(
        <aside className="w-64 h-full bg-gray-900 text-white p-4 flex flex-col gap-4">
            <div className="mb-6 flex items-center gap-3">
                <Menu className="min-w-[20px]" />
                    <h2>Dashboard</h2>
            </div>
            <nav>
                <Link href="/dashboard">
                    <Home/>
                    <span>Home</span>
                </Link>
                <Link href="/dashbors/users">
                    <User/>
                    <span>Users</span>
                </Link>
                <Link href="/dashboard/settings">
                    <Settings/>
                    <span>Settings</span>
                </Link>
            </nav>
        </aside>
    )
}