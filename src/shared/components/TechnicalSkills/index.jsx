import classes from "./styles.module.css";

import SkillItem from "./SkillItem";

import { motion } from "framer-motion";

import technicalSkills from "../../constants/technicalSkills";

export default function TechnicalSkills() {
    return (
        <div className={classes.technicalSkills}>
            <div className={classes.title}>
                <h2>My Skills</h2>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={classes.context}
            >
                {technicalSkills.map((skill) => (
                    <SkillItem key={skill.id} skill={skill} />
                ))}
            </motion.div>
        </div>
    );
}
