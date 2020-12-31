import React from "react";
import language from "../../../Languages/languages.json";
import styles from "../../../CSS/Main/Contact/Contact.module.css";

const ContactForm = ({ lang }) => {
    return (
        <div className={`${styles.formContainer} flexItem`}>
            <form id="form" method="POST" name="contact" data-netlify="true">
                <div className={styles.formControl}>
                    <label htmlFor="name" className={styles.formLabel}>
                        {language[lang].contact.name}
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder={language[lang].contact.name}
                        className={styles.formInput}
                    />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="email" className={styles.formLabel}>
                        {language[lang].contact.email}
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder={language[lang].contact.email}
                        className={styles.formInput}
                    />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="message" className={styles.formLabel}>
                        {language[lang].contact.message}
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder={language[lang].contact.message}
                        className={`${styles.formInput} ${styles.formTextarea}`}
                    ></textarea>
                </div>
                <button className={`button ${styles.submitBtn}`}>
                    <input
                        type="submit"
                        className={styles.formSubmit}
                        id="submitBtn"
                        value={language[lang].contact.submit}
                    />
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
