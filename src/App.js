import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "./Components/Navigation/NavBar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
    const [language, setLanguage] = useState("EN");
    const [vh, setVh] = useState(window.innerHeight * 0.01);

    const handleSetLanguage = (e) => {
        return setLanguage(e.target.dataset.code);
    };
    // Set viewport height
    useEffect(() => {
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }, [vh]);

    window.addEventListener("resize", () => {
        setVh(window.innerHeight * 0.01);
    });

    return (
        <div className="App">
            <NavBar handleSetLanguage={handleSetLanguage} lang={language} />
            <Main lang={language} />
            <Footer lang={language} />
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default App;
