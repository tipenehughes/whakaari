import React from "react";
import styles from "../../../CSS/Main/About/About.module.css";
import img from "../../../Assets/img/about.jpg";

const About = () => {
    return (
        <section className="section">
            <div className={`flexItem ${styles.imageFlexItem}`}>
                <img className={styles.image} src={img} alt="" />
            </div>
            <div className="description flexItem">
                <h2 className="header">About us</h2>
                <h3 className="subHeader">
                    Bringing Māori Soul to the Heart of Europe
                </h3>
                <p className="text">
                    Whakaari Rotorua are a group of performers from Rotorua, New
                    Zealand, who travel around the world sharing their Māori
                    culture through traditional song and dance.
                </p>
                <p className="text">
                    They specifically travel to the Czech Republic often as they
                    have a deep connection to this country – especially group
                    leader Frank Grapl Junior, as his father, František Grapl,
                    emigrated to New Zealand in 1950.
                </p>
                <button className="button">Book an event</button>
            </div>
        </section>
    );
};

export default About;
