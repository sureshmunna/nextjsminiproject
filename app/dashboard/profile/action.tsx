"use server"

import { createServerClient } from "@supabase/ssr";
import { revalidatePath } from "next/cache";

import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export async function updateProfile(formData: FormData){
    const cookieStore = await cookies();

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies :{
                getAll(){
                    return cookieStore.getAll();
                },
                setAll(cookies){
                    cookies.forEach(({name,value,options})=>
                        cookieStore.set(name,value,options)
                    );
                }
            }
        }
    );
    const full_name = formData.get("full_name") as string;

    const {
        data : {user},
    } = await supabase.auth.getUser();

    if(!user){
        throw new Error ("Not authenticated");
    }

    const {error} = await supabase
        .from("profiles")
        .update({full_name})
        .eq("id",user.id);

    if(error){
        //throw new Error(error.message);
        return { success: false, message: error.message };
    }

    revalidatePath("/dashboard/profile") // we can use redirect("/dashboard/profile");
    //redirect("/dashboard/profile");

    return {success : true};// for normal popup
}