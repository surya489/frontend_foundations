"use client";

import { useEffect, useState, useRef } from "react";

type Item = { id: number; text: string };

export default function InfiniteScrollDemo() {
    const [items, setItems] = useState<Item[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const loaderRef = useRef<HTMLDivElement | null>(null);

    // fake API
    function fetchData(pageNum: number): Promise<Item[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newItems = Array.from({ length: 10 }).map((_, i) => ({
                    id: (pageNum - 1) * 10 + i + 1,
                    text: `Item ${(pageNum - 1) * 10 + i + 1}`,
                }));
                resolve(newItems);
            }, 600);
        });
    }

    async function loadMore() {
        if (loading) return;

        setLoading(true);

        const newItems = await fetchData(page);

        setItems((prev) => {
            const existingIds = new Set(prev.map((item) => item.id));

            const filtered = newItems.filter(
                (item) => !existingIds.has(item.id)
            );

            return [...prev, ...filtered];
        });

        setPage((prev) => prev + 1);
        setLoading(false);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMore();
                }
            },
            { threshold: 1 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => observer.disconnect();
    }, [page]);

    useEffect(() => {
        loadMore();
    }, []);

    return (
        <div className="border rounded-lg p-4 mt-4 max-h-[400px] overflow-y-auto">
            <h3 className="font-semibold mb-3">Infinite Scroll Demo</h3>

            <div className="space-y-2">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="border p-2 rounded text-sm"
                    >
                        {item.text}
                    </div>
                ))}
            </div>

            {/* loader trigger */}
            <div ref={loaderRef} className="text-center py-4 text-sm">
                {loading ? "Loading..." : "Scroll to load more"}
            </div>
        </div>
    );
}