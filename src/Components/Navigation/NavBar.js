import React, { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Languages from "./LangNav/Languages";
import styles from "../../CSS/Navigation/NavBar.module.css";

const NavBar = () => {
    const [navScroll, setNavScroll] = useState("");

    const scrollFunction = () => {
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
            ? setNavScroll("scroll")
            : setNavScroll("");
    };
    window.onscroll = () => {
        scrollFunction();
    };

    const navigationLinks = ["About", "Tour", "Gallery", "Contact"];

    return (
        <nav className={`${styles.navBar} ${styles[navScroll]}`} id="header">
            <Logo scroll={navScroll} />
            <NavLinks navigationLinks={navigationLinks} scroll={navScroll} />
            <Languages />
        </nav>
    );
};

export default NavBar;
