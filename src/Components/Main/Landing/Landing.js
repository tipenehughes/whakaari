import React from "react";
import Background from "./Background";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../CSS/Landing/Landing.module.css";

const Landing = () => {
    return (
        <section className={`container ${styles.landingContainer}`}>
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
                <button className={styles.landingButton}>Upcoming Tour</button>
            </div>
            <div className={styles.scrollDown}>
                <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
            </div>
        </section>
    );
};

export default Landing;
