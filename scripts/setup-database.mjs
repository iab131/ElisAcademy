import { Client } from "@notionhq/client";

const args = process.argv.slice(2);

if (args.length < 2) {
    console.error("Usage: node scripts/setup-database.mjs <NOTION_API_KEY> <PARENT_PAGE_ID>");
    process.exit(1);
}

const [auth, pageId] = args;

const notion = new Client({ auth });

async function createDatabase() {
    try {
        console.log("Creating 'News & Events' database...");
        const response = await notion.databases.create({
            parent: {
                type: "page_id",
                page_id: pageId,
            },
            title: [
                {
                    type: "text",
                    text: {
                        content: "News & Events",
                    },
                },
            ],
            properties: {
                Title: {
                    title: {},
                },
                Slug: {
                    rich_text: {},
                },
                Description: {
                    rich_text: {},
                },
                Date: {
                    date: {},
                },
                Published: {
                    checkbox: {},
                },
            },
        });

        console.log("\n✅ Database created successfully!");
        console.log("Copy these values to your .env.local file:\n");
        console.log(`NOTION_API_KEY=${auth}`);
        console.log(`NOTION_DATABASE_ID=${response.id}`);
        console.log("\nMake sure to add a Cover image to your posts in Notion!");

    } catch (error) {
        console.error("Error creating database:", error.body || error.message);
        if (error.body?.message?.includes("could not be found")) {
            console.error("Tip: Make sure you have connected the 'Elis Academy' integration to the Parent Page.");
        }
    }
}

createDatabase();
