import React from "react";
import styles from "../../../CSS/Main/Contact/Contact.module.css";
import language from "../../../Languages/languages.json";
import ContactDescription from "./ContactDescription";
import ContactForm from "./ContactForm";

const Contact = ({ lang }) => {
    return (
        <section
            className={`section ${styles.contact}`}
            id={language[lang].navigation.contact}
        >
            <ContactForm lang={lang} />
            <ContactDescription lang={lang} />
        </section>
    );
};

export default Contact;
