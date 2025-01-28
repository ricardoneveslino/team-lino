import React from 'react'
import Image from 'next/image'
import {TeamLinoLogo} from "@/components/team-lino-logo";
import {Instagram} from "@/components/brand-icons/instagram";
import {Youtube} from "@/components/brand-icons/youtube";
import {Whatsapp} from "@/components/brand-icons/whatsapp";
import {Twitch} from "@/components/brand-icons/twitch";

export const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex w-full flex-col bg-gradient-to-b p-4 from-background to-primary/20 lg:px-32 min-h-56">

            <div className={"flex flex-col sm:flex-row justify-center items-center gap-12 h-full py-8"}>

                <div className={"flex-1 gap-2 h-full"}>
                    <h2 className={"text-xl text-center sm:text-left font-bold mb-2"}>Tens Dúvidas?</h2>
                    <a
                        href="https://wa.link/7kuau9"
                        target="_blank"
                        rel="nopener nofollow"
                        className={
                            "flex items-center gap-4 px-4 py-2 bg-[#25D366]/10 text-[#25D366] rounded-md hover:bg-[#25D366]/20 transition-colors w-fit"
                        }
                    >
                        <span>Fala Connosco</span>
                        <Whatsapp className={"w-5 h-5"}/>
                    </a>
                </div>


                <div className={"flex-1 flex justify-center items-start h-full order-3 sm:order-none"}>
                    <TeamLinoLogo/>
                </div>
                <div className={"flex-1 h-full"}>
                    <h2 className={"text-xl font-bold mb-2 text-center sm:text-left"}>Redes Sociais</h2>
                    <div className={"flex flex-col items-start gap-2"}>
                        <a className="flex items-center gap-2 rounded-lg p-1 group" target="_blank"
                           href={"https://www.youtube.com/@Andre_Lino"}
                           rel="noopener noreferrer"
                        >
                            <Youtube className="inline"/>
                            <span className="text-xs group-hover:underline">YouTube</span>
                        </a>
                        <a className="flex items-center gap-2 rounded-lg p-1 group" target="_blank"
                           href="https://www.instagram.com/andree_linoo/"
                           rel="noopener noreferrer"
                        >
                            <Instagram className="inline"/>
                            <span className="text-xs group-hover:underline">Instagram</span>
                        </a>
                        <a className={"flex items-center gap-2 rounded-lg p-1 group"} target="_blank"
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
