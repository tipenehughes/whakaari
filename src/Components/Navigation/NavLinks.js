import React from "react";
import smoothscroll from 'smoothscroll-polyfill';
import styles from "../../CSS/Navigation/NavLinks.module.css";

const NavLinks = ({ navigationLinks, scroll }) => {
    smoothscroll.polyfill();
    const scrollTo = (e, link) => {
        e.preventDefault();
        const aboutSection = document.getElementById(link);
        aboutSection.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <ul className={styles.navLinksContainer}>
            {navigationLinks.map((links, index) => {
                return (
                    <li className={styles.navLinks} key={index}>
                        <a
                            className={styles[scroll]}
                            onClick={(e) => {
                                scrollTo(e, links);
                            }}
                            href={`#${links}`}
                            aria-label={`${links} section`}
                        >
                            {links}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavLinks;
