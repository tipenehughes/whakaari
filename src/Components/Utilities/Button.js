import React from "react";
import styles from "../../CSS/Utilities/Button.module.css";

const Button = ({ input }) => {
    return (
        <button className={styles.button}>
            <span>{input}</span>
        </button>
    );
};

export default Button;
