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

function About(): ReactNode {
    const [activeTab, setActiveTab] = useState<string>(TABS[0]);

    const items = activeTab === "Education" ? EDUCATION : WORK;

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="lg:mx-64">
                <p className="mt-4">
                    I am Vojtěch Váchal, a 25-year-old software developer from Pilsen,
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Czech Republic. I hold both bachelor's and master's degrees in
                    informatics and software engineering from the West Bohemian
                    University.
                </p>
                <p className="mt-4">
                    My journey into development was inspired by a childhood fascination
                    with PCs and games, which ultimately led me to become proficient in a
                    variety of programming languages and technologies, including
                    JavaScript, React, Java, CSS, HTML, and C#. I have been working in the
                    field for three years and recently started a full-time position. I
                    values the serene environment of Pilsen and enjoy outdoor activities
                    such as climbing and sports in my free time.
                </p>
            </div>

            <Tabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />
            <ExperienceTimeline items={items} />
        </div>
    );
}

export default About;
