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
        return [];
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

        // Helper to extract URL from various property types
        const getUrlFromProp = (prop: any) => {
            if (!prop) return null;
            if (prop.type === 'url') return prop.url;
            if (prop.type === 'files' && prop.files?.length > 0) {
                return prop.files[0].file?.url || prop.files[0].external?.url;
            }
            // Also support rich text if they just pasted a link as text
            if (prop.type === 'rich_text' && prop.rich_text?.length > 0) {
                return prop.rich_text[0].plain_text;
            }
            return null;
        };

        // Try to find a custom property for the cover image
        // Checking likely capitalizations based on user request "title is coverimage"
        const customCoverUrl = getUrlFromProp(properties.coverimage) ||
            getUrlFromProp(properties.CoverImage) ||
            getUrlFromProp(properties["Cover Image"]) ||
            getUrlFromProp(properties["cover image"]);

        const pageCoverUrl = page.cover?.external?.url || page.cover?.file?.url;

        return {
            id: page.id,
            title: properties.Title?.title[0]?.plain_text || "Untitled",
            slug: properties.Slug?.rich_text[0]?.plain_text || page.id,
            date: properties.Date?.date?.start || new Date().toISOString().split('T')[0],
            coverImage: customCoverUrl || pageCoverUrl || null,
            description: properties.Description?.rich_text[0]?.plain_text || "",
            content: properties.Content?.rich_text[0]?.plain_text || "",
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

    // Helper to extract URL from various property types (re-defined here for scoping, same as above)
    const getUrlFromProp = (prop: any) => {
        if (!prop) return null;
        if (prop.type === 'url') return prop.url;
        if (prop.type === 'files' && prop.files?.length > 0) {
            return prop.files[0].file?.url || prop.files[0].external?.url;
        }
        // Also support rich text if they just pasted a link as text
        if (prop.type === 'rich_text' && prop.rich_text?.length > 0) {
            return prop.rich_text[0].plain_text;
        }
        return null;
    };

    const customCoverUrl = getUrlFromProp(properties.coverimage) ||
        getUrlFromProp(properties.CoverImage) ||
        getUrlFromProp(properties["Cover Image"]) ||
        getUrlFromProp(properties["cover image"]);

    const pageCoverUrl = (page as any).cover?.external?.url || (page as any).cover?.file?.url;

    // Content: Prioritize Page Body (Markdown blocks), fallback to "Content" property
    let finalContent = mdString.parent;
    if (!finalContent || finalContent.trim() === "") {
        finalContent = properties.Content?.rich_text?.[0]?.plain_text ||
            properties.content?.rich_text?.[0]?.plain_text ||
            "";
    }

    return {
        id: page.id,
        title: properties.Title?.title[0]?.plain_text || "Untitled",
        slug: properties.Slug?.rich_text[0]?.plain_text || page.id,
        date: properties.Date?.date?.start || new Date().toISOString().split('T')[0],
        coverImage: customCoverUrl || pageCoverUrl || null,
        description: properties.Description?.rich_text[0]?.plain_text || "",
        content: finalContent
    };
}

export interface HeroSlide {
    id: string;
    type: "Video" | "Image";
    videoUrl: string | null;
    imageUrl: string | null;
    title: string;
    order: number;
}

export const getHeroSlides = async (): Promise<HeroSlide[]> => {
    // It's cleaner to use a separate database for the unique schema of Hero slides
    const databaseId = process.env.NOTION_VIDEO_DATABASE_ID;

    if (!databaseId) {
        console.warn("NOTION_VIDEO_DATABASE_ID is not defined. Returning mock slides.");
        return [
            {
                id: 'mock-1',
                type: 'Video',
                videoUrl: 'https://vimeo.com/1073355184/0840bdbe46', // Fallback to the user provided one
                imageUrl: null,
                title: 'Welcome to Elis Academy',
                order: 1
            }
        ];
    }

    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: "Published",
                checkbox: {
                    equals: true,
                },
            },
            // Removed sort by "Order" to prevent crashes if the property is missing.
            // sorts: [
            //     {
            //         property: "Order",
            //         direction: "ascending",
            //     },
            // ],
        });

        const slides: HeroSlide[] = response.results.map((page: any) => {
            const props = page.properties;

            // Debugging: Log available property names to console
            // console.log(`[HeroSlide Debug] Page ID: ${page.id}`);
            // console.log(`[HeroSlide Debug] Available Properties:`, Object.keys(props));

            // Fallbacks for missing properties
            const type = props.Type?.select?.name || "Image";

            // Helper to safely extract URL from Notion properties (supports URL and Files & Media)
            const getUrlFromProp = (prop: any) => {
                if (!prop) return null;
                if (prop.type === 'url') return prop.url;
                if (prop.type === 'files' && prop.files?.length > 0) {
                    return prop.files[0].file?.url || prop.files[0].external?.url;
                }
                return null;
            };

            // Get video/media URL from the "VideoURL" property (or whatever user named it)
            // This now supports both raw URLs and uploaded Files
            let videoUrl = getUrlFromProp(props.VideoURL);

            // Get Image URL: 
            // 1. Check for a "CoverImage" property (Files & Media) as requested by user
            // We check multiple common casing variations
            const customCoverUrl = getUrlFromProp(props.CoverImage) ||
                getUrlFromProp(props["Cover Image"]) ||
                getUrlFromProp(props.coverimage) ||
                getUrlFromProp(props.Image); // Also check generic "Image"

            let imageUrl = customCoverUrl || page.cover?.external?.url || page.cover?.file?.url || null;

            if (!imageUrl && type === "Image") {
                imageUrl = videoUrl;
            }

            const title = props.Name?.title?.[0]?.plain_text || props.Title?.title?.[0]?.plain_text || "Untitled";

            return {
                id: page.id,
                type: type as "Video" | "Image",
                videoUrl: type === "Video" ? videoUrl : null,
                imageUrl: imageUrl,
                title,
                order: props.Order?.number || 0,
            };
        });

        return slides;
    } catch (error) {
        console.error("Failed to fetch hero slides from Notion:", error);
        return [];
    }
};
