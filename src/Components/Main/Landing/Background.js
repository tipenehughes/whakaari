import React, { useState, useEffect } from "react";
import bg1 from "../../../Assets/img/bg1.png";
import bg2 from "../../../Assets/img/bg2.png";
import bg3 from "../../../Assets/img/bg3.png";
import styles from "../../../CSS/Landing/Landing.module.css";

const Background = () => {
    const [bg, setBg] = useState("");
    const bgImg = [bg1, bg2, bg3];

    // Function for landing background image slideshow
    function backgroundSequence() {
        window.clearTimeout();
        const secs = 8;
        let k = 0;
        for (let i = 0; i < bgImg.length; i++) {
            setTimeout(function () {
                setBg(bgImg[k]);
                if (k + 1 === bgImg.length) {
                    setTimeout(function () {
                        backgroundSequence();
                    }, secs * 1000);
                } else {
                    k++;
                }
            }, secs * 1000 * i);
        }
    }
    useEffect(() => {
        backgroundSequence();
    }, []);

    return (
        <div className={styles.background}>
            <img className={styles.backgroundImage} src={bg} alt="#" />
        </div>
    );
};

export default Background;
