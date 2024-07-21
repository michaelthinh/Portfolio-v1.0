import classes from "./styles.module.css";

import SkillItem from "./SkillItem";

import { motion } from "framer-motion";

import {
    FaServer,
    FaPaintBrush,
    FaTools,
    FaSass,
    FaReact,
    FaGithubSquare,
    FaSlack,
    FaNode,
} from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { IoLogoFigma } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMaterialdesign, SiAntdesign, SiExpress } from "react-icons/si";
import { AiFillPicture } from "react-icons/ai";

const mySkills = [
    {
        id: 1,
        icon: AiFillPicture,
        color: "#2d7545",
        title: "Front-end",
        skills: [
            { skillIcon: IoLogoHtml5, skillTitle: "HTML", color: "#F00" },
            { skillIcon: IoLogoCss3, skillTitle: "CSS", color: "#00F" },
            { skillIcon: FaSass, skillTitle: "SASS", color: "#ed64a6" },
            {
                skillIcon: RiTailwindCssFill,
                skillTitle: "TailwindCSS",
                color: "#0b1120",
            },
            { skillIcon: FaReact, skillTitle: "ReactJS", color: "#58c4dc" },
        ],
    },
    {
        id: 2,
        icon: FaServer,
        color: "#221b4a",
        title: "Back-end",
        skills: [
            {
                skillIcon: SiExpress,
                skillTitle: "ExpressJS",
                color: "#4bbc7a",
            },
            {
                skillIcon: FaNode,
                skillTitle: "NodeJS",
                color: "#80bd00",
            },
        ],
    },
    {
        id: 3,
        icon: FaPaintBrush,
        color: "#eb8b75",
        title: "UI Framework",
        skills: [
            {
                skillIcon: SiMaterialdesign,
                skillTitle: "Material UI",
                color: "#4299e1",
            },
            {
                skillIcon: SiAntdesign,
                skillTitle: "AntDesign",
                color: "#f56565",
            },
        ],
    },
    {
        id: 4,
        icon: FaTools,
        color: "#333333",
        title: "Tools",
        skills: [
            {
                skillIcon: FaGithubSquare,
                skillTitle: "Github",
                color: "#1a202c",
            },
            {
                skillIcon: FaSlack,
                skillTitle: "Slack",
                color: "#d69e2e",
            },
            {
                skillIcon: IoLogoFigma,
                skillTitle: "Figma",
                color: "#f56565",
            },
        ],
    },
];

export default function TechnicalSkills() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={classes.technicalSkills}
        >
            <div className={classes.title}>
                <h2>My Skills</h2>
            </div>
            <div className={classes.context}>
                {mySkills.map((skill) => (
                    <SkillItem key={skill.id} skill={skill} />
                ))}
            </div>
        </motion.div>
    );
}
