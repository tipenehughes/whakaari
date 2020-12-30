import React from "react";

const Section = ({ data }) => {
    const setRoute = (d) => {
        const routeName = d.heading.split(" ")[0];
        return routeName.toLowerCase();
    };

    return <section className={`container`} id={setRoute(data)}></section>;
};

export default Section;
