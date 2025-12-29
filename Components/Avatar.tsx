import Image from "next/image";

interface AvatarProps{
    src?:string;
    alt?:string;
}

export default function Avatar({
    src,
    alt="User avatar"
}:AvatarProps){
    if(!src){
        return(
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold">
                U
            </div>
        )
    }
    return(
        <Image src={src}
        alt={alt}
        width={32}
        height={32}
        className="rounded-full object-cover"
        />
    )
}