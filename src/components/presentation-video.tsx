"use client"

import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import dynamic from "next/dynamic";

const LiteYouTubeEmbed = dynamic(() =>
    import('react-lite-youtube-embed'), {ssr: false}
)

const PresentationVideo = ( { className}: { className?: string} ) => {

    return (
        <div className={`rounded-lg overflow-hidden w-full ${className}`}>
            <LiteYouTubeEmbed
                containerElement={"div"}
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