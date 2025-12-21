import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative flex h-[85vh] w-full items-center overflow-hidden bg-primary text-white">
            {/* Background - Replace with Video Slider Component */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10" />
                {/* Placeholder Background Image */}
                <div
                    className="h-full w-full bg-cover bg-center opacity-60"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop')" }}
                >
                </div>
            </div>

            <div className="relative z-20 mx-auto max-w-7xl px-4 md:px-6">
                <div className="max-w-3xl animate-fade-in-up">
                    <span className="mb-4 inline-block rounded-full bg-accent/20 px-3 py-1 text-sm font-semibold text-accent backdrop-blur-sm">
                        Welcome to Elis Academy
                    </span>
                    <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                        Forging Future <span className="text-accent">Champions</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-lg text-gray-200 md:text-xl leading-relaxed">
                        We combine elite athletic training with rigorous academic preparation to develop well-rounded leaders ready for the world stage.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button size="lg" className="bg-accent hover:bg-accent/90 border-transparent text-white" asChild>
                            <Link href="/programs">
                                View Programs
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                            <Link href="/admissions">
                                Admissions <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
