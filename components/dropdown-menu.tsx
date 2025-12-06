"use client"

import { CircleChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"


export function DropdownMenuHeader() {
    return (
        <>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" aria-label="Open menu" size="icon-sm" className="cursor-pointer bg-none outline-0 border-0">
                        <CircleChevronDown />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40 bg-transparent font-jetbrains-mono" align="end">
                    <DropdownMenuLabel className="cursor-pointer text-sm text-foreground/70 hover:text-foreground">Resume</DropdownMenuLabel>
                    <Link href="/contact">
                        <DropdownMenuLabel className="cursor-pointer text-sm text-foreground/70 hover:text-foreground">
                            Contact
                        </DropdownMenuLabel>
                    </Link>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
