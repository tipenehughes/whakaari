import React from "react";
import styles from "../../CSS/Navigation/NavLinks.module.css";

const NavLinks = ({ navigationLinks, scroll }) => {
    const scrollTo = (e, link) => {
        e.preventDefault();
        const aboutSection = document.getElementById(link);
        aboutSection.scrollIntoView();
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
