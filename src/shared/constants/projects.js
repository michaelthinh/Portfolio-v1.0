import { FaReact, FaAmazon } from "react-icons/fa";
import {
    SiTailwindcss,
    SiRedux,
    SiTypescript,
    SiNestjs,
    SiPostgresql,
} from "react-icons/si";

const projects = [
    {
        bannerImg: "/banner/t4cvs-banner.png",
        projectTitle: "t4CVs - Posting job vacancies and applying desired jobs",
        projectDescription:
            "A website for recruitments and Quick CV creation, inspired from TopCV.vn.",
        projectTechs: [
            {
                techIcon: SiTypescript,
                iconColor: "#2f74c0",
                techTitle: "TypeScript",
            },
            {
                techIcon: SiTailwindcss,
                iconColor: "#19274b",
                techTitle: "TailwindCSS",
            },
            {
                techIcon: SiNestjs,
                iconColor: "#e0234e",
                techTitle: "NestJS",
            },
            {
                techIcon: SiPostgresql,
                iconColor: "#31648c",
                techTitle: "PostgreSQL",
            },
            {
                techIcon: FaAmazon,
                iconColor: "#883022",
                techTitle: "Amazon S3 Cloud Storage",
            },
        ],
        projectDate: "Jun 9th, 2023",
        projectLink: "https://github.com/michaelthinh/DACNPM",
        projectDemo: "https://dacnpm-m9tw.onrender.com",
    },
    {
        bannerImg: "/banner/mt-movies-banner.png",
        projectTitle: "MT Movies - Movie Searching and Details App",
        projectDescription:
            "Movie App Website where you can see top movies and their descriptions, inspired from Netflix.",
        projectTechs: [
            { techIcon: FaReact, iconColor: "#61dafb", techTitle: "ReactJS" },
        ],
        projectDate: "Jun 9th, 2023",
        projectLink: "https://github.com/michaelthinh/MT-Movies",
        projectDemo: "https://mt-movies.vercel.app",
    },
    {
        bannerImg: "/banner/mt-global-banner.png",
        projectTitle: "MT Global - Detailed Countries App",
        projectDescription:
            "An app where you can search for countries around the world.",
        projectTechs: [
            { techIcon: FaReact, iconColor: "#61dafb", techTitle: "ReactJS" },
            {
                techIcon: SiTailwindcss,
                iconColor: "#19274b",
                techTitle: "TailwindCSS",
            },
            {
                techIcon: SiRedux,
                iconColor: "#7a50be",
                techTitle: "Redux",
            },
        ],
        projectDate: "Jun 6th, 2023",
        projectLink: "https://github.com/michaelthinh/MT-Global",
        projectDemo: "https://mt-global.vercel.app",
    },
];

export default projects;
