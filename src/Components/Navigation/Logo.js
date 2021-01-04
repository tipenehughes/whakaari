import React from "react";
import smoothscroll from "smoothscroll-polyfill";
import styles from "../../CSS/Navigation/Logo.module.css";

const Logo = ({ scroll }) => {
    smoothscroll.polyfill();
    return (
        <header
            className={styles.logoContainer}
            onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
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
