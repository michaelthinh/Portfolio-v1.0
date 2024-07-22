import classes from "./styles.module.css";
import WorkItem from "./WorkItem";

import { IconContext } from "react-icons";

import { FaReact, FaAmazon, FaList } from "react-icons/fa";
import {
    SiTailwindcss,
    SiRedux,
    SiTypescript,
    SiNestjs,
    SiPostgresql,
} from "react-icons/si";
import { IoGridOutline } from "react-icons/io5";

import { motion } from "framer-motion";
import { useState } from "react";

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

export default function MyWorks() {
    const [isGrid, setIsGrid] = useState(false);
    const setView = (value) => {
        setIsGrid(value);
    };
    return (
        <div className={classes.myWorks}>
            <div className={classes.title}>
                <h2>My Works</h2>
            </div>
            <div className={classes.projectSortByView}>
                <IconContext.Provider
                    value={{
                        size: "24px",
                        color: "",
                    }}
                >
                    <div
                        className={`${classes.viewButton} ${
                            !isGrid && classes.buttonActive
                        }`}
                        onClick={() => {
                            setView(false);
                        }}
                    >
                        <FaList />
                    </div>
                    <div
                        className={`${classes.viewButton} ${
                            isGrid && classes.buttonActive
                        }`}
                        onClick={() => {
                            setView(true);
                        }}
                    >
                        <IoGridOutline />
                    </div>
                </IconContext.Provider>
            </div>
            <motion.div
                initial={{ y: 70 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={classes.context}
            >
                <div className={classes.projects}>
                    {projects.map((project) => (
                        <WorkItem
                            key={project.projectTitle}
                            project={project}
                            iconSize={64}
                        />
                    ))}
                </div>
            </motion.div>
            <div className={classes.borderBottom}></div>
        </div>
    );
}
