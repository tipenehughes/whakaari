import React, { useState, useEffect } from "react";
import GridItems from "./GridItems";
import Modal from "./Modal";
import img1 from "../../../Assets/img/gallery/1.png";
import img2 from "../../../Assets/img/gallery/2.jpg";
import img3 from "../../../Assets/img/gallery/3.jpg";
import img4 from "../../../Assets/img/gallery/4.jpg";
import img5 from "../../../Assets/img/gallery/5.jpg";
import img6 from "../../../Assets/img/gallery/6.png";
import img7 from "../../../Assets/img/gallery/7.png";
import styles from "../../../CSS/Main/Gallery/Gallery.module.css";

const Gallery = () => {
    const [modal, setModal] = useState(false);
    const [image, setImage] = useState("");
    const [screenWidth, setScreenWidth] = useState("");

    const handleSetScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleSetScreenWidth);
    }, [screenWidth]);

    const handleSetModal = (e) => {
        setModal(true);
        setImage(e.target.getAttribute("src"));
    };

    const handleCloseModal = (e) => {
        setModal(false);
        setImage("");
    };

    const scrollToContact = () => {
        const aboutSection = document.getElementById("contact");
        aboutSection.scrollIntoView();
    };

    const images = [img1, img2, img3, img4, img5, img6, img7];
    return (
        <section className={`section ${styles.gallery}`} id="gallery">
            {modal && (
                <Modal image={image} handleCloseModal={handleCloseModal} />
            )}

            {window.innerWidth >= 769 && (
                <div className={`description ${styles.flexItem}`}>
                    <h2 className={`header ${styles.header}`}>Gallery</h2>
                    <h3 className="subHeader">
                        See some of our recent highlights
                    </h3>
                    <button className="button" onClick={scrollToContact}>
                        Book an event
                    </button>
                </div>
            )}

            <div className={styles.grid}>
                {window.innerWidth < 769 && (
                    <div className={`description ${styles.flexItem}`}>
                        <h2 className={`header ${styles.header}`}>Gallery</h2>
                        <h3 className="subHeader">
                            See some of our recent highlights
                        </h3>
                        <button className="button" onClick={scrollToContact}>
                            Book an event
                        </button>
                    </div>
                )}
                {images.map((data, i) => {
                    return (
                        <GridItems
                            data={data}
                            index={i}
                            key={i}
                            handleSetModal={handleSetModal}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Gallery;
