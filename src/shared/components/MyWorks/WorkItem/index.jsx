import classes from "./styles.module.css";

import { motion } from "framer-motion";

import Button from "@mui/material/Button";

import { IconContext } from "react-icons";
import { useState } from "react";

export default function WorkItem({ project, iconSize, isGrid }) {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseOver = () => {
        setIsHovered(true);
        console.log(isHovered);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
        console.log(isHovered);
    };
    return (
        <motion.div
            className={`${classes.projectItem} ${
                isGrid && classes.projectItemGrid
            }`}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {isGrid && isHovered && (
                <p>
                    <div className={classes.hoverOverlay}></div>
                    <div className={classes.ctaOverlay}>
                        <Button
                            variant="outlined"
                            target="_blank"
                            href={project.projectLink}
                        >
                            Source Code
                        </Button>
                        <Button
                            variant="outlined"
                            target="_blank"
                            href={project.projectDemo}
                        >
                            Live Demo
                        </Button>
                    </div>
                </p>
            )}
            <div
                className={`${classes.projectBanner} ${
                    isGrid && classes.projectBannerGrid
                }`}
            >
                <img src={project.bannerImg} alt="Project banner" />
            </div>
            <div
                className={`${classes.projectInfo} ${
                    isGrid && classes.projectInfoGrid
                }`}
            >
                <div className={classes.projectName}>
                    <h3>{project.projectTitle}</h3>
                </div>
                <div className={classes.projectDescription}>
                    <p>{project.projectDescription}</p>
                </div>
                <div className={classes.projectTech}>
                    {project.projectTechs &&
                        project.projectTechs.map((tech) => (
                            <IconContext.Provider
                                key={tech.techTitle}
                                value={{
                                    size: `${iconSize}px`,
                                    color: `${tech.iconColor}`,
                                }}
                            >
                                <div
                                    className={classes.techIcon}
                                    title={tech.techTitle}
                                >
                                    <tech.techIcon />
                                </div>
                            </IconContext.Provider>
                        ))}
                </div>
                <div className={classes.projectDate}>
                    Latest modified: <span>{project.projectDate}</span>
                </div>
                <div className={classes.projectCta}>
                    <Button
                        variant="outlined"
                        href={project.projectLink}
                        target="_blank"
                    >
                        Source Code
                    </Button>
                    <Button
                        variant="outlined"
                        href={project.projectDemo}
                        target="_blank"
                    >
                        Live Demo
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
