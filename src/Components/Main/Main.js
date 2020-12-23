import React from "react";

import Landing from "./Landing/Landing";
import About from "./About/About";
import VideoBreak from "./VideoBreak/VideoBreak";
import Gallery from "./Gallery/Gallery";
import UpcomingTour from "./Upcoming Tours/UpcomingTour";
import Contact from "./Contact/Contact";

const Main = () => {
    return (
        <main>
            <Landing />
            <About />
            <VideoBreak />
            <UpcomingTour />
            <Gallery />
            <Contact />
        </main>
    );
};

export default Main;
