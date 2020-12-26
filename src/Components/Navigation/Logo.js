import React from "react";
import styles from "../../CSS/Navigation/Logo.module.css";

const Logo = ({ scroll }) => {
    return (
        <header
            className={styles.logoContainer}
            onClick={() => window.scrollTo(0, 0)}
        >
            <div className={`${styles.logo} ${styles[scroll]}`}>
                <h1 className={styles.header} id="whakaari">
                    WHAKAARI
                </h1>
                <span
                    className={`${styles.span} ${styles[scroll]}`}
                    id="logoSpan"
                >
                    {" "}
                </span>
                <h2 className={styles.subHeader} id="rotorua">
                    Rotorua
                </h2>
            </div>
        </header>
    );
};

export default Logo;
