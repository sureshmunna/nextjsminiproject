"use client"

import { ChevronDown, LogOut, PanelLeft, Settings, User,Sun,Moon } from "lucide-react";
import { useState } from "react"
import Avatar from "./Avatar";
import { useSidebar } from "./SidebarContext";
import { useTheme } from "./ThemeContext";
import { supabase } from "@/lib/supabaseClient";


export default function Navbar({full_name} :{full_name :string|null}) {
  const [open, setOpen] = useState(false);
  const { toggle } = useSidebar();
  const {theme,toggleTheme} =useTheme();  

  const user = {
    name: "Suresh",
    avatarUrl: "/window.svg",
  };
const handleLogout = async () => {
  await supabase.auth.signOut();
  window.location.href = "/login";
};
const handleProfile = async () =>{
  window.location.href = "/dashboard/profile"
}
  return (
    // <header className="w-full h-14 bg-white shadow flex items-center justify-between px-4">
      <header className="
        w-full h-14 shadow flex items-center justify-between px-4
        bg-white text-gray-900
        dark:bg-gray-800 dark:text-gray-100
      ">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          className="p-2 rounded hover:bg-gray-100 hover:dark:text-gray-900"
        >
          <PanelLeft size={20} />
        </button>
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      {/* Right */}
      
      <div className="relative">
        <div className="flex items-center gap-3">
 <button onClick={toggleTheme}
           className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
           </button>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2"
        >
          <Avatar src={user.avatarUrl} />
          <span className="text-sm font-medium">{full_name}</span>
          <ChevronDown size={16} />
        </button>
        </div>
       

        {open && (
          // <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-md z-50">
            <div
                className="
                  absolute right-0 mt-2 w-44 rounded shadow-md z-50
                  bg-white text-gray-900 border
                  dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
                "
              >
            <button className="dropdown-item hover:bg-gray-100 dark:hover:bg-gray-700" onClick={handleProfile}>
              <User size={16} /> Profile
            </button>
            <button className="dropdown-item hover:bg-gray-100 dark:hover:bg-gray-700">
              <Settings size={16} /> Settings
            </button>
            <hr />
            <button className="dropdown-item text-red-600" onClick={handleLogout}>
              <LogOut size={16} /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
// export default function Navbar() {
//     // return (
//     //     <div className="w-full h-14 bg-white shadow flex items-center px-6 justify-between">
//     //         <h1 className="text-xl font-semibold">Welcome User</h1>
//     //         <button className="px-4 py-2 bg-blue-600 text-white rounded">Logout</button>
//     //     </div>
//     // )
//     const [open,setOpen] = useState(false);
//     const {toggle} = useSidebar();

//     const user = {
//         name:"suresh",
//         avatarUrl:"/window.svg"
//     }
//     return (
//         // <header className="w-full h-14 bg-white shadow flex items-center justify-between px-6">
//         //     {/* Left */}
//         //     <h1 className="text-lg font-semibold">Dashboard</h1>
//         //     <div className="relative">
//         //         <button onClick={()=>setOpen((prev)=>!prev)} className="flex items-center gap-2 focus:outline-none">
//         //             {/* Profile Picture */}
//         //             {/* <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
//         //                 <User size={18}/>
//         //             </div> */}
//         //             {/* User Name */}
                    
//         //             {/* <span className="text-sm font-medium">User</span> */}

//         //             <Avatar src={user.avatarUrl} />
//         //             <span className="text-sm font-medium">{user.name}</span>
//         //             <ChevronDown size={16}/>
//         //         </button>
//         //         {open &&(
//         //             <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-md overflow-hidden z-50">
//         //                 <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2">
//         //                     <User size={16}/>
//         //                     Profile
//         //                 </button>
//         //                 <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2">
//         //                     <Settings size={16}/>
//         //                     Settings
//         //                 </button>
//         //                 <hr/>
//         //                 <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2 text-red-600">
//         //                     <LogOut size={16}/>
//         //                     Logout
//         //                 </button>
//         //             </div>
//         //         )}
//         //     </div>
//         // </header>

//         <header className="w-full h-14 bg-white shadow flex items-center justify-between px-4">
//       {/* Left */}
//       <div className="flex items-center gap-3">
//         <button
//           onClick={toggle}
//           className="p-2 rounded hover:bg-gray-100"
//         >
//           <PanelLeft size={20} />
//         </button>
//         <h1 className="text-lg font-semibold">Dashboard</h1>
//       </div>

//       {/* Right */}
//       <div className="relative">
//         <button
//           onClick={() => setOpen((prev) => !prev)}
//           className="flex items-center gap-2"
//         >
//           <Avatar src={user.avatarUrl} />
//           <span className="text-sm font-medium">{user.name}</span>
//           <ChevronDown size={16} />
//         </button>

//         {open && (
//           <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-md z-50">
//             <button className="dropdown-item">
//               <User size={16} /> Profile
//             </button>
//             <button className="dropdown-item">
//               <Settings size={16} /> Settings
//             </button>
//             <hr />
//             <button className="dropdown-item text-red-600">
//               <LogOut size={16} /> Logout
//             </button>
//           </div>
//         )}
//       </div>
//     </header>
//     )
// }