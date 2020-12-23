import React from "react";
import VideoBreak from "./Upcoming Tours/VideoBreak";

const Section = ({ data, input }) => {
    const setRoute = (d) => {
        const routeName = d.heading.split(" ")[0];
        return routeName.toLowerCase();
    };

    return <section className={`container`} id={setRoute(data)}></section>;
};

export default Section;
