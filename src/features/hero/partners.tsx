import React from 'react'
import {partners} from "@/data/partners";
import Image from "next/image";
import {hexToRgba} from "@/lib/utils";
import {ExternalLink} from "lucide-react";

export const Partners = () => {
    return (
        <>
            <h2 className={"text-sm text-center sm:text-left w-full sr-only"}> Os nossos parceiros </h2>
            <div className={"flex"}>

                {partners.map(partner =>
                    <PartnerCard key={partner.name} partner={partner}/>
                )}

            </div>
        </>
    )
}

interface PartnerCardProps {
    partner: typeof partners[0]
}


const PartnerCard = ({ partner }: PartnerCardProps) => {
    const partnerColorRaw = partner.color

    return (
        <a
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center rounded-lg relative hover:scale-95 transition-transform w-full max-w-lg p-1`}
        >
            <span className={`absolute inset-0 bg-gradient-to-tr from-[${partnerColorRaw}] to-background z-[-1] opacity-25 blur`}></span>
            {/* Logo Section */}
            <div className="flex items-center justify-center w-24 h-12">
                <Image
                    src={partner.logoWhite}
                    alt={`Logo ${partner.name}`}
                    width={64}
                    height={64}
                    className="hidden dark:block object-cover"
                />
                <Image
                    src={partner.logoBlack}
                    alt={`Logo ${partner.name}`}
                    width={64}
                    height={64}
                    className="block dark:hidden object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col justify-center items-center px-4">
                <div className="text-xs text-foreground/80 font-medium">
                    Usa o código:
                </div>
                <div className="font-semibold rounded-md text-foreground">
                    {partner.discountCode}
                </div>
            </div>

            {/* Hover Icon */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
                <ExternalLink size={24} />
            </div>
        </a>
    );
};
