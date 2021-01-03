import React from "react";

import english from "../../Assets/img/flags/english.svg";
import czech from "../../Assets/img/flags/czech.svg";
import polish from "../../Assets/img/flags/polish.svg";
import german from "../../Assets/img/flags/german.svg";

import { motion } from "framer-motion";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../../CSS/Navigation/MobileNav.module.css";

const MobileNav = ({
    handleSetMobileMenu,
    handleSetLanguage,
    menuOpen,
    width,
    navigationLinks,
}) => {
    // Mobile menu animations
    const mobileMenu = {
        closed: {
            opacity: 0,
            x: width,
            transition: {
                duration: 0.5,
                type: "ease",
            },
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                type: "ease",
            },
        },
    };
    // Scroll to links
    const scrollTo = (e, link) => {
        e.preventDefault();
        const aboutSection = document.getElementById(link);
        aboutSection.scrollIntoView({ behavior: "smooth" });
        handleSetMobileMenu();
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.mobileNav}>
                <motion.div
                    className={styles.mobileNavOverlayHidden}
                    variants={mobileMenu}
                    inital={{ opacity: 0 }}
                    animate={menuOpen ? "open" : "closed"}
                    style={{ transform: `translateX(${width})` }}
                >
                    <div className={styles.logo}>
                        <h1 className={styles.header} id="whakaari">
                            WHAKAARI
                        </h1>
                        <span className={styles.span} id="logoSpan">
                            {" "}
                        </span>
                        <h2 className={styles.subHeader} id="rotorua">
                            Rotorua
                        </h2>
                    </div>
                    <ul className={styles.mobileNavOptions}>
                        {navigationLinks.map((links, index) => {
                            return (
                                <li
                                    className={styles.mobileMenuItem}
                                    onClick={(e) => {
                                        scrollTo(e, links);
                                    }}
                                    key={index}
                                >
                                    <a href={`#${links}`}>
                                        {links.toUpperCase()}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className={styles.flagsContainer}>
                        <li onClick={handleSetLanguage}>
                            <img
                                src={english}
                                data-code="EN"
                                alt=""
                                className={styles.flag}
                            />
                        </li>
                        <li onClick={handleSetLanguage}>
                            <img
                                src={czech}
                                data-code="CZ"
                                alt=""
                                className={styles.flag}
                            />
                        </li>
                        <li onClick={handleSetLanguage}>
                            <img
                                src={german}
                                data-code="DE"
                                alt=""
                                className={styles.flag}
                            />
                        </li>
                        <li onClick={handleSetLanguage}>
                            <img
                                src={polish}
                                data-code="PL"
                                alt=""
                                className={styles.flag}
                            />
                        </li>
                    </ul>
                </motion.div>
                <button
                    className={styles.mobileMenu}
                    onClick={() => handleSetMobileMenu()}
                    aria-label="Toggle menu"
                    aria-controls="mobileNavOverlayHidden"
                >
                    <FontAwesomeIcon icon={faBars} className={styles.icon} />
                </button>
            </div>
        </nav>
    );
};

export default MobileNav;
