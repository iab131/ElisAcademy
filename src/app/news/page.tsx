import { getPublishedPosts } from "@/lib/notion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function NewsIndexPage() {
    const posts = await getPublishedPosts();

    return (
        <div className="w-full">
            <div className="bg-primary py-24 text-center text-white">
                <h1 className="text-5xl font-serif font-bold animate-fade-in-up">News & Events</h1>
                <p className="mt-4 text-xl text-gray-200">Latest Updates from Elis Academy</p>
            </div>
            <div className="container mx-auto px-4 py-20 max-w-7xl">
                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map(post => (
                        <Link key={post.id} href={`/news/${post.slug}`} className="group">
                            <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all overflow-hidden bg-gray-50 flex flex-col">
                                <div className="relative h-56 w-full overflow-hidden bg-gray-200">
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
            </div>
        </div>
    )
}
