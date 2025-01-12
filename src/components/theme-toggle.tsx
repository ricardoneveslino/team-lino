"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {Button} from "@/components/ui/button";
import {Moon, Sun} from "lucide-react"; // Assuming you're using next-themes

interface ThemeToggleProps {
    className?: string
}

export function ThemeToggle( {className}: ThemeToggleProps ) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Ensure the component is mounted before rendering theme-dependent UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Render nothing on the server
    }

    return (
        <Button
            className={`aspect-square ${className}`}
            variant="ghost"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
    );
}
