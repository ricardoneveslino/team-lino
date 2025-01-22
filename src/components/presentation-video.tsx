"use client"

import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

const PresentationVideo = ( { className}: { className?: string} ) => {

    return (
        <div className={`aspect-video rounded-xl overflow-hidden shadow-lg w-full p-1 ${className}`}>
            <LiteYouTubeEmbed
                aspectHeight={9}
                aspectWidth={16}
                id="NgymAPexlt0"
                params="si=pBB7hSwp9Cu58iRd&rel=0&showinfo=0"
                title="Vídeo de apresentação Team Lino"
            />
        </div>
    );
};

export default PresentationVideo;