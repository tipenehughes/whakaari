import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../../../CSS/Main/Contact/Contact.module.css";

const ContactDescription = () => {
    return (
        <div className="description flexItem">
            <h2 className="header">Contact Us</h2>
            <p className="text">
                To contact us about an event booking, to find out more about
                what we do, or just to say Kia Ora! - please fill out and submit
                the form below or visit any of our social media pages to send us
                a message.
            </p>
            <p className="text">We look forward to hearing from you!</p>
            <div className={styles.socialIcons}>
                <a href="#facebook">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
                <a href="#instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#youtube">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
            </div>
        </div>
    );
};

export default ContactDescription;
