import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../CSS/Main/Gallery/Gallery.module.css";

const Carousel = ({
    images,
    carouselImage,
    handleSetCarouselImageUp,
    handleSetCarouselImageDown,
}) => {
    return (
        <div className={styles.carouselContainer}>
            <div className={styles.imageContainer}>
                <button
                    className={styles.arrowContainer}
                    onClick={handleSetCarouselImageDown}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <img
                    className={styles.carouselImage}
                    src={images[carouselImage]}
                    alt=""
                />
                <button
                    className={styles.arrowContainer}
                    onClick={handleSetCarouselImageUp}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
