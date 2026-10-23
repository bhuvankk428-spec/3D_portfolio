import React, { useEffect, useRef } from "react";

export default function HomeCanvas({ frameCount = 300, width = "40vw" }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d", { alpha: false });
        const currentFrame = (index) =>
            `/frames/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

        const images = [];

        const setCanvasSize = (img) => {
            if (img && img.naturalWidth && img.naturalHeight) {
                if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
                    canvas.width = img.naturalWidth;
                    canvas.height = img.naturalHeight;
                }
            }
        };

        const drawImage = (img) => {
            if (!img || !img.complete || !img.naturalWidth) return;
            setCanvasSize(img);
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
        };

        // Preload and cache all Image objects in memory
        const preloadImages = () => {
            for (let i = 1; i <= frameCount; i++) {
                const img = new Image();
                if (i === 1) {
                    img.onload = () => drawImage(img);
                }
                img.src = currentFrame(i);
                images[i] = img;
            }
        };

        preloadImages();

        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollTop = document.documentElement.scrollTop || window.scrollY;
                    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
                    if (maxScrollTop <= 0) {
                        ticking = false;
                        return;
                    }
                    const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScrollTop));
                    const frameIndex = Math.min(
                        frameCount,
                        Math.max(1, Math.ceil(scrollFraction * frameCount))
                    );

                    if (images[frameIndex]) {
                        drawImage(images[frameIndex]);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        const handleResize = () => {
            const scrollTop = document.documentElement.scrollTop || window.scrollY;
            const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
            const scrollFraction = maxScrollTop > 0 ? Math.max(0, Math.min(1, scrollTop / maxScrollTop)) : 0;
            const frameIndex = Math.min(
                frameCount,
                Math.max(1, Math.ceil(scrollFraction * frameCount))
            );
            if (images[frameIndex]) {
                drawImage(images[frameIndex]);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize);

        // Initial draw in case frame 1 is already cached
        if (images[1] && images[1].complete) {
            drawImage(images[1]);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [frameCount]);

    return (
        <canvas
            ref={canvasRef}
            className="home-canvas-animation"
            style={{
                position: "fixed",
                top: "4px",
                left: 0,
                width: width,
                height: "calc(100vh - 8px)",
                objectFit: "contain",
                objectPosition: "top",
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
    );
}
