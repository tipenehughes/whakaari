import React, { useState } from "react";

import TourCards from "./TourCards";

import language from "../../../Languages/languages.json";

import czech from "../../../Assets/img/flags/czech.svg";
import austria from "../../../Assets/img/flags/austria.svg";
import german from "../../../Assets/img/flags/german.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "../../../CSS/Main/Upcoming/UpcomingTour.module.css";

const UpcomingTour = ({ lang }) => {
    const [count, setCount] = useState(0);

    const handleSetCountUp = () => {
        return count < 5 ? setCount(count + 1) : null;
    };
    const handleSetCountDown = () => {
        return count > 0 ? setCount(count - 1) : null;
    };

    const translate = [75, 45, 15, -15, -45, -75];

    const cards = [
        language[lang].tours.card.one,
        language[lang].tours.card.two,
        language[lang].tours.card.three,
        language[lang].tours.card.four,
        language[lang].tours.card.five,
        language[lang].tours.card.six,
    ];

    return (
        <section
            className={`section ${styles.tour}`}
            id={language[lang].navigation.tour}
        >
            <div className={styles.tourHeader}>
                <h2 className="header">{language[lang].tours.header}</h2>
            </div>
            <div
                className={styles.tourCards}
                style={{ transform: `translateX(${translate[count]}vw)` }}
            >
                {cards.map((card, i) => {
                    return (
                        <TourCards
                            data={card}
                            key={i}
                            count={count}
                            index={i}
                        />
                    );
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
                    <p>{language[lang].tours.earlier}</p>
                </div>
                <div
                    className={styles.arrowContainer}
                    onClick={handleSetCountUp}
                >
                    <p>{language[lang].tours.later}</p>
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
