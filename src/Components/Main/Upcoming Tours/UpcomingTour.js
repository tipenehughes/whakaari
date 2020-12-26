import React, { useState } from "react";
import TourCards from "./TourCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import czech from "../../../Assets/img/flags/czech.svg";
import austria from "../../../Assets/img/flags/austria.svg";
import german from "../../../Assets/img/flags/german.svg";
import styles from "../../../CSS/Main/Upcoming/UpcomingTour.module.css";

const UpcomingTour = () => {
    const [cardPlacement, setCardPlacement] = useState([0, 1, 2]);

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

    const handleSetCardPlacementNext = () => {
        const increase = cardPlacement.map((n) => n + 1);
        return cardPlacement[2] < cards.length - 1
            ? setCardPlacement(increase)
            : null;
    };
    const handleSetCardPlacementPrev = () => {
        const decrease = cardPlacement.map((n) => n - 1);
        return cardPlacement[0] <= 0 ? null : setCardPlacement(decrease);
    };

    return (
        <section className={`section ${styles.tour}`} id="tour">
            <div className={styles.tourHeader}>
                <h2 className="header">Upcoming Tour Dates</h2>
            </div>
            <div className={styles.tourCards}>
                <TourCards data={cards[cardPlacement[0]]} />
                <TourCards data={cards[cardPlacement[1]]} />
                <TourCards data={cards[cardPlacement[2]]} />
            </div>
            <div className={styles.tourArrows}>
                <div
                    className={styles.arrowContainer}
                    onClick={() => handleSetCardPlacementPrev()}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <p>Earlier</p>
                </div>
                <div
                    className={styles.arrowContainer}
                    onClick={() => handleSetCardPlacementNext()}
                >
                    <p>Later</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </section>
    );
};

export default UpcomingTour;
