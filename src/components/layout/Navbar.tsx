"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const programs = [
    { name: "Elite Program", href: "/programs/elite" },
    { name: "NCAA Pathway", href: "/programs/ncaa" },
    { name: "Canadian University", href: "/programs/canadian" },
];

const otherLinks = [
    { name: "Home", href: "/" },
    { name: "About Elis", href: "/about" },
    // Programs is handled specially
    { name: "Admissions", href: "/admissions" },
    { name: "Volunteer", href: "/volunteer" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isProgramsOpen, setIsProgramsOpen] = useState(false);
    const pathname = usePathname();

    const isProgramsActive = pathname.startsWith("/programs");

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center space-x-2 px-4">
                    <div className="relative h-20 w-48">
                        <Image
                            src="/logo/Logo-Transparent-Blue-1.png"
                            alt="Elis Academy"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex md:gap-8 md:items-center">
                    <Link
                        href="/"
                        className={cn(
                            "text-medium font-medium transition-colors hover:text-accent",
                            pathname === "/" ? "text-accent font-semibold" : "text-primary"
                        )}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className={cn(
                            "text-medium font-medium transition-colors hover:text-accent",
                            pathname === "/about" ? "text-accent font-semibold" : "text-primary"
                        )}
                    >
                        About Elis
                    </Link>

                    {/* Programs Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsProgramsOpen(true)}
                        onMouseLeave={() => setIsProgramsOpen(false)}
                    >
                        <button
                            className={cn(
                                "flex items-center text-medium font-medium transition-colors hover:text-accent focus:outline-none",
                                isProgramsActive ? "text-accent font-semibold" : "text-primary"
                            )}
                        >
                            Programs
                            <ChevronDown className="ml-1 h-4 w-4" />
                        </button>

                        <AnimatePresence>
                            {isProgramsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-0 top-full pt-2 w-56"
                                >
                                    <div className="bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden py-1">
                                        {programs.map((prog) => (
                                            <Link
                                                key={prog.href}
                                                href={prog.href}
                                                className={cn(
                                                    "block px-4 py-2 text-medium hover:bg-gray-50 hover:text-accent transition-colors",
                                                    pathname === prog.href ? "text-accent bg-gray-50/50" : "text-gray-700"
                                                )}
                                            >
                                                {prog.name}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link
                        href="/admissions"
                        className={cn(
                            "text-medium font-medium transition-colors hover:text-accent",
                            pathname === "/admissions" ? "text-accent font-semibold" : "text-primary"
                        )}
                    >
                        Admissions
                    </Link>
                    <Link
                        href="/volunteer"
                        className={cn(
                            "text-medium font-medium transition-colors hover:text-accent",
                            pathname === "/volunteer" ? "text-accent font-semibold" : "text-primary"
                        )}
                    >
                        Volunteer
                    </Link>
                    <Link
                        href="/contact"
                        className={cn(
                            "text-medium font-medium transition-colors hover:text-accent",
                            pathname === "/contact" ? "text-accent font-semibold" : "text-primary"
                        )}
                    >
                        Contact
                    </Link>
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
                            <Link href="/" onClick={() => setIsOpen(false)} className="text-base font-medium text-primary">Home</Link>
                            <Link href="/about" onClick={() => setIsOpen(false)} className="text-base font-medium text-primary">About Elis</Link>

                            {/* Mobile Programs Section */}
                            <div className="space-y-2">
                                <div className="text-base font-semibold text-primary/80 px-2 uppercase text-xs tracking-wider">Programs</div>
                                <div className="pl-4 border-l-2 border-gray-100 flex flex-col space-y-3">
                                    {programs.map((prog) => (
                                        <Link
                                            key={prog.href}
                                            href={prog.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "text-base font-medium transition-colors hover:text-accent",
                                                pathname === prog.href ? "text-accent" : "text-primary"
                                            )}
                                        >
                                            {prog.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link href="/admissions" onClick={() => setIsOpen(false)} className="text-base font-medium text-primary">Admissions</Link>
                            <Link href="/volunteer" onClick={() => setIsOpen(false)} className="text-base font-medium text-primary">Volunteer</Link>
                            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-base font-medium text-primary">Contact</Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
