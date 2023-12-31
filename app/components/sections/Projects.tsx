import React, { ReactNode } from "react";
import { IProject, ProjectCard } from "../elements/ProjectCard";

const PROJECTS: IProject[] = [
    {
        title: "Portfolio",
        description:
            "Portfolio website created to present my skills, projects, work achievements and knowledge.",
        image: "portfolio.png",
        codeUrl: "https://github.com/vachalvo/vachalvo.github.io/",
        previewUrl: "https://vojtech-vachal.vercel.app/",
        technologies: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    },
    {
        title: "Aimtec Hackaton 2023",
        description:
            "I participated with my team in the Aimtec Hackaton 2023 and finished on the first place. We created software to slow down speech in videos for disabled people. ",
        image: "hackit.png",
        codeUrl: "https://github.com/honzikv/prezivsipokoutnici/",
        previewUrl: "http://slowflow.kky.zcu.cz/",
        technologies: ["React", "Python", "MUI"],
    },
];

function Projects(): ReactNode {
    return (
        <div className="flex flex-wrap justify-center gap-8">
            {PROJECTS.map((project, index) => (
                // eslint-disable-next-line react/jsx-key
                <ProjectCard {...project} reverse={index % 2 === 1} />
            ))}
        </div>
    );
}

export default Projects;
