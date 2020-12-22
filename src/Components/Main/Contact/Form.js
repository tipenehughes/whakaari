import React from "react";
import Button from "../../Utilities/Button";
import styles from "../../../CSS/Main/ContactForm/ContactForm.module.css";

const Form = () => {
    return (
        <div className={styles.formContainer}>
            <form
                className={styles.form}
                id="form"
                method="POST"
                name="contact"
                data-netlify="true"
            >
                <div className={styles.formControl}>
                    <label class={styles.label} htmlFor="name">
                        Name
                    </label>
                    <br />
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                    />
                </div>
                <div className={styles.formControl}>
                    <label class={styles.label} htmlFor="email">
                        Email
                    </label>
                    <br />
                    <input
                        className={styles.input}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                    />
                </div>

                <div className={styles.formControl}>
                    <label class={styles.label} htmlFor="message">
                        Message
                    </label>
                    <br />
                    <textarea
                        className={styles.textArea}
                        name="message"
                        id="message"
                        placeholder="Message"
                    ></textarea>
                </div>
                <Button
                    input={
                        <input
                            className={styles.formSubmit}
                            id="submitBtn"
                            type="submit"
                        />
                    }
                />
            </form>
        </div>
    );
};

export default Form;
