import classes from "./styles.module.css";

import { motion } from "framer-motion";

import { IconContext } from "react-icons";

export default function SkillItem({ skill }) {
    return (
        <motion.div
            className={classes.skillItem}
            whileHover={{
                scale: 1.08,
                transition: { duration: 0.3 },
            }}
        >
            <IconContext.Provider
                value={{
                    size: "64px",
                    color: skill.color,
                }}
            >
                <div className={classes.mainIcon}>
                    <skill.icon />
                </div>
            </IconContext.Provider>
            <div className={classes.mainTitle}>
                <h4>{skill.title}</h4>
            </div>
            <div className={classes.skillLines}>
                <>
                    {skill.skills.map((item) => (
                        <IconContext.Provider
                            value={{ size: "25px", color: item.color }}
                            key={item.skillTitle}
                        >
                            <div className={classes.skillLineItem}>
                                <item.skillIcon />
                                <p className={classes.itemText}>
                                    {item.skillTitle}
                                </p>
                            </div>
                        </IconContext.Provider>
                    ))}
                </>
            </div>
        </motion.div>
    );
}
