import { getProfiles } from "@/lib/getProfiles";
import { setInterval } from "timers/promises";

type User = {
    id : number;
    name : string;
    email : string;
}

async function getUsers():Promise<User []> {
    await new Promise (resolve => setTimeout(resolve,2000))
    const res = await fetch("https://jsonplaceholder.typicode.com/users",
        {
            cache : "no-store",
        },
        
    );

    if(!res.ok){
        throw new Error("Failed to fetch Users");
    }
    const users= await res.json();
    

    return users;
}

export default async function UserPage(){
    const APIusers = await getUsers();

    const users = await getProfiles();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-5">API Users</h1>
            <div className="bg-white dark:bg-gray-800 rounded shadow">
                <table className="w-full border-collapse">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {APIusers.map((user)=>(
                            <tr key={user.id} className="border-t dark:border-gray-700">
                                <td className="p-3">{user.name}</td>
                                <td className="p-3"> {user.email} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h2 className="text-2xl font-bold mb-4">Supabase Users</h2>
            <table className="bg-gray-100 dark:bg-gray-800">
                <thead>
                    <tr>
                        <th className="p-2 text-left">Email</th>
                        <th className="p-2 text-left">Name</th>
                        <th className="p-2 text-left">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u)=>(
                        <tr key={u.id} className="border-t">
                            <td className="p-2">{u.email}</td>
                            <td className="p-2">{u.full_name ?? "_"}</td>
                            <td className="p-2">{u.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
        
    )
}