import Link from "next/link";
import { getPublishedPosts } from "@/lib/notion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export async function NewsPreview() {
    const posts = await getPublishedPosts();
    const latestPosts = posts.slice(0, 3);

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-accent font-bold tracking-wider uppercase text-sm">Latest Updates</span>
                        <h2 className="text-3xl font-serif font-bold text-primary mt-2">News & Events</h2>
                    </div>
                    <Button variant="link" asChild className="hidden md:inline-flex">
                        <Link href="/news">View All News &rarr;</Link>
                    </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {latestPosts.map((post) => (
                        <Link key={post.id} href={`/news/${post.slug}`} className="group">
                            <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all overflow-hidden bg-gray-50 flex flex-col">
                                <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                                    {/* Image */}
                                    {post.coverImage ? (
                                                    <Image
                                                        src={post.coverImage}
                                                        alt={post.title}
                                                        fill
                                                        className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
                                                    />
                                                ) : (
                                                    // Fallback placeholder if no image
                                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                                        <span className="text-white text-2xl font-serif">Elis Academy</span>
                                                    </div>
                                                )}
                                </div>
                                <CardHeader className="pb-2">
                                    <div className="text-sm text-accent font-semibold mb-2">{post.date}</div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2 leading-tight">{post.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">{post.description}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
                <div className="mt-8 text-center md:hidden">
                    <Button asChild variant="outline">
                        <Link href="/news">View All News</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
