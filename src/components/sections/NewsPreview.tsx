import Link from "next/link";
import { getPublishedPosts } from "@/lib/notion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
                                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
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
