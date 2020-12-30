import React from "react";
import sponsor from "../../Assets/img/sponsor.png";
import styles from "../../CSS/Footer/Footer.module.css";

const Footer = () => {
    const navigationLinks = ["about", "tour", "gallery", "contact"];
    const scrollTo = (e, link) => {
        e.preventDefault();
        const aboutSection = document.getElementById(link);
        aboutSection.scrollIntoView();
    };
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                {navigationLinks.map((links, i) => {
                    return (
                        <a
                            onClick={(e) => {
                                scrollTo(e, links);
                            }}
                            href={`#${links}`}
                            aria-label={`${links} section`}
                            key={i}
                        >
                            {links.toUpperCase()}
                        </a>
                    );
                })}
            </div>
            <div className={styles.sponsor}>
                <p>Proud partners of</p>
                <a
                    className={styles.sponsorImage}
                    href="https://www.aotearoa.cz/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Link to sponsor"
                >
                    <img src={sponsor} alt="" />
                </a>
            </div>
            <div className={styles.copyright}>
                <p>Whakaari Rotorua 2020</p>
            </div>
        </footer>
    );
};

export default Footer;
