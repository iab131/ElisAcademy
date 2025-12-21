# Elis Academy Website

Modern, elite sports academy website built with Next.js 15, Tailwind CSS, and Notion CMS.

## Getting Started

### Prerequisites

- Node.js 18+
- Notion Account (for CMS)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Notion CMS Integration

This website uses Notion as a Headless CMS for the News/Events section.

### Automated Setup (Recommended)
We have a script to automatically create the database for you.

1.  **Run the setup script**:
    ```bash
    node scripts/setup-database.mjs YOUR_NOTION_KEY PARENT_PAGE_ID
    ```
2.  **Update Environment Variables**:
    Copy the `NOTION_DATABASE_ID` output by the script into your `.env.local` file.

### Manual Setup (Alternative)
### 1. Create a Notion Integration
1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Create a new integration "Elis Academy".
3. Copy the **Internal Integration Secret** (API Key).

### 2. Create the Database
Create a database in Notion with the following properties:
- **Title** (Title): name of the article.
- **Slug** (Text): URL-friendly string (e.g., `championship-win`).
- **Date** (Date): Publication date.
- **Published** (Checkbox): Check to show on site.
- **Description** (Text): Short summary.
- **Cover** (Page Cover): Used as header/preview image.

### 3. Connect Integration
1. Open the database page.
2. Click `...` > `Connections` > `Connect to` > Select "Elis Academy".

### 4. Environment Variables
Create a `.env.local` file in the root directory:

```env
NOTION_API_KEY=secret_your_integration_key_here
NOTION_DATABASE_ID=your_database_id_here
```

To find Database ID if setting up manually: Open database in browser. URL format: `notion.so/username/DATABASE_ID?v=...`

**Note:** If keys are missing, the site will use mock data for demonstration purposes.

## How to Add News
1. Open your "News & Events" database in Notion.
2. Click **New**.
3. Fill in the **Title**, **Slug**, **Date**, **Description**.
4. Check **Published**.
5. Add a **Cover** image.
6. Write the article content in the page body (Markdown supported).
7. The website will update automatically (within 60 seconds).

## Deployment to Vercel

1. Push code to GitHub.
2. Import project in Vercel.
3. Add the `NOTION_API_KEY` and `NOTION_DATABASE_ID` in Vercel Project Settings > Environment Variables.
4. Deploy.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **CMS**: Notion API
- **Icons**: Lucide React
- **Fonts**: Inter, Playfair Display
