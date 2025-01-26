import React from 'react'
import Image from "next/image";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"


const AboutUs = () => {
    return (
        <div className={"w-full flex flex-col sm:flex-row gap-4 justify-start items-start"}>
            <div className={"flex-1 flex gap-4"}>
                <div className={"flex-1 space-y-4 scroll-animate delay-400"}>
                    <p className={"text-balance text-center sm:text-left"}>
                        A Team Lino é muito mais do que uma equipa de profissionais – é uma empresa dedicada a
                        transformar vidas. Liderada por Ricardo Lino e André Lino!
                        Pai e filho juntos, trazemos conosco mais de 30 anos de experiência na área do fitness.
                    </p>

                    <Collapsible className={"flex flex-col gap-4"}>
                        <CollapsibleTrigger className={"text-sm font-semibold text-center sm:text-left"}>Continuar a ler...</CollapsibleTrigger>
                        <CollapsibleContent>
                            <p className={"text-balance text-center sm:text-left"}>
                                Atualmente, contamos com três estúdios de treino personalizado à porta fechada, onde cada
                                cliente é acompanhado exclusivamente por um dos nossos Personal Trainers. Estes espaços foram
                                criados para garantir um ambiente privado, seguro e totalmente focado nos objetivos de cada
                                pessoa.
                                <br/><br/>
                                Com o crescimento da nossa marca e o aumento do número de pessoas que confiam no nosso trabalho,
                                decidimos expandir o nosso negócio para o online. Desta forma, conseguimos levar o nosso
                                acompanhamento especializado a todos, independentemente da localização!
                                <br/><br/>
                                A nossa missão é oferecer-te um acompanhamento profissional e personalizado, tanto nos nossos
                                estúdios como no conforto da tua casa, para que alcances os teus objetivos com confiança e
                                segurança.
                                <br/><br/>
                                Junta-te à Team Lino e descobre como 30 anos de dedicação, paixão e inovação podem transformar a
                                tua vida. O teu sucesso é o nosso propósito!
                            </p>
                        </CollapsibleContent>
                    </Collapsible>

                </div>
            </div>
            <div className={"flex-1 flex gap-2 scroll-animate"}>
                <div className={"flex-1"}>
                    <Image
                        loading={"lazy"}
                        src="https://oemzduzzsdzlouednwio.supabase.co/storage/v1/object/public/team_lino_website/ricardo_e_andre.jpeg"
                        alt="Ricardo Lino e André Lino"
                        width={600}
                        height={600}
                        quality={50}
                        sizes={"(max-width: 640px) 50vw, 25vw"}
                        className={"rounded"}
                    />
                </div>
                <div className={"flex-1 bg-black rounded"}>
                    <Image
                        loading={"lazy"}
                        src="https://oemzduzzsdzlouednwio.supabase.co/storage/v1/object/public/team_lino_website/team_lino.png"
                        alt="Ricardo Lino e André Lino"
                        width={600}
                        height={600}
                        quality={50}
                        sizes="(max-width: 640px) 50vw, 25vw"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
