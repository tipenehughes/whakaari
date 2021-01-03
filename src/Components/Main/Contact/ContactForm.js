import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import language from "../../../Languages/languages.json";
import styles from "../../../CSS/Main/Contact/Contact.module.css";

const ContactForm = ({ lang }) => {
    const toastSuccess = () => {
        return toast("Great! We'll be in touch soon :)", {
            toastId: "success",
        });
    };
    const toastError = () => {
        return toast("Oops! Check your details and try again.", {
            toastId: "error",
        });
    };

    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(data[key])
            )
            .join("&");
    };

    return (
        <Formik
            initialValues={{
                email: "",
                name: "",
                message: "",
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .max(15, "Must be 15 characters or less")
                    .required("Required"),
                email: Yup.string()
                    .email("Invalid email address")
                    .required("Required"),
                message: Yup.string()
                    .max(120, "Must be 120 characters or less")
                    .required("Required"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                fetch("/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: encode({
                        "form-name": "contact",
                        ...values,
                    }),
                })
                    .then(() => {
                        toastSuccess();
                        setSubmitting(false);
                        console.log(values);
                        resetForm();
                    })
                    .catch((error) => {
                        console.log(error);
                        toastError();
                        setSubmitting(false);
                    });
            }}
        >
            {({ errors, touched, isSubmitting }) => (
                <div className={`${styles.formContainer} flexItem`}>
                    <Form>
                        <input type="hidden" name="form-name" value="contact" />
                        <label htmlFor="name" className={styles.formLabel}>
                            {language[lang].contact.name}
                        </label>
                        <Field
                            name="name"
                            type="text"
                            id="name"
                            placeholder={language[lang].contact.name}
                            className={`${styles.formInput} ${
                                touched.name && errors.name
                                    ? styles.formInputError
                                    : touched.name && !errors.name
                                    ? styles.formInputSuccess
                                    : null
                            }`}
                        />
                        <ErrorMessage component={"p"} name="name" />
                        <label htmlFor="email" className={styles.formLabel}>
                            {language[lang].contact.email}
                        </label>
                        <Field
                            name="email"
                            type="email"
                            id="email"
                            placeholder={language[lang].contact.email}
                            className={`${styles.formInput} ${
                                touched.email && errors.email
                                    ? styles.formInputError
                                    : touched.email && !errors.email
                                    ? styles.formInputSuccess
                                    : null
                            }`}
                        />
                        <ErrorMessage component={"p"} name="email" />
                        <label htmlFor="message" className={styles.formLabel}>
                            {language[lang].contact.message}
                        </label>
                        <Field
                            name="message"
                            as="textarea"
                            id="message"
                            placeholder={language[lang].contact.message}
                            className={`${styles.formInput} ${
                                styles.formTextarea
                            } ${
                                touched.message && errors.message
                                    ? styles.formInputError
                                    : touched.message && !errors.message
                                    ? styles.formInputSuccess
                                    : null
                            }`}
                        />
                        <ErrorMessage component={"p"} name="message" />
                        <button className={`button ${styles.submitBtn}`}>
                            <input
                                type="submit"
                                className={styles.formSubmit}
                                id="submitBtn"
                                disabled={isSubmitting}
                                value={language[lang].contact.submit}
                            />
                        </button>
                    </Form>
                </div>
            )}
        </Formik>
    );
};

export default ContactForm;
