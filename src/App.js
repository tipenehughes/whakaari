import React from "react";
import NavBar from "./Components/Navigation/NavBar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
