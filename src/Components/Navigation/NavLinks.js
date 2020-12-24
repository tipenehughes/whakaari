import React from "react";
import styles from "../../CSS/Navigation/NavLinks.module.css";

const NavLinks = ({ navigationLinks, scroll }) => {
    return (
        <ul className={styles.navLinksContainer}>
            {navigationLinks.map((links, index) => {
                return (
                    <li className={styles.navLinks} key={index}>
                        <a
                            className={styles[scroll]}
                            href={`#${links}`}
                            aria-label="About section"
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
