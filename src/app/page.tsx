import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { NewsPreview } from "@/components/sections/NewsPreview";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />

      {/* Welcome Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <span className="text-accent font-bold tracking-wider uppercase text-sm">About Us</span>
              <h2 className="text-4xl font-serif font-bold text-primary">Welcome to Elis Academy</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Elis Academy, we believe in the power of education and athletics to transform lives.
                Our mission is to provide an elite environment where students can pursue their academic goals
                while developing their athletic potential to the highest level.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded by a team of dedicated professionals, we are committed to fostering a culture of excellence,
                discipline, and community. We invite you to join our family and experience the difference.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white mt-4" asChild>
                <Link href="/about">Read More About Us</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              {/* Placeholder for Welcome Image - Replace with real image */}
              <div
                className="absolute inset-0 bg-gray-200 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Preview */}
      <NewsPreview />

      {/* THREE OWNERS Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-accent font-bold tracking-wider uppercase text-sm">Leadership</span>
            <h2 className="text-3xl font-serif font-bold text-primary mt-2">Meet Our Owners</h2>
            <p className="mt-4 text-gray-600">
              Guiding Elis Academy with decades of combined experience in continuous athletic development and educational leadership.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-56 h-56 rounded-full bg-white mb-6 overflow-hidden relative shadow-md border-4 border-white group-hover:border-accent transition-colors">
                  {/* Placeholder Owner Image */}
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                    <span className="text-4xl">👤</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary">Owner Name {i}</h3>
                <p className="text-accent font-medium mb-3">Co-Founder & Director</p>
                <p className="text-sm text-gray-600 max-w-xs px-4">
                  Brief bio regarding their expertise and role in the academy.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENTS Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-accent font-bold tracking-wider uppercase text-sm">Community</span>
              <h2 className="text-3xl font-serif font-bold text-primary mt-2">Our Students</h2>
            </div>
            <Button variant="link" asChild className="hidden md:inline-flex">
              <Link href="/admissions">Join Our Team &rarr;</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[3/4] shadow-sm hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                  {/* Student Placeholder */}
                  Student {i}
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h4 className="text-white font-bold text-lg">Student Name</h4>
                  <p className="text-gray-200 text-sm">Soccer Program • '24</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALUMNI Section */}
      <section className="py-24 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Our Alumni Network</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
            Elis Academy graduates have gone on to compete at NCAA Division I universities and professional levels across the globe.
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {/* University Logos Placeholder */}
            {['University A', 'College B', 'NCAA D1', 'Tech Institute'].map((uni) => (
              <div key={uni} className="text-xl font-serif font-bold border border-white/20 px-6 py-3 rounded-lg">
                {uni}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
