"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { HeroSlide } from "@/lib/notion";
import { Play } from "lucide-react";

// Helper to check for direct video files vs iframes
const isDirectVideo = (url: string) => {
    return url.match(/\.(mp4|webm|ogg)$/i);
};

// Helper to process video URLs (Google Drive, Vimeo)
const getVideoEmbedSrc = (url: string, autoplay: boolean = false) => {
    // Google Drive
    if (url.includes("drive.google.com")) {
        // Convert /view to /preview for embedding
        let embedUrl = url;
        if (url.includes('/view')) {
            embedUrl = url.replace(/\/view.*/, "/preview");
        }
        return embedUrl;
    }

    // Vimeo
    if (url.includes("vimeo.com")) {
        const vimeoRegex = /vimeo\.com\/(\d+)(?:\/([a-zA-Z0-9]+))?/;
        const match = url.match(vimeoRegex);
        const videoId = match ? match[1] : url.split('/').pop();
        const hash = match && match[2] ? `?h=${match[2]}` : '';
        const separator = hash ? '&' : '?';

        if (url.includes('player')) return url;

        // Standard Vimeo Player
        // Add autoplay param if requested
        const params = [`title=0`, `byline=0`, `portrait=0`];
        if (autoplay) params.push(`autoplay=1`, `muted=0`);

        return `https://player.vimeo.com/video/${videoId}${hash}${separator}${params.join('&')}`;
    }

    return url;
};

// Individual Slide Component for Lazy Loading
const VideoCard = ({ slide }: { slide: HeroSlide }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    if (isPlaying && slide.videoUrl) {
        // Active Video State
        return (
            <div className="relative h-full w-full bg-black">
                {isDirectVideo(slide.videoUrl) ? (
                    <video
                        className="h-full w-full object-cover"
                        src={slide.videoUrl}
                        controls
                        autoPlay
                        playsInline
                    />
                ) : (
                    <iframe
                        src={getVideoEmbedSrc(slide.videoUrl, true)}
                        className="h-full w-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={slide.title}
                    ></iframe>
                )}
            </div>
        );
    }

    // Lazy / Thumbnail State
    return (
        <div
            className="relative h-full w-full cursor-pointer group bg-gray-900"
            onClick={handlePlay} 
        >
            {slide.imageUrl ? (
                <Image
                    src={slide.imageUrl}
                    alt={slide.title}
                    fill
                    className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
            ) : (
                // Fallback placeholder if no image
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <span className="text-gray-200 text-3xl font-bold font-serif">Elis Academy</span>
                </div>
            )}

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30 shadow-lg">
                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                </div>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <h3 className="text-white font-medium text-lg leading-tight drop-shadow-md line-clamp-2">
                    {slide.title}
                </h3>
            </div>
        </div>
    );
};

// Main Component
export function HeroSlider({ slides }: { slides: HeroSlide[] }) {
    if (!slides || slides.length === 0) return null;

    return (
        <section className="w-full bg-white py-16 border-b border-gray-100">
            <div className="mx-auto max-w-7xl px-4 md:px-6 mb-10">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-accent font-bold tracking-wider uppercase text-sm">Media</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2">Latest Videos</h2>
                    <p className="text-gray-600 mt-4 text-lg">
                        Watch highlights, training sessions, and moments from Elis Academy.
                    </p>
                </div>
            </div>

            <div className="w-full px-4 md:px-6">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={24}
                    slidesPerView={1.2}
                    centeredSlides={false}
                    loop={true}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: true,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2.2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="w-full !pb-14 gallery-swiper"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id} className="relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-gray-100">
                            <VideoCard slide={slide} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
