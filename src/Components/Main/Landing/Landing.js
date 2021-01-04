import React from "react";
import MobileLogo from "./MobileLogo";
import Background from "./Background";
import smoothscroll from 'smoothscroll-polyfill';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import language from "../../../Languages/languages.json";
import styles from "../../../CSS/Landing/Landing.module.css";

const Landing = ({ lang }) => {
    smoothscroll.polyfill();
    const scrollToAbout = () => {
        const aboutSection = document.getElementById(
            language[lang].navigation.about
        );
        aboutSection.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToTours = () => {
        const tourSection = document.getElementById(
            language[lang].navigation.tour
        );
        tourSection.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <section className={`container ${styles.landingContainer}`}>
            {window.innerWidth < 480 && <MobileLogo />}
            <Background />
            <div className={styles.landing}>
                <div className="welcome">
                    <h2 className={styles.landingHeader}>
                        {language[lang].landing.header}
                    </h2>
                    <h3 className={styles.landingSubHeader}>
                        {language[lang].landing.subheader.one}
                        <br />
                        {language[lang].landing.subheader.two}
                    </h3>
                </div>
                <button
                    className={styles.landingButton}
                    onClick={scrollToTours}
                >
                    {language[lang].landing.button}
                </button>
            </div>
            <div className={styles.scrollDown}>
                <FontAwesomeIcon
                    icon={faAngleDown}
                    className={styles.icon}
                    onClick={scrollToAbout}
                />
            </div>
        </section>
    );
};

export default Landing;
