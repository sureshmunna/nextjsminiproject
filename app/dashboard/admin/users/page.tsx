import { getCurrentUserRole } from "@/lib/getCurrentUserRoles";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default async function AdminUserPage(){
    const role = await getCurrentUserRole();

    if(role !=='admin')
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
            <table className="w-full border">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((u)=>(
                        <tr key={u.id}>
                            <td> {u.email} </td>
                            <td> {u.full_name} </td>
                            <td> {u.role} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}