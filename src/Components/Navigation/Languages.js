import React from "react";
import styles from "../../CSS/Navigation/Languages.module.css";

const Languages = () => {
    return (
        <div className={styles.languagesContainer}>
            <div
                className={styles.languages}
                aria-label="Language selector"
            ></div>
        </div>
    );
};

export default Languages;
