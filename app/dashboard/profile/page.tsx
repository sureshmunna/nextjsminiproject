import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { updateProfile } from "./action";
import ProfileForm from "./profileForm";


export default async function ProfilePage() {
    const cookieStore = await cookies();
    
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies :{
                getAll(){
                   return cookieStore.getAll();
                },
                setAll(Kookie){
                    Kookie.forEach(({name,value,options})=>
                          cookieStore.set(name,value,options)
                    )
                }
            }
        }
    );
    const {data :{user},}=await supabase.auth.getUser();

    const {data:profile} = await supabase.from("profiles").select("email,full_name").eq("id",user!.id).single();

    // return(
    //     <div className="max-w-md">
    //         <h1 className="text-2xl font-bold mb-4">My Profile</h1>
    //         <form action={updateProfile} className="space-y-4">
    //             <div>
    //                 <label className="block text-sm mb-1">Email</label>
    //                 <input value={profile?.email ?? ""}  disabled className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-800"/>
    //             </div>
    //             <div>
    //                 <label className="block text-sm mb-1">Full Name</label>
    //                 <input name="full_name" defaultValue={profile?.full_name ?? ""} className="w-full p-2 border rounded"/>
    //             </div>
    //             <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded"> Update Profile</button>
    //         </form>
    //     </div>
    // )
    return <ProfileForm profile={profile} />
}