"use client"

import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation"
import { useState } from "react";


export default function LoginPage(){
    const router = useRouter();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");

    const handleLogin = async () =>{
        const {error} = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if(error){
            setError(error.message);
        }
        else{
            router.push("/dashboard")
        }
    };
    return(
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-80">
                <h1 className="text-xl font-bold mb-4">Login</h1>
                <input 
                    className="w-full mb-3 p-2 border rounded"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                    type="password"
                    className="w-full mb-3 p-2 border rounded"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>setPassword(e.target.value)}
                />
                {error &&   (
                    <p className="text-red-600 text-sm mb-2">{error}</p>
                )}

                <button onClick={handleLogin} className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
            </div>
        </div>
    )
}