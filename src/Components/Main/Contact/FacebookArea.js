import React from "react";
import styles from "../../../CSS/Main/ContactForm/ContactForm.module.css";

const FacebookArea = () => {
    return (
        <div class={styles.facebookArea}>
            <div
                className="fb-page"
                data-href="https://www.facebook.com/WhakaariRotorua/"
                data-tabs="timeline, events, messages"
                data-width="410"
                data-height="400"
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="false"
            >
                <blockquote
                    cite="https://www.facebook.com/WhakaariRotorua/"
                    className="fb-xfbml-parse-ignore"
                >
                    <a href="https://www.facebook.com/WhakaariRotorua/">
                        Whakaari Rotorua
                    </a>
                </blockquote>
            </div>
        </div>
    );
};

export default FacebookArea;
