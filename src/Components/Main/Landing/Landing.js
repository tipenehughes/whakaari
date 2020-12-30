import React from "react";
import MobileLogo from "./MobileLogo";
import Background from "./Background";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../CSS/Landing/Landing.module.css";

const Landing = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        aboutSection.scrollIntoView();
    };
    const scrollToTours = () => {
        const tourSection = document.getElementById("tour");
        tourSection.scrollIntoView();
    };
    return (
        <section className={`container ${styles.landingContainer}`}>
            {window.innerWidth < 480 && <MobileLogo />}
            <Background />
            <div className={styles.landing}>
                <div class="welcome">
                    <h2 className={styles.landingHeader}>Kia Ora!</h2>
                    <h3 className={styles.landingSubHeader}>
                        From Aotearoa/New Zealand,
                        <br />
                        to the World.
                    </h3>
                </div>
                <button
                    className={styles.landingButton}
                    onClick={scrollToTours}
                >
                    Upcoming Tour
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
