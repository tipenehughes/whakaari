import React from "react";
import language from "../../../Languages/languages.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../../../CSS/Main/Contact/Contact.module.css";

const ContactDescription = ({ lang }) => {
    return (
        <div className="description flexItem">
            <h2 className="header">{language[lang].contact.header}</h2>
            <p className="text">{language[lang].contact.text.one}</p>
            <p className="text">{language[lang].contact.text.two}</p>
            <div className={styles.socialIcons}>
                <a
                    href="https://www.facebook.com/WhakaariRotorua/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Facebook link"
                >
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
                <a
                    href="https://www.instagram.com/whakaarirotorua/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Instagram link"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                    href="https://www.youtube.com/channel/UCu34Rwtq3CRwPoyndkTcnTA"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="YouTube link"
                >
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
            </div>
        </div>
    );
};

export default ContactDescription;
