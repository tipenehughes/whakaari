import React from "react";

import Landing from "./Landing/Landing";
import About from "./About/About";
import VideoBreak from "./VideoBreak/VideoBreak";
import Gallery from "./Gallery/Gallery";
import UpcomingTour from "./Upcoming Tours/UpcomingTour";
import Contact from "./Contact/Contact";

const Main = ({lang}) => {
    return (
        <main>
            <Landing lang={lang}/>
            <About lang={lang}/>
            <VideoBreak lang={lang}/>
            <UpcomingTour lang={lang}/>
            <Gallery lang={lang}/>
            <Contact lang={lang}/>
        </main>
    );
};

export default Main;
