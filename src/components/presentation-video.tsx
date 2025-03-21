"use client"

import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import dynamic from "next/dynamic";

const LiteYouTubeEmbed = dynamic(() =>
    import('react-lite-youtube-embed'),
)

const PresentationVideo = ( { className}: { className?: string} ) => {

    return (
        <div className={`rounded-lg aspect-video overflow-hidden w-full ${className}`}>
            <LiteYouTubeEmbed
                containerElement={"div"}
                aspectHeight={9}
                aspectWidth={16}
                id="GVwghvbhMfo"
                params="si=pBB7hSwp9Cu58iRd&rel=0&showinfo=0"
                title="Vídeo de apresentação Team Lino"
            />
        </div>
    );
};

export default PresentationVideo;