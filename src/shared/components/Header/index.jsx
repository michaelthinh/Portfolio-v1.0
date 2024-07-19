import classes from "./styles.module.css";
import { SocialIcon } from "react-social-icons";

const socialMedias = [
    { network: "facebook", url: "https://www.facebook.com/michaelthinh1008/" },
    { network: "instagram", url: "https://www.instagram.com/hiimthinj/" },
    { network: "linkedin", url: "https://www.linkedin.com/in/thinhmaicg/" },
];

export default function Header() {
    return (
        <div className={classes.header}>
            <div className={classes.overlay}></div>
            <div className={classes.container}>
                <div className={classes.context}>
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
                                url={item.url}
                                target="_blank"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
