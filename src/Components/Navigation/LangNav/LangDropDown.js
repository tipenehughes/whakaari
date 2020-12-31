import React from "react";
import styles from "../../../CSS/Navigation/Languages.module.css";

const LangDropDown = ({
    hover,
    selection,
    langs,
    handleSetSelection,
    handleSetLanguage,
}) => {
    const removeSelection = (arr) => {
        const index = arr.findIndex((v) => v.lang === selection.lang);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    };

    return (
        <div className={styles.dropDown} key={selection}>
            {removeSelection(langs).map((lang, i) => {
                return (
                    <div
                        className={`${styles.languagesContainer} ${
                            hover && styles.hover
                        }`}
                        key={i}
                    >
                        <div
                            className={`${styles.languages} ${styles.langOptions}`}
                            aria-label="Language selector"
                            data-lang={lang.lang}
                            data-code={lang.code}
                            onClick={(event) => {
                                handleSetSelection(event);
                                handleSetLanguage(event);
                            }}
                        >
                            <a class={styles.langActive} href="#placeholder">
                                <img src={lang.lang} id="en" alt="English" />
                                <p>{lang.code}</p>
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default LangDropDown;
