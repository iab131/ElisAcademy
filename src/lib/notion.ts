import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    date: string;
    coverImage?: string;
    description?: string;
    content?: string; // Markdown content
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
    if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
        console.warn("Notion API Key or Database ID missing. Returning mock data.");
        return [
            {
                id: "1",
                title: "Elis Academy Wins Regional Championship",
                slug: "elis-academy-wins-championship",
                date: "2024-10-15",
                coverImage: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070",
                description: "Our varsity team takes home the regional trophy after a stunning season performance against top competitors."
            },
            {
                id: "2",
                title: "New Academic Science Wing Opens",
                slug: "new-academic-facility",
                date: "2024-09-01",
                coverImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070",
                description: "State-of-the-art classrooms and biology labs are now open for all senior students, enhancing our STEM curriculum."
            },
            {
                id: "3",
                title: "Alumni Spotlight: Sarah Johnson",
                slug: "alumni-spotlight-sarah-johnson",
                date: "2024-08-20",
                coverImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069",
                description: "Sarah shares her journey from Elis Academy to NCAA Division 1 Soccer and how the academy prepared her for success."
            }
        ];
    }

    const databaseId = process.env.NOTION_DATABASE_ID;
    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: "Published",
            checkbox: {
                equals: true,
            },
        },
        sorts: [
            {
                property: "Date",
                direction: "descending",
            },
        ],
    });

    return response.results.map((page: any) => {
        const properties = page.properties;
        return {
            id: page.id,
            title: properties.Title?.title[0]?.plain_text || "Untitled",
            slug: properties.Slug?.rich_text[0]?.plain_text || page.id,
            date: properties.Date?.date?.start || new Date().toISOString().split('T')[0],
            coverImage: page.cover?.external?.url || page.cover?.file?.url || null,
            description: properties.Description?.rich_text[0]?.plain_text || "",
        };
    });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
        // Return mock post
        return {
            id: "1",
            title: "Mock Post: Elis Academy Wins Championship",
            slug: slug,
            date: "2024-10-15",
            coverImage: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070",
            description: "Mock description.",
            content: "## Championship Victory\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n- Point 1\n- Point 2\n\nWe are so proud of our team!"
        };
    }

    const databaseId = process.env.NOTION_DATABASE_ID;
    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            and: [
                {
                    property: "Published",
                    checkbox: { equals: true }
                },
                {
                    property: "Slug",
                    rich_text: { equals: slug }
                }
            ]
        },
    });

    if (!response.results.length) {
        return null;
    }

    const page = response.results[0];
    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdblocks);

    const properties = (page as any).properties;

    return {
        id: page.id,
        title: properties.Title?.title[0]?.plain_text || "Untitled",
        slug: properties.Slug?.rich_text[0]?.plain_text || page.id,
        date: properties.Date?.date?.start || new Date().toISOString().split('T')[0],
        coverImage: (page as any).cover?.external?.url || (page as any).cover?.file?.url || null,
        description: properties.Description?.rich_text[0]?.plain_text || "",
        content: mdString.parent
    };
}
