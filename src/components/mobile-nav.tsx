import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import {TeamLinoLogo} from "@/components/team-lino-logo";
import {menuItems} from "@/data/menu";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";

const MobileNav = () => {
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
                        <SheetClose asChild>
                            <TeamLinoLogo/>
                        </SheetClose>
                    </SheetTitle>
                    <SheetDescription className={"sr-only"}> Menu de Navegação </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-4">
                    <ul className="flex flex-col text-sm text-foreground/80">
                        {menuItems.map((item) => (
                            <li key={item.title} className={"flex"}>
                                <SheetClose asChild>
                                    <Link href={item.href} className="transition-colors hover:text-primary flex-1 py-2">
                                        {item.title}
                                    </Link>
                                </SheetClose>
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
export default MobileNav
