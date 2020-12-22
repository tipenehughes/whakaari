import React from "react";
import styles from "../../../CSS/Main/Upcoming/TourItem.module.css";

const TourItem = ({ data }) => {
    return (
        <div className={styles.tourItem}>
            <div className={styles.dateDetails}>
                <div>
                    <h2 className={styles.date}>{data.date}</h2>
                </div>
                <div className={styles.dayMonth}>
                    <h3>{data.day}</h3>
                    <h3>{data.month}</h3>
                </div>
            </div>
            <div className={styles.venue}>
                <h2>{data.venue}</h2>
            </div>
            <div className={styles.city}>
                <h2>{data.city}</h2>
            </div>
        </div>
    );
};

export default TourItem;
