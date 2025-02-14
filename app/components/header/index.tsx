'use client'

import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav-item"

const NAV_ITENS = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Projetos',
        href: '/projetos'
    },
]

export const Header = () => {
    return (
        //NAV BAR ONDE POSSO MUDAR A COR FUTURAMENTE
    <header className="absolute top-0 w-full z-10 h24 flex items-center justify-center">
        <div className = "container flex items-center justify-between py-4">
            <Link href = "/">
                <Image    
                width = { 58 }
                height = { 58 }
                src="/images/Logo.png"
                alt="logo Erick"
              />
            </Link>
            <nav className="flex items-center gap-4 sm:gap-10">
                {NAV_ITENS.map(item => (
                    <NavItem {...item} key={item.label} />
                ))}
            </nav>
        </div>
    </header>
    )
}