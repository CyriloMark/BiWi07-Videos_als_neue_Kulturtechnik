import { Link, useLocation } from "react-router";
import DownloadButton from "~/components/download_button";
import Footer from "~/components/footer";
import type { Video } from "~/constants/videos";

export function Video() {
    const location = useLocation();
    const state = location.state;

    if (state === null) {
        return <main className="w-full h-[100vh] bg-fuchsia-700"></main>;
    }

    const video = state.video as Video;
    if (video == null) {
        return <main className="w-full h-[100vh] bg-grad-yellow "></main>;
    }

    return (
        <main className="w-full min-h-[100vh] bg-grad-yellow flex flex-col relative">
            {/* Top Grad */}
            <div className="absolute w-full h-auto top-0 left-0 right-0 z-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#f2f2f2"
                        fillOpacity="1"
                        d="M0,64L48,69.3C96,75,192,85,288,74.7C384,64,480,32,576,37.3C672,43,768,85,864,128C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
            </div>

            {/* Bottom Grad */}
            <div className="absolute w-full h-auto bottom-0 left-0 right-0 z-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#f2f2f2"
                        fillOpacity="1"
                        d="M0,96L48,133.3C96,171,192,245,288,250.7C384,256,480,192,576,186.7C672,181,768,235,864,234.7C960,235,1056,181,1152,160C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="w-full mt-12 pl-12 flex flex-row z-10">
                <Link
                    to="/"
                    className="translate-x-0 hover:-translate-x-1 transition-all duration-300">
                    <div className="drop-shadow-2xl rounded-full w-16 border-2 border-[#f2b705] aspect-square bg-white flex justify-center items-center p-2">
                        <span className="boldense text-xl text-grad-yellow">
                            {"<"}
                        </span>
                    </div>
                </Link>
            </div>

            <div className="w-full flex flex-col justify-center items-center z-20">
                <h4 className="inter-sm text-black md:leading-8 md:text-xl text-lg">
                    Lernvideo {video.id + 1}
                </h4>
                <h3 className="inter-bold italic text-black md:leading-8 md:text-3xl text-xl mt-2">
                    {video.title}
                </h3>

                <div className="w-[80%] p-1 mt-5 drop-shadow-2xl border-2 border-white rounded-4xl overflow-visible">
                    <div className="w-full aspect-video bg-white rounded-3xl overflow-hidden">
                        <iframe
                            src={video.href}
                            title="Google Drive video"
                            loading="lazy"
                            allow="autoplay"
                            sandbox="allow-scripts allow-same-origin"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col justify-between items-center z-20 mt-12">
                <h3 className="inter-bold italic text-black md:leading-8 md:text-3xl text-xl">
                    Transkript
                </h3>

                <DownloadButton
                    className="w-[60%] mt-5"
                    data={{
                        title: "Gesamtes Transkript herunterladen",
                        href: "https://www.google.com",
                    }}
                />
            </div>

            <Footer />
        </main>
    );
}
