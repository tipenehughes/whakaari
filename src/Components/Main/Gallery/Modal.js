import React from "react";
import styles from "../../../CSS/Main/Gallery/Modal.module.css";

const Modal = () => {
    return (
        <div className={styles.container}>
            <div className={styles.close}>
                <p>X</p>
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.image} src="" alt="" />
            </div>
        </div>
    );
};

export default Modal;
