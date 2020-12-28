import React from "react";
import styles from "../../../CSS/Main/Gallery/Gallery.module.css";

const GridItems = ({ data, index, handleSetModal }) => {
    const num = index.toString();
    return (
        <div className={`${styles.gridItem} ${styles["image" + num]}`}>
            <img
                onClick={handleSetModal}
                src={data}
                alt=""
                className={styles.gridImage}
            />
        </div>
    );
};

export default GridItems;
