import React from "react";
import styles from "../../../CSS/Main/Upcoming/UpcomingTour.module.css";

const TourCards = ({ data, count, index, flipped, handleSetFlipped }) => {
    return (
        <div
            className={`${styles.card} ${
                count === index ? styles.cardActive : null
            }`}
        >
            <div
                className={`${styles.cardInner} ${
                    flipped && count === index && styles.cardFlipped
                }`}
            >
                <div className={styles.cardFront}>
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
                            <img
                                src={
                                    require(`../../../Assets/img/flags/${data.flag}.svg`)
                                        .default
                                }
                                alt={`${data.flag} flag`}
                            />
                        </div>
                    </div>
                    <div className={styles.tourDescription}></div>
                    <div className={styles.tourButton}>
                        <button
                            className="button"
                            onClick={count === index ? handleSetFlipped : null}
                        >
                            {data.button}
                        </button>
                    </div>
                </div>
                <div className={styles.cardBack}>
                    <div className={styles.dateDetails}>
                        <h3>{data.date}</h3>
                        <div className={styles.dayMonth}>
                            <h3>{data.day}</h3>
                            <h3>{data.month}</h3>
                        </div>
                    </div>
                    <div className={styles.location}>
                        <div className={styles.flexLocation}>                            
                            <h4>Check back Soon for more Info!</h4>
                        </div>
                    </div>
                    <div className={styles.tourDescription}></div>
                    <div className={styles.tourButton}>
                        <button
                            className="button"
                            onClick={count === index ? handleSetFlipped : null}
                        >
                            BACK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourCards;
