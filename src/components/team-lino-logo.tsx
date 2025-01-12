import React from 'react'
import Link from "next/link";
import Image from "next/image";

export function TeamLinoLogo() {
    return (
        <Link href={"/"}
              className={"flex-shrink-0 flex items-center gap-2 font-bold text-xl leading-none font-montserrat"}>
            <Image
                src="https://oemzduzzsdzlouednwio.supabase.co/storage/v1/object/public/team_lino_website/16.png"
                alt="Team Lino Logo"
                width={800}
                height={800}
                className="h-9 w-9 object-contain dark:hidden"
            />
            <Image
                src="https://oemzduzzsdzlouednwio.supabase.co/storage/v1/object/public/team_lino_website/15.png"
                alt="Team Lino Logo"
                width={800}
                height={800}
                className="hidden h-9 w-9 object-contain dark:block"
            />
            <div className={"flex flex-col"}>
                <span className={"tracking-wide"}> TEAM <span className={"text-primary"}>LINO</span> </span>
                <span className="text-xs"> ONLINE COACHING </span>
            </div>
        </Link>
    )
}
