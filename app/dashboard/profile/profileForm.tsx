"use client"
import { useState } from "react";
import { updateProfile } from "./action";
import { toast } from "sonner";

export default function ProfileForm({profile} :{profile :any}){
    const [message,setMessage] = useState<string|null>(null);
    const [loading,setLoading] = useState(false);

    async function handleSubmit(formData: FormData){
        setLoading(true);
        setMessage(null);
        const result = await updateProfile(formData);

        if(result?.success){
            setMessage("Profile updated Successfuly");
            toast.success("Profile updated Successfuly");
            //toast.error(result?.message || "Update failed");
        }
        else{
            setMessage(result?.message || "something went wrong");
            toast.error(result?.message || "Update failed");
        }
        setLoading(false);
    }
    return(
        <form action={handleSubmit} className="space-y-4 max-w-md">
            <div>
                <label>Email</label>
                <input
                disabled
                value={profile.email}
                className="w-full p-2 border rounded bg-gray-100"
                />
            </div>

            <div>
                <label>Full Name</label>
                <input
                name="full_name"
                defaultValue={profile.full_name}
                className="w-full p-2 border rounded"
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                {loading ? "Updating..." : "Update Profile"}
            </button>

            {message && (
                <div className="mt-2 text-green-600 font-medium">
                {message}
                </div>
            )}
        </form>
    )

    
}