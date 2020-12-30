import React, { useState } from "react";
import LangDropDown from "./LangDropDown";
import english from "../../../Assets/img/flags/english.svg";
import czech from "../../../Assets/img/flags/czech.svg";
import polish from "../../../Assets/img/flags/polish.svg";
import german from "../../../Assets/img/flags/german.svg";
import styles from "../../../CSS/Navigation/Languages.module.css";

const Languages = () => {
    const [selection, setSelection] = useState({
        lang: english,
        code: "EN",
    });
    const [hover, setHover] = useState(false);

    const langs = [
        { lang: english, code: "EN" },
        { lang: czech, code: "CZ" },
        { lang: german, code: "DE" },
        { lang: polish, code: "PL" },
    ];

    const handleSetSelection = (e) => {
        setSelection({
            ...selection,
            lang: e.target.dataset.lang,
            code: e.target.dataset.code,
        });
    };

    return (
        <div className={styles.container}>
            <div
                className={`${styles.languagesContainer} ${
                    hover && styles.hover
                }`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div
                    className={styles.languages}
                    aria-label="Language selector"
                >
                    <a className={styles.langActive} href="#placeholder">
                        <img src={selection.lang} id="en" alt="English" />
                        <p>{selection.code}</p>
                    </a>
                </div>
                {hover && (
                    <LangDropDown
                        hover={hover}
                        langs={langs}
                        selection={selection}
                        handleSetSelection={handleSetSelection}
                    />
                )}
            </div>
        </div>
    );
};

export default Languages;
