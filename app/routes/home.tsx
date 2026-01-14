import type { Route } from "./+types/home";
import { Home as H } from "~/pages/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Home | Die neue Kulturtechnik - Videobeiträge" },
        {
            name: "description",
            content: "Die neue Kulturtechnik - Videobeiträge!",
        },
        { author: "Cyrill Mark" },
    ];
}

export default function Home() {
    return <H />;
}
