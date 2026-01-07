import { getCurrentUserRole } from "@/lib/getCurrentUserRoles";
import { redirect } from "next/navigation";


export default async function AdminPage(){
    const role = await getCurrentUserRole();

    if(role !== "admin"){
        redirect("/dashboard");
    }

    return (
        <div>
            <h1 className="text-2xl font-bold">Admin panel</h1>
            <p>Only admins can see this.</p>
        </div>
    )
}