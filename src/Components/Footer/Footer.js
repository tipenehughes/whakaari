import React from "react";
import sponsor from "../../Assets/img/sponsor.png";
import styles from "../../CSS/Footer/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">TOUR</a>
                <a href="#">GALLERY</a>
                <a href="#">CONTACT</a>
            </div>
            <div className={styles.sponsor}>
                <p>Proudly sponsored by</p>
                <div className={styles.sponsorImage}>
                    <img src={sponsor} alt="" />
                </div>
            </div>
            <div className={styles.copyright}>
                <p>Whakaari Rotorua 2020</p>
            </div>
        </footer>
    );
};

export default Footer;
