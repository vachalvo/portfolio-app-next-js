import React, { ReactNode, useState } from "react";
import { IEvent } from "../elements/ExperienceTimeline";
import Tabs from "../core/Tabs";
import ExperienceTimeline from "../elements/ExperienceTimeline";

const EDUCATION: IEvent[] = [
    {
        place: "High school of information technology and financial services",
        position: "Information technology",
        date: "Sep 2014 - Aug 2018",
    },

    {
        place: "University of West Bohemia - Faculty of Applied Sciences",
        position: "Bachelor's degree - Informatics",
        date: "Sep 2018 - Aug 2021",
    },
    {
        place: "Unicorn Top Gun Academy",
        position: "Unicorn Hatchery Course",
        date: "Feb 2021 - Mar 2021",
    },
    {
        place: "University of West Bohemia - Faculty of Applied Sciences",
        position: "Master's degree - Software Engineering",
        date: "Sep 2021 - Aug 2023",
    },
];
const WORK: IEvent[] = [
    {
        place: "ZF Engineering Pilsen - Internship",
        position: "IT-Support",
        date: "Mar 2017",
    },
    {
        place: "Jugendbildungsstätte Waldmünchen - Internship",
        position: "System Administrator",
        date: "Apr 2017",
    },
    {
        place: "ZF Engineering Pilsen - Internship",
        position: "IT-Support",
        date: "Mar 2018",
    },
    {
        place: "Unicorn - Part-time",
        position: "Java Backend Developer",
        date: "Oct 2020 - Jan 2021",
    },
    {
        place: "Unicorn - Part-time",
        position: "Frontend Developer",
        date: "Mar 2021 - Oct 2021",
    },
    {
        place: "Unicorn - Part-time",
        position: "Full-stack Developer",
        date: "Oct 2021 - Mar 2022",
    },
    {
        place: "Unicorn - Part-time",
        position: "Frontend Developer",
        date: "Mar 2022 - Aug 2023",
    },
    {
        place: "Creditas Digital Factory - Full-time",
        position: "Frontend Developer",
        date: "Sep 2023 - Present",
    },
];
const TABS = ["Education", "Work"];

function calculateAge(): number {
    const currentDate = new Date();
    const birthday = new Date('1998-06-11');

    const birthYear = birthday.getFullYear();
    const currentYear = currentDate.getFullYear();

    let age = currentYear - birthYear;

    if (currentDate < new Date(currentYear, birthday.getMonth(), birthday.getDate()))
        age--;

    return age;
}

function About(): ReactNode {
    const [activeTab, setActiveTab] = useState<string>(TABS[0]);

    const items = activeTab === "Education" ? EDUCATION : WORK;
    const myAge = calculateAge();

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="lg:max-w-[1000px]">
                <p className="mt-4">
                    I am Vojtěch Váchal, a <b>{myAge} years old</b> software developer.</p>
                <p className="mt-4">
                    Located at <b>Pilsen, Czech Republic</b>.
                </p>
                <p className="mt-4">
                    I hold both bachelor&apos;s and master&apos;s degrees in Informatics and Software Engineering claimed at the <b>West
                    Bohemian University</b>.
                </p>
            </div>

            <Tabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />
            <ExperienceTimeline items={items} />
        </div>
    );
}

export default About;
