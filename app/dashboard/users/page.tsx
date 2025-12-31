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
    const users = await getUsers();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-5">Users</h1>
            <div className="bg-white dark:bg-gray-800 rounded shadow">
                <table className="w-full border-collapse">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user)=>(
                            <tr key={user.id} className="border-t dark:border-gray-700">
                                <td className="p-3">{user.name}</td>
                                <td className="p-3"> {user.email} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}