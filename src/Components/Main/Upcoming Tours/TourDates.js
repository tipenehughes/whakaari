import React from "react";
import TourItem from "./TourItem";
import styles from "../../../CSS/Main/Upcoming/TourDates.module.css";

const TourDates = () => {
    const TourData = [
        {
            date: "12",
            day: "Fri",
            month: "Nov",
            venue: "Národní divadlo",
            city: "Prague, CZ",
        },
        {
            date: "13",
            day: "Sat",
            month: "Nov",
            venue: "Obecní dům",
            city: "Prague, CZ",
        },
        {
            date: "16",
            day: "Tues",
            month: "Nov",
            venue: "Puma Place",
            city: "Prague, CZ",
        },
        {
            date: "20",
            day: "Sat",
            month: "Nov",
            venue: "Grandhotel Pupp",
            city: "Karlovy Vary, CZ",
        },
    ];
    return (
        <div class={styles.tourDates}>
            {TourData.map((data, index) => {
                return <TourItem data={data} index={index} key={index} />;
            })}
        </div>
    );
};

export default TourDates;
