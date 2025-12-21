import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="w-full">
            <div className="bg-primary py-24 text-center text-white">
                <h1 className="text-5xl font-serif font-bold">Contact Us</h1>
                <p className="mt-4 text-xl text-gray-200">Get in Touch</p>
            </div>

            <section className="py-20 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-primary mb-8">Reach Out</h2>
                        <p className="text-gray-600 mb-10 leading-relaxed">
                            Have questions about admissions, our programs, or upcoming events?
                            Fill out the form or contact us directly using the information below. We look forward to hearing from you.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Visit Us</h4>
                                    <p className="text-gray-600">123 Academy Lane<br />Toronto, ON, M1A 2B3</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Email Us</h4>
                                    <p className="text-gray-600 mb-1">General: info@elisacademy.com</p>
                                    <p className="text-gray-600">Admissions: admissions@elisacademy.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Call Us</h4>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                    <p className="text-sm text-gray-500 mt-1">Mon-Fri: 9:00 AM - 5:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="first-name">First name</Label>
                                    <Input id="first-name" placeholder="Enter first name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="last-name">Last name</Label>
                                    <Input id="last-name" placeholder="Enter last name" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="you@example.com" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input id="subject" placeholder="Admissions Inquiry" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
                            </div>

                            <Button type="submit" size="lg" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
