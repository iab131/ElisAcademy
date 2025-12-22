import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, Medal, Trophy } from "lucide-react";
import { getCoaches } from "@/lib/notion";
import Image from "next/image";

export const revalidate = 300;

export default async function AboutPage() {
    const coaches = await getCoaches();
    const features = [
        { title: "Academic Excellence", icon: GraduationCap, desc: "Providing a rigorous curriculum that meets international standards, ensuring students are prepared for top-tier universities." },
        { title: "Elite Coaching", icon: Medal, desc: "Training delivered by former professional athletes and certified coaches dedicated to player development." },
        { title: "Character Development", icon: Users, desc: "Fostering leadership, discipline, and teamwork skills that extend far beyond the playing field." },
        { title: "Proven Pathways", icon: Trophy, desc: "A track record of successful placements in NCAA Division I universities and professional academies." },
    ];

    return (
        <div className="w-full">
            {/* Header */}
            <div className="bg-primary py-24 text-center text-white">
                <h1 className="text-5xl font-serif font-bold animate-fade-in-up">About Elis Academy</h1>
                <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">Building Champions for Life through Education and Sport</p>
            </div>

            {/* Intro */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <span className="text-accent font-bold tracking-wider uppercase text-sm">Our Philosophy</span>
                    <h2 className="text-3xl font-serif font-bold text-primary mt-2 mb-6">A Mission of Excellence</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Elis Academy was established with a singular vision: to create an environment where student-athletes
                        do not have to compromise between their education and their sport. We provide a holistic approach
                        that integrates high-performance athletic training with top-tier academic support, empowering
                        young individuals to achieve their full potential.
                    </p>
                </div>
            </section>

            {/* 4 Boxes */}
            <section className="py-20 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((f, i) => (
                        <Card key={i} className="text-center border-none shadow-md hover:shadow-xl transition-all duration-300">
                            <CardHeader className="flex flex-col items-center pt-8">
                                <div className="p-4 bg-accent/10 rounded-full mb-4">
                                    <f.icon className="h-8 w-8 text-accent" />
                                </div>
                                <CardTitle className="text-xl">{f.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Meet the Team */}
            <section className="py-24 bg-white">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-primary">Meet Our Team</h2>
                        <p className="mt-4 text-gray-600">The dedicated professionals guiding our students.</p>
                    </div>

                    <div className="mb-20">
                        <h3 className="text-2xl font-bold text-primary border-l-4 border-accent pl-4 mb-8">Coaching Staff</h3>
                        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

                            {coaches.length > 0 ? (
                                coaches.map((coach) => (
                                    <div key={coach.id} className="group">
                                        <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-4 overflow-hidden relative shadow-sm group-hover:shadow-md transition-all">
                                            {coach.image ? (
                                                <Image
                                                    src={coach.image}
                                                    alt={coach.name}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-serif bg-gray-200">
                                                    No Image
                                                </div>
                                            )}
                                        </div>
                                        <h4 className="font-bold text-lg text-primary">{coach.name}</h4>
                                        <p className="text-accent text-sm font-medium">{coach.role}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No coaches found.</p>
                            )}
                        </div>
                    </div>

                    {/* <div>
                        <h3 className="text-2xl font-bold text-primary border-l-4 border-accent pl-4 mb-8">Academic Faculty</h3>
                        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="group">
                                    <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-4 overflow-hidden relative shadow-sm group-hover:shadow-md transition-all">
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-serif">Teacher {i}</div>
                                    </div>
                                    <h4 className="font-bold text-lg text-primary">Coming Soon</h4>
                                    <p className="text-accent text-sm font-medium">Instructor</p>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    )
}
