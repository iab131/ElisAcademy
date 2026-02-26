import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, Medal, Trophy } from "lucide-react";
import { getCoaches } from "@/lib/notion";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Elis Academy's mission, philosophy, and coaching staff. Building champions for life through elite education and sport in Ontario, Canada.",
    openGraph: {
        title: "About Elis Academy",
        description: "Building Champions for Life through Education and Sport. Meet our world-class coaching staff and learn about our mission.",
    },
};

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const revalidate = 300;

export default async function AboutPage() {
    const coaches = await getCoaches();
    const features = [
        { title: "Academic Excellence", icon: GraduationCap, desc: "Our teachers are dedicated and highly experienced in providing a rigorous curriculum that meets international standards, ensuring students are prepared for ivy league universities." },
        { title: "Elite Coaching", icon: Medal, desc: "All our athletic trainers are former high level athletes with years of experience developing athletes that dominate their sports." },
        { title: "Character Development", icon: Users, desc: "Elis Academy also fosters development in areas such as leadership, discipline, teamwork, and self-advocacy." },
        { title: "Proven Pathways", icon: Trophy, desc: "We have a track record of successfully placing student-athletes in NCAA Division I universities." },
    ];

    return (
        <div className="w-full">
            <Breadcrumbs items={[{ name: "About Us" }]} />
            {/* Header */}
            <div className="bg-primary py-24 text-center text-white">
                <h1 className="text-5xl font-serif font-bold animate-fade-in-up">About Elis Academy</h1>
                <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">Building Champions for Life through Elite Hockey Training &amp; Education in Aurora, Ontario</p>
            </div>

            {/* Intro */}
            <section className="py-20 bg-white" aria-label="Our philosophy and mission">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <span className="text-accent font-bold tracking-wider uppercase text-sm">Our Philosophy</span>
                    <h2 className="text-3xl font-serif font-bold text-primary mt-2 mb-6">A Mission of Excellence</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Elis Academy was established in Aurora, Ontario with a singular vision: to create an elite training environment where student-athletes do not have to compromise between their education and their sport. We provide a holistic approach that integrates professional-level hockey training with Ontario secondary school academics, empowering young athletes across the Greater Toronto Area to achieve their full potential and earn NCAA Division I scholarships.
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
                        <h2 className="text-4xl font-serif font-bold text-primary">Meet Our Coaches</h2>
                        <p className="mt-4 text-gray-600">Our coaches have decades of experience playing and coaching hockey at the NHL, AHL, OHL, and NCAA levels, bringing elite-level expertise to every session at our Aurora training facility.</p>
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
                                                    alt={`${coach.name} — ${coach.role} at Elis Academy, elite hockey coaching in Aurora, Ontario`}
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
