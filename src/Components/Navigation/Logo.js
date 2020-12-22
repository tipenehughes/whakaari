import React from "react";
import styles from "../../CSS/Navigation/Logo.module.css";

const Logo = () => {
    return (
        <header className={styles.logoContainer}>
            <div className={styles.logo}>
                <h1 className={styles.header} id="whakaari">
                    WHAKAARI
                </h1>
                <span className={styles.span} id="logoSpan">
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
