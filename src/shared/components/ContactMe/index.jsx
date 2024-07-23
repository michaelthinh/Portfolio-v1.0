import classes from "./styles.module.css";

import { motion } from "framer-motion";

export default function ContactMe() {
    return (
        <div className={classes.contactMe}>
            <div className={classes.title}>
                <h2>Hire me now!</h2>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={classes.context}
            >
                <div className={classes.description}>
                    <p>
                        Please contact me to discuss further about your offers
                        📃
                    </p>
                    <p>I am looking forward to working with you 💕</p>
                </div>
                <div
                    className={classes.contactButton}
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                    <div className={classes.buttonContainer}>
                        <span>Contact me</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
