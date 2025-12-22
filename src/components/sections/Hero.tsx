import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative flex w-full overflow-hidden bg-primary text-white ">

            {/* 📝 CONTENT SECTION */}
            <div className="relative z-20 mx-[20vw] w-full max-w-7xl px-4 py-20 md:px-6">
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
                        <Button size="lg" className="bg-accent hover:bg-accent/80 text-white" asChild>
                            <Link href="/programs">View Programs</Link>
                        </Button>

                        <Button size="lg" variant="outline" className="text-primary hover:bg-white/80 hover:text-primary" asChild>
                            <Link href="/admissions">
                                Admissions <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>


            <div className="relative w-screen  overflow-hidden">
                <iframe
                    src="https://player.vimeo.com/video/1073355184?h=0840bdbe46&background=1&autoplay=1&loop=1&byline=0&title=0"
                    className="absolute top-1/2   right-0 min-w-full min-h-full w-auto h-auto -translate-y-1/2"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                />
            </div>

        </section>

    );
}
