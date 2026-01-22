import { getCurrentUserRole } from "@/lib/getCurrentUserRoles";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default async function AdminUserPage(){
    const role = await getCurrentUserRole();

    if(role.role !=="admin")
        redirect("/dashboard");

    const cookieStore = await cookies();

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies :{
                getAll : ()=> cookieStore.getAll(),
                setAll : (cookie)=> cookie.forEach(({name,value,options})=> cookieStore.set(name,value,options)),
            },
        },
    );

    const {data :users} = await supabase.from("profiles").select("id,email,full_name,role");

    return(
        <div>
            <h1 className="text-xl font-bold mb-4">Users</h1>
            <table className=" border-collapse bg-gray-100 dark:bg-gray-800">
                <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr className="border-t dark:border-gray-700">
                        <th className="p-2 text-left">Email</th>
                        <th className="p-2 text-left">Name</th>
                        <th className="p-2 text-left">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((u)=>(
                        <tr key={u.id} className="border-t dark:border-gray-700">
                            <td className="p-2"> {u.email} </td>
                            <td className="p-2"> {u.full_name} </td>
                            <td className="p-2"> {u.role} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}