import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://elisacademy.com'

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/about`, lastModified: new Date() },
        { url: `${baseUrl}/programs`, lastModified: new Date() },
        { url: `${baseUrl}/programs/elite`, lastModified: new Date() },
        { url: `${baseUrl}/programs/applications`, lastModified: new Date() },
        { url: `${baseUrl}/admissions`, lastModified: new Date() },
        { url: `${baseUrl}/volunteer`, lastModified: new Date() },
        { url: `${baseUrl}/contact`, lastModified: new Date() },
        { url: `${baseUrl}/news`, lastModified: new Date() },
    ]
}
