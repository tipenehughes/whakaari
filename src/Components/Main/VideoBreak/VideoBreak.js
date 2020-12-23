import React from "react";
import styles from "../../../CSS/Main/VideoBreak/VideoBreak.module.css";

const VideoBreak = () => {
    return (
        <section className={styles.videoBreak}>
            <div className={styles.videoBreakContainer}>
                <div className={styles.video}>
                    <iframe
                        title="Youtube Video"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/B06-fvnjp2A?start=26"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default VideoBreak;
