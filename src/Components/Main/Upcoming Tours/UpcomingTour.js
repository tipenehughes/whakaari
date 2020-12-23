import React from "react";
import TourCards from "./TourCards";
import styles from "../../../CSS/Main/Upcoming/UpcomingTour.module.css";

const UpcomingTour = () => {
    const cards = [
        {
            day: "Fri",
            date: "12",
            month: "NOVEMBER",
            venue: "Národní divadlo",
            city: "PRAHA",
        },
        {
            day: "Tues",
            date: "16",
            month: "NOVEMBER",
            venue: "Puma Place",
            city: "PRAHA",
        },
        {
            day: "Sat",
            date: "20",
            month: "NOVEMBER",
            venue: "Grandhotel Pupp",
            city: "PRAHA",
        },
    ];
    return (
        <section className={`section ${styles.tour}`}>
            <div className={styles.tourHeader}>
                <h2 className="header">Upcoming Tour Dates</h2>
            </div>
            <div className={styles.tourCards}>
                {cards.map((data) => {
                    return <TourCards data={data} />;
                })}
            </div>
            <div className={styles.tourArrows}>
                <div className={styles.arrowContainer}>
                    <i className="fas fa-arrow-left"></i>
                    <p>Earlier</p>
                </div>
                <div className={styles.arrowContainer}>
                    <p>Later</p>
                    <i className="fas fa-arrow-right"></i>
                </div>
            </div>
        </section>
    );
};

export default UpcomingTour;
