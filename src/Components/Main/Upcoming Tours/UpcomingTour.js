import React from "react";
import TourCards from "./TourCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import czech from "../../../Assets/img/flags/czech.svg";
import austria from "../../../Assets/img/flags/austria.svg";
import styles from "../../../CSS/Main/Upcoming/UpcomingTour.module.css";

const UpcomingTour = () => {
    const cards = [
        {
            day: "Fri",
            date: "12",
            month: "NOVEMBER",
            venue: "Národní divadlo",
            city: "PRAGUE",
            flag: czech,
        },
        {
            day: "Tues",
            date: "16",
            month: "NOVEMBER",
            venue: "Puma Place",
            city: "PRAGUE",
            flag: czech,
        },
        {
            day: "Sat",
            date: "20",
            month: "NOVEMBER",
            venue: "Staatsoper",
            city: "VIENNA",
            flag: austria,
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
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <p>Earlier</p>
                </div>
                <div className={styles.arrowContainer}>
                    <p>Later</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </section>
    );
};

export default UpcomingTour;
