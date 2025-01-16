import React from 'react'

export const PresentationVideo = () => {
    return (
        <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
                src="https://www.youtube.com/embed/NgymAPexlt0?si=pBB7hSwp9Cu58iRd&rel=0&showinfo=0&enablejsapi=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                className={"w-full aspect-video"}>
            </iframe>
        </div>
    )
}
