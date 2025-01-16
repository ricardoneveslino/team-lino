import { YouTubeEmbed } from '@next/third-parties/google'

export const PresentationVideo = () => {

    return (
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg" suppressHydrationWarning>
            <YouTubeEmbed videoid="NgymAPexlt0" params="si=pBB7hSwp9Cu58iRd&rel=0&showinfo=0" playlabel={"Vídeo de apresentação Team Lino"}/>
        </div>
    )
}
