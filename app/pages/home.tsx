import DownloadButton from "~/components/download_button";
import Footer from "~/components/footer";
import { MenuSelect } from "~/components/menu_select";
import VideoPreview from "~/components/video_preview";

import { learn_videos } from "~/constants/videos";

export function Home() {
    return (
        <main className="flex w-full flex-col">
            <div className="flex flex-col w-full bg-white relative">
                <div className="mt-12 w-full flex flex-col items-center z-40">
                    <h1 className="inter-bold text-grad-yellow md:leading-32 md:text-8xl text-5xl">
                        Videobeiträge
                    </h1>
                    <h3 className="inter-bold italic text-black md:leading-8 md:text-3xl text-xl mt-2">
                        Eine "neue" Kulturtechnik?
                    </h3>

                    <div className="mt-8">
                        <MenuSelect />
                    </div>
                </div>

                <div className="w-full h-auto bg-grad-yellow mt-12 relative z-0">
                    <div className="absolute w-full h-auto left-0 right-0 top-0 -z-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320">
                            <path
                                fill="#f2f2f2"
                                fillOpacity="1"
                                d="M0,32L48,80C96,128,192,224,288,229.3C384,235,480,149,576,106.7C672,64,768,64,864,90.7C960,117,1056,171,1152,170.7C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                        </svg>
                    </div>

                    <section
                        id="learn"
                        className="w-full flex flex-col items-center md:mt-24 mt-8 md:pt-24 pt-12">
                        <div className="w-[80%] flex flex-col items-center">
                            <h3 className="inter-bold italic text-black md:leading-8 md:text-3xl text-xl mt-2">
                                Was möchtest du lernen?
                            </h3>
                            <div className="w-full flex flex-row flex-wrap md:mt-12 mt-6 items-center justify-center">
                                {Object.values(learn_videos).map((v, k) => (
                                    <div key={k} className="md:m-5 m-2">
                                        <VideoPreview video={v} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <div className="absolute w-full h-auto left-0 right-0 md:-bottom-12 -z-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320">
                            <path
                                fill="#f2f2f2"
                                fillOpacity="1"
                                d="M0,256L48,234.7C96,213,192,171,288,144C384,117,480,107,576,101.3C672,96,768,96,864,117.3C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        </svg>
                    </div>

                    <div className="w-full h-auto md:-mt-24">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"></svg>
                    </div>
                </div>

                <section
                    id="exam"
                    className="w-full h-auto flex flex-col items-center justify-center md:-translate-y-8 md:pt-5 pt-2">
                    <h3 className="inter-bold italic text-black  md:leading-8 md:text-3xl text-xl">
                        Prüfungsanforderungen
                    </h3>

                    <div className="h-96 w-1"></div>
                </section>

                <section
                    id="transcript"
                    className="w-full h-auto flex flex-col items-center justify-center md:pt-5 pt-2">
                    <h3 className="inter-bold italic text-black  md:leading-8 md:text-3xl text-xl">
                        Transkript
                    </h3>

                    <DownloadButton
                        className="w-[60%] mt-5"
                        data={{
                            title: "Gesamtes Transkript herunterladen",
                            href: "https://www.google.com",
                        }}
                    />
                </section>

                <Footer />
            </div>
        </main>
    );
}
