import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { getHeroSlides, getStudents, getAlumni } from "@/lib/notion";
import { NewsPreview } from "@/components/sections/NewsPreview";
import { Button } from "@/components/ui/button";

interface Owner {
  name: string;
  role: string;
  bio: string;
  image: string;
}



const OWNERS: Owner[] = [
  {
    name: "Justin Auger", role: "Hockey Operations", bio: "Justin was drafted to the OHL's Guelph Storm in 2010. After three years with the team, he was drafted and signed by the L.A. Kings of the NHL in 2013. Justin spent the next six seasons playing professional hockey in North America. In 2015, he won the Calder Cup as a member of the Manchester Monarchs of the AHL.",
    image: "/pics/owner/owner1.webp"
  },
  {
    name: "Ian Sands", role: "Principal", bio: "After graduation from university, Ian immediately began writing and editing English. He soon moved into teaching English at public schools, private schools, and tutoring centres. Then, he transitioned into a principal role at a Richmond Hill private school overseeing the administration of Ontario Secondary School credits and diplomas.",
    image: "/pics/owner/owner2.webp"
  },
  {
    name: "Tom Lawson", role: "Athletics Director", bio: "Tom attended Bowling Green State university on a full athletic scholarship. He then played 10 years of professional hockey in North America and Europe including for the Colorado Avalanche organization of the NHL. After retiring from professional hockey, Tom began his coaching and training career preparing young people for the NCAA and OHL.",
    image: "/pics/owner/owner3.webp"
  },
];



export const revalidate = 300;

export default async function Home() {
  const slides = await getHeroSlides();
  const students = await getStudents();
  const alumni = await getAlumni();
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <HeroSlider slides={slides} />

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
                style={{ backgroundImage: "url('data:image/jpeg;base64,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')" }}
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
            <h2 className="text-4xl font-serif font-bold text-primary mt-2">Meet Our Owners</h2>
            <p className="mt-4 text-gray-600">
              Guiding Elis Academy with decades of combined experience in continuous athletic development and educational leadership.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {OWNERS.map((owner, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-72 h-72 rounded-full bg-white mb-6 overflow-hidden relative shadow-md border-4 border-white group-hover:border-accent transition-colors">
                  <Image
                    src={owner.image}
                    alt={owner.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold text-primary">{owner.name}</h3>
                <p className="text-xl text-accent font-medium mb-3">{owner.role}</p>
                <p className="text-md text-gray-600 max-w-xs px-4">
                  {owner.bio}
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
            {students.map((student, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[3/4] shadow-sm hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-gray-200">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h4 className="text-white font-bold text-lg">{student.name}</h4>
                  <p className="text-gray-200 text-sm">{student.program} • '{student.year}</p>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {alumni.map((alumni, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[3/4] shadow-sm hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-gray-200">
                  <Image
                    src={alumni.image}
                    alt={alumni.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <h4 className="text-white font-bold text-lg">{alumni.name}</h4>
                  <p className="text-gray-200 text-sm">{alumni.university} • '{alumni.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
