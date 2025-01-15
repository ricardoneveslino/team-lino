import React from 'react'
import Image from 'next/image'
import {TeamLinoLogo} from "@/components/team-lino-logo";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import {Dumbbell, NotebookPen} from "lucide-react";
import {Partners} from "@/features/hero/partners";

export function Hero() {
    return (
        <div className={"h-full w-full flex flex-col items-center justify-center"}>

            <div className={"flex flex-col gap-4 sm:flex-row items-center justify-center w-full"}>

                <div className={"w-full sm:w-6/12 flex flex-col gap-2 items-center sm:items-start "}>

                    <TeamLinoLogo/>
                    <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-6xl xl:text-7xl text-balance sm:text-left">
                        Transforma Objetivos em{" "}
                        <span
                            className="bg-gradient-to-r from-primary via-[#ff6b6f] to-[#ff999a] bg-clip-text text-transparent">
                            Resultados.
                        </span>
                    </h1>

                    <div className={"flex flex-col gap-2 text-center sm:text-left"}>
                        <Separator className={"w-8 bg-primary mx-auto sm:mx-0"}/>
                        <span className={"text-sm text-center sm:text-left w-full"}> Planos de treino feitos para atingir os teus objetivos. </span>
                    </div>

                    <div className={"flex flex-wrap gap-4 mt-4 justify-center sm:justify-start"}>
                        <Button variant={"outline"} className={"font-medium"} asChild>
                            <a href={"/#planos"}>
                                <NotebookPen className={"inline"} size={16}/>
                                Escolhe o Teu Plano
                            </a>
                        </Button>
                        <Button variant={"default"} className={"font-medium hover:-translate-y-1 transition-transform"} asChild>
                            <a href={"https://signup-teamlino.mkgest.com"} target={"_blank"} rel={"noreferrer nofolow"}>
                                <Dumbbell className={"inline"} size={16}/>
                                Inicia a Tua Transformação
                            </a>
                        </Button>
                    </div>

                </div>

                <div className="relative hidden w-full sm:w-6/12 p-8 sm:block">
                    <Image
                        priority
                        src="https://oemzduzzsdzlouednwio.supabase.co/storage/v1/object/public/team_lino_website/team_lino.png"
                        alt="Hero"
                        width={800}
                        height={800}
                        sizes="(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 800px"
                        placeholder="blur"
                        blurDataURL="https://oemzduzzsdzlouednwio.supabase.co/storage/v1/object/public/team_lino_website/team_lino.png"
                        className={"relative z-10 max-sm:w-72"}
                    />

                </div>


            </div>

            <Partners/>

            {/*<Button className={"absolute bottom-4"} variant={"ghost"} asChild>*/}
            {/*    <a href={"/#transformações"}>*/}
            {/*        <ChevronDown className={"inline animate-bounce"} size={16}/>*/}
            {/*        Antes e Depois: Confere os Resultados*/}
            {/*    </a>*/}
            {/*</Button>*/}

        </div>
    )
}
