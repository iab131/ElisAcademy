import { NextRequest, NextResponse } from "next/server";

/**
 * Proxies Notion S3 images so that temporary signed URLs don't break
 * the Next.js Image component on cold loads.
 *
 * Usage: /api/notion-image?url=<encoded-notion-s3-url>
 *
 * The route fetches the image server-side (where the signed URL is
 * still valid) and streams it back to the client. This avoids the
 * problem where Next.js Image Optimization tries to fetch an expired
 * signed URL on the first visit.
 */
export async function GET(request: NextRequest) {
    const url = request.nextUrl.searchParams.get("url");

    if (!url) {
        return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
    }

    try {
        const imageResponse = await fetch(url, {
            // Don't cache the upstream fetch — we always want a fresh image
            // from the signed URL while it's still valid.
            cache: "no-store",
        });

        if (!imageResponse.ok) {
            return NextResponse.json(
                { error: "Failed to fetch image", status: imageResponse.status },
                { status: imageResponse.status }
            );
        }

        const contentType = imageResponse.headers.get("content-type") || "image/jpeg";
        const buffer = await imageResponse.arrayBuffer();

        return new NextResponse(buffer, {
            status: 200,
            headers: {
                "Content-Type": contentType,
                // Cache the proxied image in the browser / CDN for 1 hour.
                // This prevents hammering Notion's S3 on every request while
                // still refreshing before the signed URL expires.
                "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
            },
        });
    } catch (error) {
        console.error("Image proxy error:", error);
        return NextResponse.json({ error: "Failed to proxy image" }, { status: 500 });
    }
}
