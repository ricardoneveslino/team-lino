import React from 'react'
import Image from 'next/image'
import {TeamLinoLogo} from "@/components/team-lino-logo";
import {Instagram} from "@/components/brand-icons/instagram";
import {Youtube} from "@/components/brand-icons/youtube";
import {Twitch} from "@/components/brand-icons/twitch";

export const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex w-full flex-col bg-gradient-to-b p-4 from-background to-primary/20 lg:px-32 min-h-56">

            <div className={"flex flex-col-reverse sm:flex-row justify-between items-center gap-12 h-full py-8 w-full"}>

                <div className={"flex justify-center items-start h-full order-3 sm:order-none"}>
                    <TeamLinoLogo/>
                </div>
                <div className={"h-full"}>
                    <h2 className={"text-xl font-bold mb-2 text-center sm:text-left"}>Redes Sociais</h2>
                    <div className={"flex flex-col items-center sm:items-end gap-2"}>
                        <a className="flex flex-row-reverse items-center gap-2 rounded-lg p-1 group" target="_blank"
                           href={"https://www.youtube.com/@Andre_Lino"}
                           rel="noopener noreferrer"
                        >
                            <Youtube className="inline"/>
                            <span className="text-xs group-hover:underline">YouTube</span>
                        </a>
                        <a className="flex flex-row-reverse items-center gap-2 rounded-lg p-1 group" target="_blank"
                           href="https://www.instagram.com/andree_linoo/"
                           rel="noopener noreferrer"
                        >
                            <Instagram className="inline"/>
                            <span className="text-xs group-hover:underline">Instagram</span>
                        </a>
                        <a className={"flex flex-row-reverse items-center gap-2 rounded-lg p-1 group"} target="_blank"
                           href="https://www.twitch.tv/andree_linoo"
                           rel="noopener noreferrer">
                            <Twitch className={"inline"}/>
                            <span className="text-xs group-hover:underline">Twitch</span>
                        </a>
                    </div>
                </div>
            </div>


            <div className={"w-full flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"}>
                <span>© {currentYear} Team Lino. All rights reserved.</span>
                <span>Developed by: {" "}
                    <a target="_blank" rel="noopener noreferrer" href="https://web.blueprint-soft.com">
                        <Image className={"-translate-y-[1px] hidden dark:inline"}
                               src="https://oemzduzzsdzlouednwio.supabase.co/storage/v1/object/public/team_lino_website/blueprint_symbol_white.png"
                               alt="Blueprint Web Logo" width={12} height={12}/>
                    <Image className={"-translate-y-[1px] inline dark:hidden"} src="https://oemzduzzsdzlouednwio.supabase.co/storage/v1/object/public/team_lino_website/blueprint_symbol_black.png" alt="Blueprint Web Logo" width={12} height={12}/>
                        {" "} Web Blueprint Team
                    </a>
                </span>
            </div>


        </footer>
    )
}
