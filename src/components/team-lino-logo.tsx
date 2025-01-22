import Link from "next/link";
import {TeamLinoSymbol} from "@/components/brand-icons/team-lino-symbol";

export const TeamLinoLogo = () => {
    return (
        <Link href={"/"}
              className={"flex-shrink-0 flex items-center gap-2 font-bold text-xl leading-none font-montserrat"}>
            <TeamLinoSymbol className="h-9 w-9"/>
            <div className={"flex flex-col"}>
                <span className={"tracking-wide text-nowrap"}> TEAM <span className={"text-primary"}>LINO</span> </span>
                <span className="text-xs text-nowrap"> ONLINE COACHING </span>
            </div>
        </Link>
    )
}
