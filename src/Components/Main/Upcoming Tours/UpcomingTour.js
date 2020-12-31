import React, { useState } from "react";
import TourCards from "./TourCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import czech from "../../../Assets/img/flags/czech.svg";
import austria from "../../../Assets/img/flags/austria.svg";
import german from "../../../Assets/img/flags/german.svg";
import styles from "../../../CSS/Main/Upcoming/UpcomingTour.module.css";

const UpcomingTour = () => {
    const [translate, setTranslate] = useState([75, 45, 15, -15, -45, -75]);
    const [count, setCount] = useState(0);

    const handleSetCountUp = () => {
        return count < 5 ? setCount(count + 1) : null;
    };
    const handleSetCountDown = () => {
        return count > 0 ? setCount(count - 1) : null;
    };

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
            day: "Thurs",
            date: "18",
            month: "NOVEMBER",
            venue: "Grandhotel Pupp",
            city: "KARLOVY VARY",
            flag: czech,
        },
        {
            day: "Sat",
            date: "20",
            month: "NOVEMBER",
            venue: "Wiener Staatsoper",
            city: "VIENNA",
            flag: austria,
        },
        {
            day: "Sun",
            date: "21",
            month: "NOVEMBER",
            venue: "Grosses Festipielhaus",
            city: "SALZBURG",
            flag: austria,
        },
        {
            day: "Tues",
            date: "22",
            month: "NOVEMBER",
            venue: "Staatstoper Berlin",
            city: "BERLIN",
            flag: german,
        },
    ];

    return (
        <section className={`section ${styles.tour}`} id="tour">
            <div className={styles.tourHeader}>
                <h2 className="header">Upcoming Tour Dates</h2>
            </div>
            <div
                className={styles.tourCards}
                style={{ transform: `translateX(${translate[count]}vw)` }}
            >
                {cards.map((card, i) => {
                    return <TourCards data={card} key={i} count={count} index={i} />;
                })}
            </div>
            <div className={styles.tourArrows}>
                <div
                    className={styles.arrowContainer}
                    onClick={handleSetCountDown}
                >
                    <FontAwesomeIcon
                        className={styles.arrowLeft}
                        icon={faArrowLeft}
                    />
                    <p>Earlier</p>
                </div>
                <div
                    className={styles.arrowContainer}
                    onClick={handleSetCountUp}
                >
                    <p>Later</p>
                    <FontAwesomeIcon
                        className={styles.arrowRight}
                        icon={faArrowRight}
                    />
                </div>
            </div>
        </section>
    );
};

export default UpcomingTour;
