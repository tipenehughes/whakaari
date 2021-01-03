import React from "react";
import sponsor from "../../Assets/img/sponsor.png";
import language from "../../Languages/languages.json";
import styles from "../../CSS/Footer/Footer.module.css";

const Footer = ({ lang }) => {
    const navigationLinks = [
        language[lang].navigation.about,
        language[lang].navigation.tour,
        language[lang].navigation.gallery,
        language[lang].navigation.contact,
    ];
    const scrollTo = (e, link) => {
        e.preventDefault();
        const aboutSection = document.getElementById(link);
        aboutSection.scrollIntoView({ behavior: "smooth" });
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
                <p>{language[lang].sponsor}</p>
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
