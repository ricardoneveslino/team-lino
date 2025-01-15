import React from 'react'
import {TeamLinoLogo} from "@/components/team-lino-logo";
import {ThemeToggle} from "@/components/theme-toggle";
import {menuItems} from "@/data/menu";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Menu} from "lucide-react";

export function Header() {
    return (
        <header
            className={"fixed top-0 w-full h-16 flex justify-between md:justify-center items-center border-b bg-opacity-80 backdrop-blur-md lg:px-32 pe-4 z-50"}>

            <div className={"w-full max-w-[1200px] h-full flex justify-between items-center gap-6 py-2 px-4"}>

                <TeamLinoLogo/>

                <nav className={"hidden md:flex items-center gap-6"}>
                    <ul className={"flex gap-4 text-foreground/80 text-sm text-nowrap"}>
                        {menuItems.map(item =>
                            <Link key={item.title}
                                  href={item.href}
                                  className={"transition-colors hover:text-primary"}
                            >

                                {item.title}

                            </Link>
                        )}
                    </ul>
                    <Separator orientation={"vertical"} className={"h-6"}/>
                    <Button variant={"default"} asChild>
                        <a href={"https://signup-teamlino.mkgest.com"} target={"_blank"} rel={"noreferrer nofolow"}>
                            Começa Já
                        </a>
                    </Button>
                </nav>
                <MobileNav/>
            </div>
            <ThemeToggle/>
        </header>
    )
}


export const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Abrir menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-8 w-[300px] sm:w-[400px]">
                <SheetHeader>
                    <SheetTitle>
                        <TeamLinoLogo/>
                    </SheetTitle>
                    <SheetDescription className={"sr-only"}> Menu de Navegação </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-4">
                    <ul className="flex flex-col text-sm text-foreground/80">
                        {menuItems.map((item) => (
                            <li key={item.title} className={"flex"}>
                                <Link href={item.href} className="transition-colors hover:text-primary flex-1 p-2">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Separator />
                    <Button variant="default" asChild className="w-full">
                        <a
                            href="https://signup-teamlino.mkgest.com"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Começa Já
                        </a>
                    </Button>
                </nav>
            </SheetContent>
        </Sheet>
    )
}
