"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Elis", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Admissions", href: "/admissions" },
    { name: "Volunteer", href: "/volunteer" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center space-x-2">
                    {/* Logo / Brand Name */}
                    <span className="font-serif text-2xl font-bold text-primary tracking-tight">
                        Elis Academy
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex md:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-accent",
                                pathname === link.href ? "text-accent font-semibold" : "text-primary"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="flex items-center justify-center rounded-md p-2 text-primary md:hidden hover:bg-gray-100"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="sr-only">Toggle menu</span>
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-b border-gray-100 bg-white md:hidden"
                    >
                        <nav className="flex flex-col space-y-4 p-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-base font-medium transition-colors hover:text-accent",
                                        pathname === link.href ? "text-accent font-semibold" : "text-primary"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
