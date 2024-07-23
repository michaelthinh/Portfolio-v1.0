import { useState } from "react";
import classes from "./styles.module.css";
import WorkItem from "./WorkItem";

import { IconContext } from "react-icons";

import { FaList } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";

import { motion } from "framer-motion";

import projects from "../../constants/projects";

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
                initial={{ y: 70, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={classes.context}
            >
                <div
                    className={`${classes.projects} ${
                        isGrid && classes.projectsGrid
                    }`}
                >
                    {projects.map((project) => (
                        <WorkItem
                            key={project.projectTitle}
                            project={project}
                            iconSize={64}
                            isGrid={isGrid}
                        />
                    ))}
                </div>
            </motion.div>
            <div className={classes.borderBottom}></div>
        </div>
    );
}
