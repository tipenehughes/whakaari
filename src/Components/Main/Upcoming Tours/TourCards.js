import React from "react";
import styles from "../../../CSS/Main/Upcoming/UpcomingTour.module.css";

const TourCards = ({ data, count, index }) => {

    return (
        <div
            className={`${styles.card} ${
                count === index ? styles.cardActive : null
            }`}
        >
            <div className={styles.dateDetails}>
                <h3>{data.date}</h3>
                <div className={styles.dayMonth}>
                    <h3>{data.day}</h3>
                    <h3>{data.month}</h3>
                </div>
            </div>
            <div className={styles.location}>
                <div className={styles.flexLocation}>
                    <h4>{data.venue}</h4>
                    <h4>{data.city}</h4>
                </div>
                <div className={styles.flag}>
                    <img src="" alt="" />
                </div>
            </div>
            <div className={styles.tourDescription}></div>
            <div className={styles.tourButton}>
                <button className="button">{data.button}</button>
            </div>
        </div>
    );
};

export default TourCards;
