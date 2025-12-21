import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Users, Briefcase } from "lucide-react";

export default function VolunteerPage() {
    const roles = [
        {
            title: "Event Volunteer",
            icon: Calendar,
            description: "Assist with game days, tournaments, and community events. Perfect for those who love the energy of competition."
        },
        {
            title: "Student Mentorship",
            icon: Users,
            description: "Provide guidance and support to younger student-athletes. Share your experience and help shape the next generation."
        },
        {
            title: "Administrative Support",
            icon: Briefcase,
            description: "Help with behind-the-scenes operations, organization, and outreach. Gain valuable experience in sports management."
        }
    ];

    return (
        <div className="w-full">
            <div className="bg-primary py-24 text-center text-white">
                <h1 className="text-5xl font-serif font-bold">Volunteer</h1>
                <p className="mt-4 text-xl text-gray-200">Give Back to the Community</p>
            </div>

            <section className="py-20 container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-6">Join Our Team</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We are always looking for passionate individuals to support our mission.
                        Whether you have a few hours a week or can commit to specific events, your contribution makes a difference.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {roles.map((role) => (
                        <Link key={role.title} href="/contact?subject=Volunteer" className="block group">
                            <Card className="h-full border-2 border-transparent hover:border-accent transition-all cursor-pointer shadow-md hover:shadow-xl group-hover:-translate-y-1">
                                <CardHeader className="text-center pt-8">
                                    <div className="mx-auto p-4 bg-primary/5 rounded-full mb-4 group-hover:bg-primary/10 transition-colors">
                                        <role.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle className="group-hover:text-accent transition-colors">{role.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-gray-600 mb-6">{role.description}</p>
                                    <span className="inline-flex items-center text-sm font-bold text-primary group-hover:text-accent">
                                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                                    </span>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
