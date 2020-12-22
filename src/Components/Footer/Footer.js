import React from "react";
import SocialIcons from "../Utilities/SocialIcons";
import styles from "../../CSS/Footer/Footer.module.css";
import sponsor from "../../Assets/img/sponsor.png";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <SocialIcons input={styles.footerItem} />
                <div className={styles.footerItem}>
                    <ul className={styles.footerNav}>
                        <li>
                            <a className={styles.navLinks} href="#home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className={styles.navLinks} href="#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a className={styles.navLinks} href="#tour">
                                Tour
                            </a>
                        </li>
                        <li>
                            <a className={styles.navLinks} href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.footerItem} ${styles.footerSponsor}`}>
                    <p>Proud partners of</p>
                    <a
                        className={styles.sponsorLink}
                        href="https://www.aotearoa.cz/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Link to sponsor"
                    >
                        <img
                            className={styles.sponsorImage}
                            src={sponsor}
                            alt="Sponsor www.aotearoa.cz"
                        />
                    </a>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>Whakaari Rotorua &copy; 2020</p>
            </div>
        </footer>
    );
};

export default Footer;
