import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FooterProps {
    variant?: "light" | "dark";
}

export function Footer({ variant = "light" }: FooterProps) {
    const isDark = variant === "dark";

    return (
        <footer className={cn(
            "w-full py-12 transition-colors duration-300",
            isDark ? "bg-primary text-white" : "bg-white text-primary"
        )}>
            <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-8 md:grid-cols-4">
                <div className="md:col-span-2 flex flex-col items-center justify-center -mt-4">
                    <Link href="/" className="">
                        <div className="relative h-30 w-48">
                            <Image
                                src={isDark ? "/logo/logo-white.png" : "/logo/logo-blue.png"}
                                alt="Elis Academy"
                                fill
                                className="object-contain -ml-2"
                                priority
                            />
                        </div>
                    </Link>
                    <p className={cn(
                        "mt-4 max-w-xs text-sm leading-relaxed",
                        isDark ? "text-gray-300" : "text-gray-600"
                    )}>
                        Empowering students through excellence in academics and athletics.
                        Building the next generation of leaders on and off the field.
                    </p>
                </div>

                <div>
                    <h3 className={cn("font-semibold mb-4", isDark ? "text-white" : "text-primary")}>Quick Links</h3>
                    <ul className={cn("space-y-2 text-sm", isDark ? "text-gray-300" : "text-gray-600")}>
                        <li>
                            <Link href="/about" className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-primary")}>
                                About Elis
                            </Link>
                        </li>
                        <li>
                            <Link href="/programs/elite" className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-primary")}>
                                Elite Program
                            </Link>
                        </li>
                        <li>
                            <Link href="/programs/ncaa" className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-primary")}>
                                NCAA Pathway
                            </Link>
                        </li>
                        <li>
                            <Link href="/programs/canadian" className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-primary")}>
                                Canadian University
                            </Link>
                        </li>
                        <li>
                            <Link href="/admissions" className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-primary")}>
                                Admissions
                            </Link>
                        </li>
                        <li>
                            <Link href="/volunteer" className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-primary")}>
                                Volunteer
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-primary")}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className={cn("font-semibold mb-4", isDark ? "text-white" : "text-primary")}>Contact Us</h3>
                    <ul className={cn("space-y-2 text-sm", isDark ? "text-gray-300" : "text-gray-600")}>
                        <li>135 Industrial Pkwy N <br /> Aurora, ON L4G 4C4</li>
                        <li>
                            <a href="mailto:elisacademyca@gmail.com" className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-primary")}>
                                elisacademyca@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+13658875989" className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-primary")}>
                                +1 365 887 5989
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cn(
                "mt-12 pt-8 border-t text-center text-sm",
                isDark ? "border-white/10 text-gray-400" : "border-gray-100 text-gray-500"
            )}>
                &copy; {new Date().getFullYear()} Elis Academy. All rights reserved.
            </div>
        </footer>
    );
}
