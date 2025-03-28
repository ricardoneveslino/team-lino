import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import {Dumbbell, NotebookPen} from "lucide-react";
import PresentationVideo from "@/components/presentation-video";

export function Hero() {

    return (
        <div className={"h-full w-full flex flex-col items-center md:justify-center gap-12 sm:gap-32"}>

            <div className={"flex flex-col gap-16 sm:flex-row items-center justify-center w-full"}>

                <div className={"w-full sm:w-6/12 flex flex-col gap-4 items-center sm:items-start"}>

                    <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-6xl xl:text-7xl text-pretty sm:text-left">
                        Transforma Objetivos em{" "}
                        <span
                            className="bg-gradient-to-r from-primary via-[#ff6b6f] to-[#ff999a] bg-clip-text text-transparent">
                            Resultados.
                        </span>
                    </h1>

                    <PresentationVideo className={"sm:hidden"}/>

                    <div className={"flex flex-col gap-4 text-center sm:text-left"}>
                        <Separator className={"w-8 bg-primary mx-auto sm:mx-0"}/>
                        <span className={"text-sm text-center sm:text-left w-full text-balance"}> Terás acesso à nossa App exclusiva e ao teu plano de ação individualizado com o nosso acompanhamento diário para atingires os teus objetivos. </span>
                    </div>

                    <div className={"flex flex-wrap gap-4 justify-center sm:justify-start"}>
                        <Button variant={"outline"} className={"font-medium scroll-animate !duration-300"} asChild>
                            <a href={"/#planos"}>
                                <NotebookPen className={"inline"} size={16}/>
                                Escolhe o Teu Plano
                            </a>
                        </Button>
                        <Button variant={"default"} className={"font-medium scroll-animate !duration-300"}
                                asChild>
                            <a href={"https://signup-teamlino.mkgest.com"} target={"_blank"} rel={"noreferrer nofolow"}>
                                <Dumbbell className={"inline"} size={16}/>
                                Inicia a Tua Transformação
                            </a>
                        </Button>
                    </div>

                </div>

                <PresentationVideo className={"hidden sm:block sm:w-6/12"}/>
            </div>
        </div>
    )
}
