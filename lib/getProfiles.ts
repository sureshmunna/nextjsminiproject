import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";


export async function getProfiles(){
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
                    )
                }
            }
        }
    );
    const {data,error} = await supabase
        .from("profiles")
        .select("id,email,full_name,role,created_at");

    if(error){
        throw new Error(error.message);
    }
    return data;
}