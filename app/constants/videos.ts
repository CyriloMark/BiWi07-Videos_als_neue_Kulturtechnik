import img_0 from "../src/img/IMG_5500.png";

export type Video = {
    id: number;
    title: string;
    href: string;
    key: string;
    icon: string;
};

export const learn_videos = {
    INTRO: {
        id: 0,
        title: "Einstieg und Vorstellung",
        href: "https://drive.google.com/file/d/15UhbZoX2ojD4bEujj1OeSnLRxRok0bhG/preview",
        key: "intro",
        icon: img_0,
    },
    DEF: {
        id: 1,
        title: "Definitionen",
        href: "https://www.youtube.com/watch?v=146GL3pyKDY&list=RD146GL3pyKDY&start_radio=1",
        key: "def",
        icon: img_0,
    },
    MEANING: {
        id: 2,
        title: "Bedeutung für Menschen und Lernende",
        href: "https://drive.google.com/file/d/15KewuU6LFxVzXvnJRe3ZPNB28t1tY7i6/preview",
        key: "meaning",
        icon: img_0,
    },
    IMPLEMENTATION: {
        id: 3,
        title: "Technische Umsetzung",
        href: "",
        key: "implementation",
        icon: img_0,
    },
    DISCUSSION: {
        id: 4,
        title: "Diskussion, Pro und Contra",
        href: "",
        key: "discussion",
        icon: img_0,
    },
    OUTRO: {
        id: 5,
        title: "Fazit",
        href: "",
        key: "outro",
        icon: img_0,
    },
} as const satisfies Record<string, Video>;
