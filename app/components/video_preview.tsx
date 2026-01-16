import { Link } from "react-router";
import type { Video } from "~/constants/videos";

export default function VideoPreview({ video }: { video: Video }) {
    return (
        <Link to="/learn" state={{ video: video }}>
            <div className="flex flex-col w-72 items-center justify-center cursor-pointer drop-shadow-2xl">
                <div className="w-full aspect-3/2 rounded-4xl border translate-y-0 hover:-translate-y-1 hover:border-2 border-black transition-all duration-300  overflow-hidden">
                    <img src={video.icon} alt={video.title} />
                </div>
                <p className="inter-regular leading-4 text-sm text-black mt-1 text-center">
                    {video.title}
                </p>
            </div>
        </Link>
    );
}
