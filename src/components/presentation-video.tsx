"use client";

import dynamic from "next/dynamic";
import Loader from "@/components/loader";

// Dynamically import YouTubeEmbed with a loading state
const YouTubeEmbed = dynamic(() => import("@next/third-parties/google").then((mod) => mod.YouTubeEmbed), {
    ssr: false,
    loading: () => <Loader/>, // Display the placeholder while loading
});

const PresentationVideo = () => {

    return (
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <YouTubeEmbed
                videoid="NgymAPexlt0"
                params="si=pBB7hSwp9Cu58iRd&rel=0&showinfo=0"
                playlabel="Vídeo de apresentação Team Lino"
            />
        </div>
    );
};

export default PresentationVideo;