"use client";

import React from 'react'
import MenuItem from './MenuItem'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Button } from './ui/button'

import { LogOut, Moon, Settings, Sun, User } from "lucide-react";

import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center p-3 max-w-7xl mx-auto ">
      {/* Top left Home and About */}
      <div className='flex gap-4'>
        <MenuItem title="Home" address="/"/>
        <MenuItem title="About" address="/about"/>
      </div>
      <div className="flex gap-4">
        {/*Theme Menu*/}
        <DropdownMenu className=""> 
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        {/* Top right Logo? */}
        <Link href="/" className='flex gap-1 items-center'>
          <span className='text-2xl font-bold bg-green-600 py-1 px-2 rounded-lg'>Movie</span>
          <span className='text-xl hidden sm:inline'>App</span>
        </Link>
      </div>
    </nav>
  )
}
