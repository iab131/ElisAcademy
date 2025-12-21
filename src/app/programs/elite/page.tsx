import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function EliteProgramPage() {
    return (
        <div className="w-full">
            <div className="bg-primary py-24 text-center text-white">
                <h1 className="text-5xl font-serif font-bold">Elite Program</h1>
                <p className="mt-4 text-xl text-gray-200">The Premier Pathway to Professional Sports</p>
            </div>

            <section className="py-20 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-primary mb-6">Program Overview</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            The Elite Program at Elis Academy is designed for the serious student-athlete.
                            It combines professional-grade athletic training with a flexible, high-standard academic curriculum.
                        </p>
                        <ul className="space-y-4">
                            {["Daily Professional Training", "Strength & Conditioning", "Academic Tutoring & Support", "Competition Analysis"].map((item) => (
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
                            alt="Elite Program"
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
                                    <td className="p-4 border">2:45 PM - 3:30 PM</td>
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
                                    <td className="p-4 border">2:45 PM - 3:30 PM</td>
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
