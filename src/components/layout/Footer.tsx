import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full bg-primary text-white py-12">
            <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-8 md:grid-cols-4">
                <div className="md:col-span-2">
                    <Link href="/" className="font-serif text-2xl font-bold text-white">
                        Elis Academy
                    </Link>
                    <p className="mt-4 text-gray-300 max-w-xs text-sm leading-relaxed">
                        Empowering students through excellence in academics and athletics.
                        Building the next generation of leaders on and off the field.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>
                            <Link href="/about" className="hover:text-white transition-colors">
                                About Elis
                            </Link>
                        </li>
                        <li>
                            <Link href="/programs" className="hover:text-white transition-colors">
                                Programs
                            </Link>
                        </li>
                        <li>
                            <Link href="/admissions" className="hover:text-white transition-colors">
                                Admissions
                            </Link>
                        </li>
                        <li>
                            <Link href="/volunteer" className="hover:text-white transition-colors">
                                Volunteer
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-white transition-colors">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4 text-white">Contact Us</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>123 Academy Lane</li>
                        <li>Toronto, ON</li>
                        <li>
                            <a href="mailto:info@elisacademy.com" className="hover:text-white transition-colors">
                                info@elisacademy.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Elis Academy. All rights reserved.
            </div>
        </footer>
    );
}
