import { MetadataRoute } from 'next'
import { getPublishedPosts } from '@/lib/notion'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://elisacademy.ca'

    // Get all posts for dynamic sitemap
    const posts = await getPublishedPosts();
    const newsUrls = posts.map((post) => ({
        url: `${baseUrl}/news/${post.slug}`,
        lastModified: new Date(post.date),
    }));

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/about`, lastModified: new Date() },
        { url: `${baseUrl}/programs`, lastModified: new Date() },
        { url: `${baseUrl}/programs/elite`, lastModified: new Date() },
        { url: `${baseUrl}/programs/ncaa`, lastModified: new Date() }, // Fixed: was applications
        { url: `${baseUrl}/admissions`, lastModified: new Date() },
        { url: `${baseUrl}/volunteer`, lastModified: new Date() },
        { url: `${baseUrl}/contact`, lastModified: new Date() },
        { url: `${baseUrl}/news`, lastModified: new Date() },
        ...newsUrls,
    ]
}
