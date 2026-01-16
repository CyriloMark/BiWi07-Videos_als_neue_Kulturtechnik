import type { Route } from "./+types/home";
import { Video as V } from "~/pages/video";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Lernvideo | Die neue Kulturtechnik - Videobeiträge" },
        {
            name: "description",
            content: "Die neue Kulturtechnik - Videobeiträge!",
        },
        { author: "Cyrill Mark" },
    ];
}

export default function Video() {
    return <V />;
}
