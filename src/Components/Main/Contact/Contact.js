import React from "react";
import styles from "../../../CSS/Main/Contact/Contact.module.css";
import ContactDescription from "./ContactDescription";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <section class={`section ${styles.contact}`} id="contact">
            <ContactForm />
            <ContactDescription />
        </section>
    );
};

export default Contact;
