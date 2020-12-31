import React, { useState } from "react";
import NavBar from "./Components/Navigation/NavBar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
    const [language, setLanguage] = useState("EN");

    const handleSetLanguage = (e) => {
        return setLanguage(e.target.dataset.code);
    };

    return (
        <div className="App">
            <NavBar handleSetLanguage={handleSetLanguage} lang={language} />
            <Main lang={language} />
            <Footer lang={language} />
        </div>
    );
}

export default App;
