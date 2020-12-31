import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Languages from "./LangNav/Languages";
import MobileNav from "./MobileNav";

import language from "../../Languages/languages.json";
import styles from "../../CSS/Navigation/NavBar.module.css";

const NavBar = ({ handleSetLanguage, lang }) => {
    const [navScroll, setNavScroll] = useState("");
    const [mobileMenu, setMobileMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    // To set screen width for mobile menu and NavLinks
    const handleResize = () => {
        setWidth(window.innerWidth);
    };
    // To set overflow hidden on body element when menu open to prevent scroll
    const bodyScroll = () => {
        mobileMenu === true
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = null);
    };
    // To set state if mobile menu is open
    const handleSetMobileMenu = () => {
        return !mobileMenu ? setMobileMenu(true) : setMobileMenu(false);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        bodyScroll();
    }, [mobileMenu]);

    // To set desktop navBar to scroll size
    const scrollFunction = () => {
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
            ? setNavScroll("scroll")
            : setNavScroll("");
    };
    window.onscroll = () => {
        scrollFunction();
    };

    const navigationLinks = [
        language[lang].navigation.about,
        language[lang].navigation.tour,
        language[lang].navigation.gallery,
        language[lang].navigation.contact,
    ];

    return (
        <>
            <nav
                className={`${styles.navBar} ${styles[navScroll]}`}
                id="header"
            >
                <Logo scroll={navScroll} />
                <NavLinks
                    navigationLinks={navigationLinks}
                    scroll={navScroll}
                />
                <Languages handleSetLanguage={handleSetLanguage} />
            </nav>
            <MobileNav
                handleSetMobileMenu={handleSetMobileMenu}
                menuOpen={mobileMenu}
                width={width}
                navigationLinks={navigationLinks}
                handleSetLanguage={handleSetLanguage}
            />
        </>
    );
};

export default NavBar;
