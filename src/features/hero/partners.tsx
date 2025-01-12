import React from 'react'
import {partners} from "@/data/partners";
import Image from "next/image";
import {hexToRgba} from "@/lib/utils";
import {ExternalLink} from "lucide-react";

export const Partners = () => {
    return (
        <div className={"mt-auto"}>
            <h2 className={"text-xs text-center mb-2"}>
                Os Nossos Parceiros
            </h2>
            <div className={"flex"}>

                {partners.map(partner =>
                    <PartnerCard key={partner.name} partner={partner}/>
                )}

            </div>
        </div>
    )
}

interface PartnerCardProps {
    partner: typeof partners[0]
}


const PartnerCard = ({partner}: PartnerCardProps) => {

    const partnerColor = hexToRgba(partner.color, 0.35)

    return (
        <a href={partner.website}
           target="_blank" rel="noopener noreferrer"
           className={`group flex flex-col rounded-lg w-52 relative hover:scale-95 transition-transform`}
           style={{ boxShadow: `0px 4px 15px ${partnerColor}` }}
        >

            <div className={"p-2 w-full flex items-center justify-center"}>
                <Image
                    src={partner.logoWhite}
                    alt={"Logo Zumub"}
                    width={256}
                    height={256}
                    className={"hidden dark:block object-cover w-full h-16"}
                />
                <Image
                    src={partner.logoBlack}
                    alt={"Logo Zumub"}
                    width={256}
                    height={256}
                    className={"block dark:hidden object-cover w-full h-16"}
                />
            </div>
            <div className={"h-12 flex items-center justify-between bg-foreground/10 p-2 text-sm rounded-b-lg"}>
                <span className={"text-foreground/80"}> Usa o código: </span>

                <span className={"bg-background font-semibold p-2 rounded-lg"}> {partner.discountCode} </span>
            </div>
            <div className={"absolute inset-0 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity"}>
                <ExternalLink size={32}/>
            </div>
        </a>
    )

}