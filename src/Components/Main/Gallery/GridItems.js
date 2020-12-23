import React from "react";
import styles from "../../../CSS/Main/Gallery/Gallery.module.css";

const GridItems = ({ data, index }) => {
    const num = index.toString();
    return (
        <div className={`${styles.gridItem} ${styles["image" + num]}`}>
            <img src={data} alt="" class={styles.gridImage} />
        </div>
    );
};

export default GridItems;
