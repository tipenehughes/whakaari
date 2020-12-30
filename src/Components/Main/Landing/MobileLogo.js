import React from "react";
import styles from "../../../CSS/Landing/MobileLogo.module.css";

const MobileLogo = () => {
    return (
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
    );
};

export default MobileLogo;
