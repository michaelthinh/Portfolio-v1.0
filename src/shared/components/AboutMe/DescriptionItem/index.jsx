import classes from "./styles.module.css";

export default function DescriptionItem({ item }) {
    return (
        <div className={classes.descriptionItem}>
            <div
                className={classes.icon}
                style={{
                    backgroundColor: item.backgroundColor,
                }}
            >
                <item.icon
                    size={item.size}
                    color={item.iconColor}
                    fill={item.backgroundColor}
                />
            </div>
            <h4>{item.title}</h4>
        </div>
    );
}
