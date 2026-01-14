import { MenuSelect } from "~/components/menu_select";

export function Home() {
    return (
        <main className="flex w-full flex-col">
            <div className="flex w-full min-h-[100vh] bg-white relative">
                <div className="mt-12 w-full flex flex-col items-center ">
                    <h1 className="inter-bold text-grad-yellow leading-32 text-8xl">
                        Videobeiträge
                    </h1>
                    <h3 className="inter-bold italic text-black leading-8 text-3xl mt-2">
                        Eine "neue" Kulturtechnik?
                    </h3>

                    <MenuSelect />
                </div>

                {/* Grad Wave */}
                <div className="absolute w-full h-auto bottom-0 left-0 right-0 bg-grad-yellow">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320">
                        <path
                            fill="#f2f2f2"
                            fill-opacity="1"
                            d="M0,32L48,80C96,128,192,224,288,229.3C384,235,480,149,576,106.7C672,64,768,64,864,90.7C960,117,1056,171,1152,170.7C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                </div>
            </div>
        </main>
    );
}
