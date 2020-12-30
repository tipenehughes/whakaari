import React, { useState } from "react";

import Carousel from "./Carousel";

import img1 from "../../../Assets/img/gallery/1.jpg";
import img2 from "../../../Assets/img/gallery/2.jpg";
import img3 from "../../../Assets/img/gallery/3.png";
import img4 from "../../../Assets/img/gallery/4.jpg";
import img5 from "../../../Assets/img/gallery/5.jpg";
import img6 from "../../../Assets/img/gallery/6.png";
import img7 from "../../../Assets/img/gallery/7.png";

import styles from "../../../CSS/Main/Gallery/Gallery.module.css";

const Gallery = () => {
    const [carouselImage, setCarouselImage] = useState(0);

    const handleSetCarouselImageUp = () => {
        carouselImage < images.length - 1
            ? setCarouselImage(carouselImage + 1)
            : setCarouselImage(0);
    };
    const handleSetCarouselImageDown = () => {
        carouselImage > 0
            ? setCarouselImage(carouselImage - 1)
            : setCarouselImage(images.length - 1);
    };
    // Scroll trigger for button
    const scrollToContact = () => {
        const aboutSection = document.getElementById("contact");
        aboutSection.scrollIntoView();
    };

    // Array of images for gallery
    const images = [img1, img2, img3, img4, img5, img6, img7];

    return (
        <section className={`section ${styles.gallery}`} id="gallery">
            <div className={`description ${styles.flexItem}`}>
                <h2 className={`header ${styles.header}`}>Gallery</h2>
                <h3 className="subHeader">See some of our recent highlights</h3>
                <button className="button" onClick={scrollToContact}>
                    Book an event
                </button>
            </div>
            <Carousel
                images={images}
                carouselImage={carouselImage}
                handleSetCarouselImageUp={handleSetCarouselImageUp}
                handleSetCarouselImageDown={handleSetCarouselImageDown}
            />
        </section>
    );
};

export default Gallery;
