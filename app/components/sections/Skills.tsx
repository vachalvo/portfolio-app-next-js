import React, { ReactNode } from "react";
import SkillSection from "../elements/SkillSection";
import Icons from "@/app/utils/Icons";

const SKILLS = [
    {
        title: "Web Development",
        skills: ["Spring", "React", "JavaScript", "TypeScript", "CSS", "HTML"],
        icon: Icons.globusSmall,
    },
    {
        title: "Software Development",
        skills: ["Java", "C#"],
        icon: Icons.cpu,
    },
    {
        title: "Databases",
        skills: ["MySQL", "PostgreSQL", "MongoDB"],
        icon: Icons.database,
    },
    {
        title: "Tools",
        skills: ["JetBrains", "Windows", "Git", "Visual Studio", "Linux", "Jira"],
        icon: Icons.tool,
    },
];

function Skills(): ReactNode {
    return (
        <div className="text-center flex flex-col items-center md:grid md:grid-cols-2 gap-x-16 gap-y-8">
            {SKILLS.map((skill, index) => (
                // eslint-disable-next-line react/jsx-key
                <SkillSection {...skill} right={index % 2 === 0} />
            ))}
        </div>
    );
}

export default Skills;
