import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export async function getUser() {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookies) {
          try {
            cookies.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch {
            // Server Components cannot set cookies
            // This is safe to ignore here
          }
        },
      },
    }
  );

  const {data: { user }, } = await supabase.auth.getUser();

  return user;
}

//const { data } = await supabase.auth.getUser();
//const { user } = data;
//Combine both steps into ONE line (your code)

//so it becomes const { data: { user } } = await supabase.auth.getUser(); this is called nested destructuring.
//  Go into data
//  Pick user
//  Put it into a variable called user