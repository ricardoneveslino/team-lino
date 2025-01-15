import React from 'react'
import {cn} from "@/lib/utils";

export const PresentationVideo = ( {className}: {className?: string} ) => {
    return (
        <div className={cn("relative w-full sm:w-6/12 p-1", className)}>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe
                    loading={"lazy"}
                    src="https://www.youtube.com/embed/NgymAPexlt0?si=pBB7hSwp9Cu58iRd&rel=0&showinfo=0&enablejsapi=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                    className={"w-full aspect-video"}>
                </iframe>
            </div>
        </div>
    )
}
