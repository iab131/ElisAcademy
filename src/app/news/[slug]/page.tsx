import { getPostBySlug } from "@/lib/notion";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="w-full bg-white">
            {/* Header Image */}
            {post.coverImage ? (
                <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden group">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        priority
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-8 container mx-auto text-white">
                        <div className="max-w-4xl mx-auto">
                            <Link href="/news" className="inline-flex items-center text-gray-200 hover:text-white mb-6 transition-colors font-medium">
                                <ArrowLeft className="h-4 w-4 mr-2" /> Back to News
                            </Link>
                            <div className="text-accent font-bold mb-3 tracking-wide uppercase text-sm">{post.date}</div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight drop-shadow-lg pb-12">{post.title}</h1>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-primary py-24 text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <Link href="/news" className="inline-flex items-center text-gray-200 hover:text-white mb-6 transition-colors">
                                <ArrowLeft className="h-4 w-4 mr-2" /> Back to News
                            </Link>
                            <div className="text-accent font-bold mb-3 tracking-wide uppercase text-sm">{post.date}</div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">{post.title}</h1>
                        </div>
                    </div>
                </div>
            )}

            <div className="container mx-auto py-16 max-w-3xl">
                <article className="prose lg:prose-2xl md:prose-xl prose-lg  max-w-none prose-headings:font-serif prose-headings:text-primary prose-a:text-accent prose-img:rounded-xl text-gray-800">
                    <ReactMarkdown>{post.content || ""}</ReactMarkdown>
                </article>
            </div>
        </div>
    )
}
