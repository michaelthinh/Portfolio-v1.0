import DescriptionItem from "./DescriptionItem";
import classes from "./styles.module.css";

import { motion } from "framer-motion";

import descriptionItems from "../../constants/descriptionItem";
import infoItems from "../../constants/infoItems";

export default function AboutMe() {
    return (
        <div className={classes.aboutMe}>
            <div className={classes.title}>
                <h2>About Me</h2>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={classes.context}
            >
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
                        <p>
                            I&apos;m a senior student at HCMUS, majoring in
                            Software Engineering at the Faculty of Information
                            Technology. With a strong background in web
                            development, I excel in designing user-friendly and
                            efficient interfaces. I&apos;ve applied my skills to
                            various web development projects, achieving positive
                            results.
                        </p>
                        <p className={classes.quote}>
                            &quot; I&apos;m eager to apply my knowledge and
                            experience to new projects and continue growing in
                            the IT field. &quot;
                        </p>
                        <div className={classes.descriptionList}>
                            {descriptionItems.map((item) => (
                                <DescriptionItem key={item.value} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className={classes.borderBottom}></div>
        </div>
    );
}
