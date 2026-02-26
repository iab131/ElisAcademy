import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Elite Program",
    description: "Elis Academy's flagship full-time program for student-athletes featuring daily on-ice training, strength & conditioning, academic tutoring, and NCAA preparation.",
    openGraph: {
        title: "Elite Program | Elis Academy",
        description: "The Premier Pathway to Professional Sports — daily training, personalized coaching, and academic tutoring.",
    },
};

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export default function EliteProgramPage() {
    return (
        <div className="w-full">
            <Breadcrumbs items={[
                { name: "Programs", href: "/programs" },
                { name: "Elite Hockey Training Program" }
            ]} />
            <div className="bg-primary py-24 text-center text-white">
                <h1 className="text-5xl font-serif font-bold">Elite Hockey Training Program</h1>
                <p className="mt-4 text-xl text-gray-200">Full-Time Student-Athlete Development in Aurora, Ontario — Your Pathway to NCAA &amp; Professional Hockey</p>
            </div>

            <section className="py-20 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-primary mb-6">Program Overview</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            The Elite Program at Elis Academy in Aurora, Ontario is designed for serious student-athletes looking to earn hockey scholarships at top NCAA Division I universities. Our full-time program combines daily professional-level on-ice and off-ice training with Ontario secondary school academics, all under one roof.
                        </p>
                        <ul className="space-y-4">
                            {["Daily on-ice hockey training with former NHL/AHL coaches", "Off-ice strength & conditioning programming", "Ontario secondary school academic tutoring & credit courses", "NCAA eligibility guidance counseling", "Video analysis and game strategy sessions"].map((item) => (
                                <li key={item} className="flex items-center text-gray-700">
                                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative overflow-hidden bg-gray-200 rounded-xl h-[400px] flex items-center justify-center text-gray-500">
                        <Image
                            src="/pics/ice.png"
                            alt="Elis Academy ice hockey training facility in Aurora, Ontario — elite on-ice training for student-athletes"
                            fill
                            className="object-cover" />
                    </div>
                </div>

                {/* Schedule */}
                <div className="mb-20">
                    <h2 className="text-3xl font-serif font-bold text-center text-primary mb-12">Weekly Schedule</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 text-primary">
                                    <th className="p-4 border">Day</th>
                                    <th className="p-4 border">Time</th>
                                    <th className="p-4 border">Activity</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600">
                                {/* Monday */}
                                <tr>
                                    <td className="p-4 border font-bold text-primary bg-blue-50/50" rowSpan={2}>Monday</td>
                                    <td className="p-4 border">3:00 PM - 4:00 PM</td>
                                    <td className="p-4 border font-semibold">Ice Time</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border">4:00 PM - 5:30 PM</td>
                                    <td className="p-4 border font-semibold">Homework Tutoring</td>
                                </tr>

                                {/* Tuesday */}
                                <tr>
                                    <td className="p-4 border font-bold text-primary bg-blue-50/50" rowSpan={2}>Tuesday</td>
                                    <td className="p-4 border">2:30 PM - 3:30 PM</td>
                                    <td className="p-4 border font-semibold">Strength Training</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border">3:30 PM - 5:00 PM</td>
                                    <td className="p-4 border font-semibold">Homework Tutoring</td>
                                </tr>

                                {/* Wednesday */}
                                <tr>
                                    <td className="p-4 border font-bold text-primary bg-blue-50/50" rowSpan={2}>Wednesday</td>
                                    <td className="p-4 border">3:00 PM - 4:00 PM</td>
                                    <td className="p-4 border font-semibold">Ice Time</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border">4:00 PM - 5:30 PM</td>
                                    <td className="p-4 border font-semibold">Homework Tutoring</td>
                                </tr>

                                {/* Thursday */}
                                <tr>
                                    <td className="p-4 border font-bold text-primary bg-blue-50/50" rowSpan={2}>Thursday</td>
                                    <td className="p-4 border">2:30 PM - 3:30 PM</td>
                                    <td className="p-4 border font-semibold">Strength Training</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border">3:30 PM - 5:00 PM</td>
                                    <td className="p-4 border font-semibold">Homework Tutoring</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* NCAA Info Teaser */}
                <div className="bg-gray-50 p-10 rounded-2xl text-center">
                    <h2 className="text-2xl font-serif font-bold text-primary mb-4">Aiming for the Next Level?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Our program is specifically structured to meet NCAA eligibility requirements.
                        Learn more about the application process and requirements.
                    </p>
                    <Button asChild size="lg" variant="secondary">
                        <Link href="/programs/ncaa">View Application info</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
