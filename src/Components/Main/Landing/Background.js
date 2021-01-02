import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import bg1 from "../../../Assets/img/bg1.png";
import bg2 from "../../../Assets/img/bg2.png";
import bg3 from "../../../Assets/img/bg3.png";
import tabletBg from "../../../Assets/img/tabletBg1.png";

import styles from "../../../CSS/Landing/Landing.module.css";

const Background = () => {
    const [bg, setBg] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    const handleSetWidth = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleSetWidth);
    }, [width]);

    const variants = {
        hidden: {
            opacity: 0,
            transition: {
                duration: 0.5,
                type: "ease",
            },
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                type: "ease",
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 3,
                type: "ease",
            },
        },
    };

    const bgImg = [bg1, bg2, bg3];

    // Function for landing background image slideshow
    const counter = () => {
        setTimeout(() => {
            return bg < bgImg.length - 1 ? setBg(bg + 1) : setBg(0);
        }, 5000);
    };
    useEffect(() => {
        counter();
    }, [bg]);

    return (
        <div className={styles.background}>
            {width <= 480 && <img className={styles.backgroundImage}></img>}
            {width <= 768 && (
                <img src={tabletBg} className={styles.backgroundImage}></img>
            )}
            {width > 768 && (
                <AnimatePresence>
                    <motion.img
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={styles.backgroundImage}
                        src={bgImg[bg]}
                        alt="#"
                        key={bgImg[bg]}
                    />
                </AnimatePresence>
            )}
        </div>
    );
};

export default Background;
