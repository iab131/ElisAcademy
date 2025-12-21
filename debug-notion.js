const { Client } = require("@notionhq/client");
const packageJson = require("./node_modules/@notionhq/client/package.json");

console.log("Notion Client Version:", packageJson.version);

const notion = new Client({ auth: "secret_test" });

console.log("Notion Object Keys:", JSON.stringify(Object.keys(notion)));

if (notion.databases) {
    console.log("notion.databases Keys:", JSON.stringify(Object.keys(notion.databases)));
} else {
    console.log("notion.databases is MISSING");
}
