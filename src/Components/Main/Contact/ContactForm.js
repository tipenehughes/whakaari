import React from "react";
import styles from "../../../CSS/Main/Contact/Contact.module.css";

const ContactForm = () => {
    return (
        <div className={`${styles.formContainer} flexItem`}>
            <form id="form" method="POST" name="contact" data-netlify="true">
                <div className={styles.formControl}>
                    <label for="name" className={styles.formLabel}>
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className={styles.formInput}
                    />
                </div>
                <div className={styles.formControl}>
                    <label for="email" className={styles.formLabel}>
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className={styles.formInput}
                    />
                </div>
                <div className={styles.formControl}>
                    <label for="message" className={styles.formLabel}>
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        className={`${styles.formInput} ${styles.formTextarea}`}
                    ></textarea>
                </div>
                <button className="button">
                    <input
                        type="submit"
                        className={styles.formSubmit}
                        id="submitBtn"
                    />
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
