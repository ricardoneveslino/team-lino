import React from 'react'

export const PresentationVideo = () => {

    return (
        <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
                src={`https://www.youtube-nocookie.com/embed/NgymAPexlt0?&si=pBB7hSwp9Cu58iRd&rel=0&showinfo=0`}
                title="Vídeo de apresentação Team Lino"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                allowFullScreen
                className={"w-full aspect-video"}>
            </iframe>
        </div>
    )
}
