import React from "react";
import styles from "../../../CSS/Main/Gallery/Modal.module.css";

const Modal = ({ image, handleCloseModal }) => {
    return (
        <div className={styles.container} style={{ top: window.scrollY }}>
            <div className={styles.close} onClick={handleCloseModal}>
                <p>X</p>
            </div>
            <div className={styles.imageContainer} onClick={handleCloseModal}>
                <img
                    className={styles.image}
                    src={image}
                    alt=""
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        </div>
    );
};

export default Modal;
