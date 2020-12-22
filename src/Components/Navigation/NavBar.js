import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Languages from "./Languages";
import styles from "../../CSS/Navigation/NavBar.module.css";

const NavBar = () => {
    const navigationLinks = ["About", "Tour", "Contact"];

    return (
        <nav className={styles.navBar} id="header">
            <Logo />
            <NavLinks navigationLinks={navigationLinks} />
            <Languages />
        </nav>
    );
};

export default NavBar;
