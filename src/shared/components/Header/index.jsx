import classes from "./styles.module.css";
import { SocialIcon } from "react-social-icons";

import { motion } from "framer-motion";

import { successToast } from "../../../utils/toast";

import socialMedias from "../../constants/socialMedias";

export default function Header() {
    const handleCopy = (value) => {
        if (!value) {
            return;
        }
        successToast("Email copied to clipboard");
        navigator.clipboard.writeText(value);
    };
    return (
        <div className={classes.header}>
            <div className={classes.overlay}></div>
            <div className={classes.container}>
                <motion.div
                    className={classes.context}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className={classes.avatar}>
                        <img src="/images/avatar_01.jpg" alt="Avatar" />
                    </div>
                    <h1 className={classes.headerName}>
                        <span>Mai Cuong Thinh</span>
                    </h1>
                    <h3 className={classes.headerPosition}>
                        <span>Front-end Developer</span>
                    </h3>
                    <h3 className={classes.headerContactText}>
                        <span>My Contacts</span>
                    </h3>
                    <div className={classes.iconItems}>
                        {socialMedias.map((item) => (
                            <SocialIcon
                                key={item.network}
                                network={item.network}
                                url={item.url ? item.url : undefined}
                                title={item.title ? item.title : ""}
                                onClick={() => {
                                    handleCopy(item.value);
                                }}
                                target="_blank"
                                style={{ cursor: "pointer" }}
                            />
                        ))}
                    </div>
                    <motion.a
                        href="https://drive.google.com/file/d/1UjJ3H5tvJjl3GmH7lDt779MAOX9Eq3Ko/view?usp=sharing"
                        target="_blank"
                        initial={{ opacity: 0.9 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className={classes.myCVButton}
                    >
                        <div className={classes.buttonContainer}>
                            <span>My CV</span>
                        </div>
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
}
