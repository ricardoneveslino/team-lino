import {TeamLinoLogo} from "@/components/team-lino-logo";
import {ThemeToggle} from "@/components/theme-toggle";
import {menuItems} from "@/data/menu";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import dynamic from "next/dynamic";

const MobileNav = dynamic(() =>
    import('@/components/mobile-nav')
)

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
            <div className={"w-10 h-10 flex justify-center items-center"}>
                <ThemeToggle/>
            </div>
        </header>
    )
}
