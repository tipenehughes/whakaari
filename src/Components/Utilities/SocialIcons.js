import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../../CSS/Utilities/SocialIcons.module.css";

const SocialIcons = ({ input }) => {
    return (
        <div className={input}>
            <a
                href="https://www.facebook.com/WhakaariRotorua/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook link"
            >
                <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
            </a>
            <a
                href="https://www.instagram.com/whakaarirotorua/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram link"
            >
                <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
            </a>
            <a
                href="https://www.youtube.com/channel/UCu34Rwtq3CRwPoyndkTcnTA"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="YouTube link"
            >
                <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
            </a>
        </div>
    );
};

export default SocialIcons;
