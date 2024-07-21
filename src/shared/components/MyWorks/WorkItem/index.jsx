import classes from "./styles.module.css";

import { motion } from "framer-motion";

import Button from "@mui/material/Button";

import { IconContext } from "react-icons";

import { FaReact } from "react-icons/fa";

export default function WorkItem() {
    return (
        <motion.div
            className={classes.projectItem}
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
            }}
        >
            <div className={classes.projectBanner}>
                <img src="/banner/project-banner-01.png" alt="Project banner" />
            </div>
            <div className={classes.projectInfo}>
                <div className={classes.projectName}>
                    <h3>MT Movies - Movie Searching and Details App</h3>
                </div>
                <div className={classes.projectDescription}>
                    <p>
                        Movie App Website where you can see top movies and their
                        descriptions, inspired from Netflix
                    </p>
                </div>
                <div className={classes.projectTech}>
                    <IconContext.Provider
                        value={{
                            size: "64px",
                            color: "blue",
                        }}
                    >
                        <div className={classes.techIcon} title="ReactJS">
                            <FaReact />
                        </div>
                    </IconContext.Provider>
                </div>
                <div className={classes.projectDate}>
                    Latest modified: <span>Jun 9, 2023</span>
                </div>
                <div className={classes.projectCta}>
                    <Button variant="outlined">Source Code</Button>
                    <Button variant="outlined">Live Demo</Button>
                </div>
            </div>
        </motion.div>
    );
}
