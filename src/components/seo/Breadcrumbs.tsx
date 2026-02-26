/**
 * Generates JSON-LD BreadcrumbList structured data for SEO.
 * Used by Next.js pages to help Google understand site hierarchy.
 *
 * @example
 * <Breadcrumbs items={[
 *   { name: "Programs", href: "/programs" },
 *   { name: "Elite Program" }
 * ]} />
 */
interface BreadcrumbItem {
    name: string;
    href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
    const baseUrl = "https://elisacademy.ca";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: baseUrl,
            },
            ...items.map((item, index) => ({
                "@type": "ListItem",
                position: index + 2,
                name: item.name,
                ...(item.href ? { item: `${baseUrl}${item.href}` } : {}),
            })),
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
