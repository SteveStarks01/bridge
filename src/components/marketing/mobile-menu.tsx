"use client";

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import type { NavItem } from '@/types';

interface MobileMenuProps {
    items: NavItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ items }) => {
    return (
        <div className="lg:hidden">
            <Button variant="ghost" size="icon">
                <Menu className="size-5" />
            </Button>
            <div className="hidden">
                <nav className="flex flex-col gap-4">
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <item.icon className="size-4" />
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default MobileMenu;
