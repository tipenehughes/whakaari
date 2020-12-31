import React from "react";
import img from "../../../Assets/img/about.jpg";
import language from "../../../Languages/languages.json";
import styles from "../../../CSS/Main/About/About.module.css";

const About = ({ lang }) => {
    const scrollToContact = () => {
        const aboutSection = document.getElementById(
            language[lang].navigation.contact
        );
        aboutSection.scrollIntoView();
    };
    return (
        <section
            className={`section ${styles.about}`}
            id={language[lang].navigation.about}
        >
            <div className={`flexItem ${styles.imageFlexItem}`}>
                <img className={styles.image} src={img} alt="" />
            </div>
            <div className="description flexItem">
                <h2 className="header">{language[lang].about.header}</h2>
                <h3 className="subHeader">{language[lang].about.subheader}</h3>
                <p className="text">{language[lang].about.text.one}</p>
                <p className="text">{language[lang].about.text.two}</p>
                <button className="button" onClick={scrollToContact}>
                    {language[lang].about.button}
                </button>
            </div>
        </section>
    );
};

export default About;
