import React, { useState, useEffect } from "react";

import TourCards from "./TourCards";

import language from "../../../Languages/languages.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "../../../CSS/Main/Upcoming/UpcomingTour.module.css";

const UpcomingTour = ({ lang }) => {
    const [count, setCount] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    const handleSetWidth = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleSetWidth);
    }, [width]);

    const tablet = width < 769;
    const mobile = width < 480;

    const handleSetCountUp = () => {
        return count < 5 ? setCount(count + 1) : null;
    };
    const handleSetCountDown = () => {
        return count > 0 ? setCount(count - 1) : null;
    };

    const translateDesktop = [75, 45, 15, -15, -45, -75];
    const translateTablet = [125, 75, 25, -25, -75, -125];
    const translateMobile = [225, 135, 45, -45, -135, -225];

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
                style={{
                    transform: `translateX(${
                        mobile
                            ? translateMobile[count]
                            : tablet
                            ? translateTablet[count]
                            : translateDesktop[count]
                    }vw)`,
                }}
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
