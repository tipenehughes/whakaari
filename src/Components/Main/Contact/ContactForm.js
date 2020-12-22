import React from "react";
import Form from "./Form";
import FacebookArea from "./FacebookArea";
import styles from "../../../CSS/Main/ContactForm/ContactForm.module.css";

const ContactForm = () => {
    return (
        <div className={styles.contactArea}>
            <Form />
            <FacebookArea />
        </div>
    );
};

export default ContactForm;
