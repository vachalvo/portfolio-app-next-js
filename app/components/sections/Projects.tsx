import React, { ReactNode } from "react";
import { IProject, ProjectCard } from "../elements/ProjectCard";

const PROJECTS: IProject[] = [
    {
        title: "Aimtec Hackaton 2024",
        description:
            "In 2024 I was part of the Aimtec Hackaton 2024 with focus on disadvantaged people. Our team created a prototype of a mobile application that serves to locate the blind in a small space and we finished on the second place.",
        image: "hackit-2024.png",
        codeUrl: "https://github.com/vachalvo/blind_tooth/",
        technologies: ["React Native", "TypeScript", "Expo", "AWS Lambda", "Node.js"],
    },
    {
        title: "Portfolio",
        description:
            "Portfolio website created to present my skills, projects, work achievements and knowledge.",
        image: "portfolio.png",
        codeUrl: "https://github.com/vachalvo/portfolio-app-next-js/",
        previewUrl: "https://vachal-vojtech.vercel.app/",
        technologies: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    },
    {
        title: "Aimtec Hackaton 2023",
        description:
            "I participated with my team in the Aimtec Hackaton 2023 and finished on the first place. We created software to slow down speech in videos for disabled people. ",
        image: "hackit-2023.png",
        codeUrl: "https://github.com/honzikv/prezivsipokoutnici/",
        technologies: ["React", "Python", "MUI"],
    },
];

function Projects(): ReactNode {
    return (
        <div className="flex flex-wrap justify-center gap-8">
            {PROJECTS.map((project, index) => (
                // eslint-disable-next-line react/jsx-key
                <ProjectCard key={project.title} {...project} reverse={index % 2 === 1} />
            ))}
        </div>
    );
}

export default Projects;
