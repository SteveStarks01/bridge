"use client";

import { Building2, Users2, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";

const NAV_ITEMS = [
    {
        name: "Why Bridge",
        href: "#features",
        icon: Building2
    },
    {
        name: "Roles",
        href: "#roles",
        icon: Users2
    },
    {
        name: "How It Works",
        href: "#how-it-works",
        icon: Briefcase
    }
];

const Navbar = () => {
    return (
        <header className="sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50 border-b border-border/50">
            <Wrapper className="h-full">
                <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
                    <div className="flex-1 flex items-center justify-start">
                        <Link href="/" className="flex items-center gap-2 group">
                            <Image
                                src="/images/logos/bridge-logo.png"
                                alt="Bridge Logo"
                                width={40}
                                height={40}
                                className="rounded-lg"
                            />
                            <span className="text-xl font-bold hidden lg:block text-white font-montserrat uppercase">
                                BRIDGE.
                            </span>
                        </Link>
                    </div>

                    <nav className="hidden lg:flex items-center justify-center flex-1">
                        <ul className="flex items-center gap-8">
                            {NAV_ITEMS.map((item) => (
                                <li key={item.href} className="text-sm font-medium link group">
                                    <Link href={item.href} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                                        <item.icon className="size-4" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex-1 flex items-center justify-end gap-4">
                        <Link href="#start-hiring" className="hidden lg:block">
                            <Button className="bg-gradient-to-r from-[#106861] to-[#0e8177] hover:from-[#0e5c56] hover:to-[#0c726a]">
                                Start Hiring
                            </Button>
                        </Link>
                        <Link href="#schedule-call" className="hidden lg:block">
                            <Button variant="outline" className="border-[#106861] text-[#106861] hover:bg-[#106861] hover:text-white">
                                Schedule a Call
                            </Button>
                        </Link>
                        <MobileMenu items={NAV_ITEMS} />
                    </div>
                </div>
            </Wrapper>
        </header>
    );
};

export default Navbar;
