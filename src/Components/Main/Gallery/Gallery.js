import React from "react";
import GridItems from "./GridItems";
import img1 from "../../../Assets/img/gallery/1.png";
import img2 from "../../../Assets/img/gallery/2.jpg";
import img3 from "../../../Assets/img/gallery/3.jpg";
import img4 from "../../../Assets/img/gallery/4.jpg";
import img5 from "../../../Assets/img/gallery/5.jpg";
import img6 from "../../../Assets/img/gallery/6.png";
import img7 from "../../../Assets/img/gallery/7.png";
import styles from "../../../CSS/Main/Gallery/Gallery.module.css";

const Gallery = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7];
    return (
        <section class={`section ${styles.gallery}`}>
            <div class={`description ${styles.flexItem}`}>
                <h2 class={`header ${styles.header}`}>Gallery</h2>
                <h3 class="subHeader">See some of our recent highlights</h3>
                <button class="button">Book an event</button>
            </div>
            <div class={styles.grid}>
                {images.map((data, i) => {
                    return <GridItems data={data} index={i} />;
                })}
            </div>
        </section>
    );
};

export default Gallery;
