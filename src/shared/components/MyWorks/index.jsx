import classes from "./styles.module.css";
import WorkItem from "./WorkItem";

export default function MyWorks() {
    return (
        <div className={classes.aboutMe}>
            <div className={classes.title}>
                <h2>My Works</h2>
            </div>
            <div className={classes.context}>
                <div className={classes.projects}>
                    <WorkItem />
                </div>
            </div>
            <div className={classes.borderBottom}></div>
        </div>
    );
}
