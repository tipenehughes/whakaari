import React from "react";
import ImageCarousel from "./About/ImageCarousel";
import TourDates from "./Upcoming Tours/TourDates";
import VideoBreak from "./Upcoming Tours/VideoBreak";
import SocialIcons from "../Utilities/SocialIcons";
import ContactForm from "./Contact/ContactForm";
import styles from "../../CSS/Main/Section.module.css";

const Section = ({ data }) => {
    const setRoute = (d) => {
        const routeName = d.heading.split(" ")[0];
        return routeName.toLowerCase();
    };

    return (
        <section className={`container ${styles.section}`} id={setRoute(data)}>
            <div className={styles.headingContainer}>
                <h2 className={styles.sectionHeading}>
                    {data.heading}
                    <span className={styles.sectionSpan}></span>
                </h2>
            </div>
            {data.subHeading && (
                <h3 className={styles.sectionSubheading}>{data.subHeading}</h3>
            )}
            {data.p1 && <p className={styles.sectionP}>{data.p1}</p>}
            {data.p2 && <p className={styles.sectionP}>{data.p2}</p>}
            {data.link && (
                <a href="#" className={styles.sectionLink}>
                    {data.link}
                </a>
            )}
            {data.socialIcons && <SocialIcons input={"socialIcons"} />}
            {data.carousel && <ImageCarousel />}
            {data.table && <TourDates />}
            {data.video && <VideoBreak />}
            {data.contactForm && <ContactForm />}
        </section>
    );
};

export default Section;
