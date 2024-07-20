import DescriptionItem from "./DescriptionItem";
import classes from "./styles.module.css";

import { Book, GraduationCap, BookOpen, Code } from "lucide-react";

import { motion } from "framer-motion";

const infoItems = [
    { key: "Full name", value: "Mai Cuong Thinh" },
    { key: "Phone", value: "0983.301.300" },
    { key: "Email", value: "maicuongthinh1008@gmail.com" },
    { key: "Address", value: "Ho Chi Minh City, Vietnam" },
];

const descriptionItems = [
    {
        icon: GraduationCap,
        title: "University of Science - VNU HCM",
        iconColor: "#d69e2e",
        backgroundColor: "#fefcbf",
        size: 24,
    },
    {
        icon: BookOpen,
        title: "Information of Technology - Software Engineering",
        iconColor: "#0873ca",
        backgroundColor: "#ebf8ff",
        size: 24,
    },
    {
        icon: Code,
        title: "Front-end Developer",
        iconColor: "#f56565",
        backgroundColor: "#fed7d7",
        size: 24,
    },
    {
        icon: Book,
        title: "GPA: 8.2",
        iconColor: "#38a169",
        backgroundColor: "#c6f6d5",
        size: 24,
    },
];

export default function AboutMe() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={classes.aboutMe}
        >
            <div className={classes.title}>
                <h2>About Me</h2>
            </div>
            <div className={classes.context}>
                <div className={classes.info}>
                    <ul className={classes.infoList}>
                        {infoItems.map((item) => (
                            <li key={item.value}>
                                <span className={classes.first}>
                                    {item.key}:
                                </span>
                                <span className={classes.second}>
                                    {item.value}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={classes.introduction}>
                    <h3>Hello there,</h3>
                    <div className={classes.description}>
                        <p>Below here is my basic education information</p>
                        <div className={classes.descriptionList}>
                            {descriptionItems.map((item) => (
                                <DescriptionItem key={item.value} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
