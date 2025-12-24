"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

export function FooterWrapper() {
    const pathname = usePathname();

    // Define which paths should have the dark footer
    // You can add more paths to this array or use logic (e.g., all sub-pages except home)
    const darkFooterPaths = [
        "/",
        
    ];

    // Check if the current path matches one of the dark footer paths
    // You can also change this logic. For example: `pathname !== "/"` for everywhere except home.
    const isDark = darkFooterPaths.includes(pathname);

    return <Footer variant={isDark ? "light" : "dark"} />;
}
