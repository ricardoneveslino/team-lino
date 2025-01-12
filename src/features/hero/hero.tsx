import React from 'react'
import Image from 'next/image'
import {TeamLinoLogo} from "@/components/team-lino-logo";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import {ChevronDown, Dumbbell, NotebookPen} from "lucide-react";

export function Hero() {
    return (
        <div className={"h-full w-full flex flex-col items-center gap-4 justify-center"}>

            <div className={"flex items-center justify-center w-full"}>

                <div className={"flex-1 flex flex-col gap-4 items-start "}>

                    <TeamLinoLogo/>
                    <h1 className="font-bold md:text-4xl lg:text-6xl xl:text-7xl text-balance">
                        Transforma Objetivos em{" "}
                        <span
                            className="bg-gradient-to-r from-primary via-[#ff6b6f] to-[#ff999a] bg-clip-text text-transparent">
                            Resultados.
                        </span>
                    </h1>

                    <div>
                        <Separator className={"w-8 bg-primary"}/>
                        <span className={"text-sm"}> Planos de treino feitos para atingir os teus objetivos. </span>
                    </div>

                    <div className={"flex flex-wrap gap-4 mt-4"}>
                        <Button variant={"outline"} className={"font-medium"}>
                            <NotebookPen className={"inline"} size={15}/>
                            Escolhe o Teu Plano
                        </Button>
                        <Button variant={"default"} className={"font-medium hover:-translate-y-1 transition-transform"}>
                            <Dumbbell className={"inline"} size={15}/>
                            Inicia a Tua Transformação
                        </Button>
                    </div>

                </div>

                <div className="relative flex-1 p-8">
                    <Image
                        priority
                        src="https://oemzduzzsdzlouednwio.supabase.co/storage/v1/object/public/team_lino_website/team_lino.png"
                        alt="Hero"
                        width={800}
                        height={800}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                        placeholder="blur"
                        blurDataURL="https://oemzduzzsdzlouednwio.supabase.co/storage/v1/object/public/team_lino_website/team_lino.png"
                        className={"relative z-10"}
                    />

                </div>


            </div>

            <Button className={"absolute bottom-4"} variant={"ghost"} >
                <ChevronDown className={"inline"} size={15}/>
                Antes e Depois: Confere os Resultados
            </Button>

        </div>
    )
}
