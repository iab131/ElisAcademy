import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/layout/Navbar";
import { FooterWrapper } from "@/components/layout/FooterWrapper";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://elisacademy.ca'),
  title: {
    default: "Elis Academy",
    template: "%s | Elis Academy"
  },
  description: "Elis Academy provides an elite environment where students pursue academic goals while developing athletic potential to the highest level.",
  keywords: ["Elis Academy", "Elite Sports", "Private School", "Hockey Academy", "NCAA Scholarship", "Student Athlete", "Richmond Hill", "Ontario Education"],
  authors: [{ name: "Elis Academy" }],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://elisacademy.com',
    title: "Elis Academy | Premier Sports & Education",
    description: "Where Academics and Athletics Excel. Join our elite program for student-athletes.",
    siteName: "Elis Academy",
    images: [
      {
        url: '/logo/logo-white.png', // Assuming logo exists, or use a general hero image
        width: 1200,
        height: 630,
        alt: 'Elis Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Elis Academy",
    description: "Preparing student-athletes for the NCAA and professional levels.",
    images: ['/logo/logo-white.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${playfair.variable} antialiased bg-white text-primary font-sans flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <FooterWrapper />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
