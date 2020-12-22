import React from "react";
import Section from "./Section";
import Landing from "./Landing/Landing";

const Main = () => {
    const sections = [
        {
            heading: `About Us`,
            subHeading: `Bringing Māori Soul to the Heart of Europe`,
            p1: `Whakaari Rotorua are a group of performers from Rotorua, New Zealand, who travel around the world sharing their Māori culture through traditional song and dance. They specifically travel to the Czech Republic often as they have a deep connection to this country – especially group leader Frank Grapl Junior, as his father, František Grapl, emigrated to New Zealand in 1950.`,
            link: `CONTACT US TO BOOK AN EVENT`,
            carousel: true,
        },
        {
            heading: `Upcoming Tour Dates`,
            table: true,
            video: true,
        },
        {
            heading: "Contact Us",
            p1: `To contact us about an event booking, to find out more about what we do, or just to say Kia Ora! - please fill out and submit the form below or visit any of our social media pages to send us a message.`,
            p2: `We look forward to hearing from you!`,
            socialIcons: true,
            contactForm: true,
        },
    ];
    return (
        <main>
            <Landing />
            {sections.map((data, index) => {
                return <Section data={data} index={index} key={index} />;
            })}
        </main>
    );
};

export default Main;
