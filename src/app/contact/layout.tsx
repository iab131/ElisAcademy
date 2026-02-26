import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Elis Academy. Visit us in Aurora, Ontario, call +1 365 887 5989, or send us a message. We're here to answer your questions about admissions and programs.",
    openGraph: {
        title: "Contact Us | Elis Academy",
        description: "Get in Touch — visit us at 135 Industrial Pkwy N, Aurora, ON or reach out online.",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
