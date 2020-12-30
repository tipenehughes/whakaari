import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import bg1 from "../../../Assets/img/bg1.png";
import bg2 from "../../../Assets/img/bg2.png";
import bg3 from "../../../Assets/img/bg3.png";

import styles from "../../../CSS/Landing/Landing.module.css";

const Background = () => {
    const [bg, setBg] = useState(0);

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
                duration: 0.5,
                type: "ease",
            },
        },
    };

    const bgImg = [bg1, bg2, bg3];

    // Function for landing background image slideshow
    let count = 0;
    

    return (
        <div className={styles.background}>
            <AnimatePresence>
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={styles.backgroundImage}
                    src={bgImg[count]}
                    alt="#"
                    key={bgImg[count]}
                />
            </AnimatePresence>
        </div>
    );
};

export default Background;
