'use client'
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Bars3BottomRightIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

import { cn } from "@/lib/utils"


interface navItem {
    name: string,
    href: string,
    isActive: boolean
}

export const Navbar = () => {
    const [open, setOpen] = useState(false); //mobile main nav toggle
    const pathname = usePathname();
    const navContent: navItem[] = [
        {
            name: "Tin Mới - Thông Báo",
            href: "/news",
            isActive: pathname === '/news'
        },
        {
            name: "Tĩnh Nguyện Hàng Ngày",
            href: "/dailybread",
            isActive: pathname === '/dailybread'
        },
        {
            name: "Cầu Nguyện",
            href: "/pray",
            isActive: pathname === '/pray'
        },
        {
            name: "Kinh Thánh",
            href: "https://kinhthanh.httlvn.org/?v=NVB",
            isActive: false
        },
    ]
  return (
    <div className="flex items-center justify-between p-4 lg:px-7 ">

        <div>
        <Logo />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block">
        <MainNavDesktop items = {navContent}/>
        </div>

        <div className="hidden md:block">
        <SubInfos />
        </div>


        {/* Mobile Nav */}
        <div className={cn('md:hidden absolute z-10 top-24 left-0 w-full h-full', open && ' backdrop-blur-sm')}>
        {open && <MainNavMobile items = {navContent} open = {open} />}
        </div>

        <div className="md:hidden h-fit" onClick={() => setOpen(!open)}>
        {/* <Bars3BottomRightIcon className="h-8 w-8 text-black"/> */}
        <HambugerIcon open={open} setOpen={setOpen} />
        </div>
        
    </div>
  )
}

const Logo = () => {
    return(
        <div>
            <p>Hội Thánh Tin Lành Việt Nam</p>
            <p className='text-4xl font-bold' >Knoxville</p>
        </div>
    )
}

const MainNavDesktop = ({items}: {items:navItem[]}) => {
    return(
        <div className={cn("bg-primary h-1/2 py-4 flex items-center justify-center ",)}>
            {items.map((route) => (
                    <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "px-4 py-2 rounded-lg",
                        route.isActive? "bg-black text-white" : "text-gray-600"
                    )}
                    > 
                    {route.name}
                    </Link>
            ))}
        </div>
    )
}
const MainNavMobile = ({items, open} : {items:navItem[], open: boolean}) => {
    return(
        <div className={cn("bg-primary h-1/2 py-4 flex flex-col items-center justify-center space-y-7 bg-gray-300",)}>
            {items.map((route) => (
                    <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "font-medium text-xl px-4 py-2 rounded-lg",
                        route.isActive? "bg-black text-white" : "text-gray-600"
                    )}
                    > 
                    {route.name}
                    </Link>
            ))}
        </div>
    )
}

const SubInfos = () => {
    return (
        <div>
            contact Us
        </div>
    )
}

const HambugerIcon = ({open, setOpen} : {open: boolean, setOpen: (open: boolean)=>void}) => {
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

    return (
        <button
          className="flex flex-col h-12 w-12 justify-center items-center group"
          onClick={() => setOpen(!open)}
        >
          <div
            className={`${genericHamburgerLine} ${
              open
                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              open ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              open
                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </button>
      );
}


