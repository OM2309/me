"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export function DropdownMenuHeader() {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          aria-label="Open menu"
          size="icon-sm"
          className="border-0 bg-transparent"
        >

          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40 bg-transparent font-jetbrains-mono" align="end">
        <DropdownMenuLabel className="cursor-pointer text-sm text-foreground/70 hover:text-foreground">
          <a href="/Anurag-2yr.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </DropdownMenuLabel>

        <Link href="/contact" className="block">
          <DropdownMenuLabel className="cursor-pointer text-sm text-foreground/70 hover:text-foreground">
            Contact
          </DropdownMenuLabel>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}