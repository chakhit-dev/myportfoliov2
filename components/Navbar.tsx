"use client"

import * as React from "react"
import Link from "next/link"
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
  Menu,
  X,
  ChevronDown,
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Separator } from "./ui/separator"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

const items = [
  { label: "TH", value: "th" },
  { label: "ENG", value: "eng" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isExpOpen, setIsExpOpen] = React.useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-auto z-50 border border-neutral-200/60 rounded-xl md:rounded-xl px-5 py-3 md:py-2 bg-white/70 backdrop-blur-md shadow-sm text-neutral-600 transition-all duration-300">
      <div className="flex md:hidden items-center justify-between w-full">
        <Link
          href="#home"
          onClick={(e) => handleScroll(e, "home")}
          className="font-bold text-neutral-900 tracking-wider text-sm hover:text-neutral-500 transition-colors"
        >
          CHAKHIT.DEV
        </Link>

        <div className="flex items-center gap-2">
          <Select defaultValue="th" modal={false}>
            <SelectTrigger className="w-24 h-8 text-xs bg-transparent border-neutral-200">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {items.map((item) => (
                  <SelectItem key={item.value} value={item.value} className="text-xs">
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-md hover:bg-neutral-100 transition-colors text-neutral-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-neutral-100/50 cursor-pointer`}
                render={
                  <Link 
                    href="#home" 
                    onClick={(e) => handleScroll(e, "home")} 
                    className="font-bold tracking-wider text-neutral-900 hover:text-neutral-600 transition-colors"
                  >
                    CHAKHIT.DEV
                  </Link>
                }
              />
            </NavigationMenuItem>

            <Separator orientation="vertical" className="my-2 h-4" />

            <NavigationMenuItem>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-neutral-100/50 cursor-pointer`}
                render={
                  <Link 
                    href="#home" 
                    onClick={(e) => handleScroll(e, "home")} 
                    className="text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    Home
                  </Link>
                }
              />
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-neutral-100/50 cursor-pointer`}
                render={
                  <Link 
                    href="#about" 
                    onClick={(e) => handleScroll(e, "about")} 
                    className="text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    About Me
                  </Link>
                }
              />
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-neutral-100/50 cursor-pointer`}
                render={
                  <Link 
                    href="#project" 
                    onClick={(e) => handleScroll(e, "project")} 
                    className="text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    Projects
                  </Link>
                }
              />
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-neutral-100/50 text-neutral-500 hover:text-neutral-900 transition-colors">
                Experience
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] p-2 gap-1 bg-white/90 backdrop-blur-md border border-neutral-100 rounded-xl">
                  <li>
                    <NavigationMenuLink
                      render={
                        <Link href="#journey" onClick={(e) => handleScroll(e, "journey")} className="flex flex-row items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-50 text-neutral-600 hover:text-neutral-900 transition-colors text-sm">
                          <CircleAlertIcon className="w-4 h-4" />
                          My Journey
                        </Link>
                      }
                    />
                    <NavigationMenuLink
                      render={
                        <Link href="#contact" onClick={(e) => handleScroll(e, "contact")} className="flex flex-row items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-50 text-neutral-600 hover:text-neutral-900 transition-colors text-sm">
                          <CircleCheckIcon className="w-4 h-4" />
                          Contact
                        </Link>
                      }
                    />
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <Separator orientation="vertical" className="my-2 h-4" />

            <Select defaultValue="th" modal={false}>
              <SelectTrigger className="bg-transparent border-none shadow-none focus:ring-0 w-auto h-auto py-2 text-neutral-500 hover:text-neutral-900 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {items.map((item) => (
                    <SelectItem key={item.value} value={item.value} className="text-sm">
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-neutral-200/60 flex flex-col gap-1 w-full text-sm">
          <Link href="#home" onClick={(e) => handleScroll(e, "home")} className="px-3 py-2.5 rounded-lg hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <Link href="#about" onClick={(e) => handleScroll(e, "about")} className="px-3 py-2.5 rounded-lg hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 transition-colors">
            About Me
          </Link>
          <Link href="#project" onClick={(e) => handleScroll(e, "project")} className="px-3 py-2.5 rounded-lg hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 transition-colors">
            Projects
          </Link>

          <div>
            <button
              type="button"
              onClick={() => setIsExpOpen(!isExpOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <span>Experience</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpOpen ? "rotate-180" : ""}`} />
            </button>

            {isExpOpen && (
              <div className="pl-4 pr-1 py-1 flex flex-col gap-1 text-sm text-neutral-500">
                <Link href="#journey" onClick={(e) => handleScroll(e, "journey")} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-100 hover:text-neutral-900 transition-colors">
                  <CircleAlertIcon className="w-4 h-4" />
                  <span>My Journey</span>
                </Link>
                <Link href="#contact" onClick={(e) => handleScroll(e, "contact")} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-100 hover:text-neutral-900 transition-colors">
                  <CircleCheckIcon className="w-4 h-4" />
                  <span>Contact</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}