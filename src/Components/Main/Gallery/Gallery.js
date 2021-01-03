import React, { useState } from "react";

import Carousel from "./Carousel";

import language from "../../../Languages/languages.json";

import img1 from "../../../Assets/img/gallery/slide1.png";
import img2 from "../../../Assets/img/gallery/slide2.png";
import img3 from "../../../Assets/img/gallery/slide3.png";
import img4 from "../../../Assets/img/gallery/slide4.png";
import img5 from "../../../Assets/img/gallery/slide5.png";
import img6 from "../../../Assets/img/gallery/slide6.png";
import img7 from "../../../Assets/img/gallery/slide7.png";
import img8 from "../../../Assets/img/gallery/slide8.png";
import img85 from "../../../Assets/img/gallery/slide8.5.png";
import img9 from "../../../Assets/img/gallery/slide9.png";
import img10 from "../../../Assets/img/gallery/slide10.png";
import img11 from "../../../Assets/img/gallery/slide11.png";
import img12 from "../../../Assets/img/gallery/slide12.png";
import img13 from "../../../Assets/img/gallery/slide13.png";
import img14 from "../../../Assets/img/gallery/slide14.png";
import img15 from "../../../Assets/img/gallery/slide15.png";

import styles from "../../../CSS/Main/Gallery/Gallery.module.css";

const Gallery = ({ lang }) => {
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
        const aboutSection = document.getElementById(
            language[lang].navigation.contact
        );
        aboutSection.scrollIntoView({ behavior: "smooth" });
    };

    // Array of images for gallery
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img85,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
    ];

    return (
        <section
            className={`section ${styles.gallery}`}
            id={language[lang].navigation.gallery}
        >
            <div className={`description ${styles.flexItem}`}>
                <h2 className={`header ${styles.header}`}>
                    {language[lang].gallery.header}
                </h2>
                <h3 className="subHeader">
                    {language[lang].gallery.subheader}
                </h3>
                <button className="button" onClick={scrollToContact}>
                    {language[lang].gallery.button}
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
