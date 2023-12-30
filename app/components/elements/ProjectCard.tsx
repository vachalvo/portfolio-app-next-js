import React, { ReactNode, useMemo } from "react";
import AnimatedIcon from "../core/AnimatedIcon";
import Icons from "@/app/utils/Icons";

export type IProject = {
  title: string;
  description: string;
  image: string;
  codeUrl?: string;
  previewUrl?: string;
  reverse?: boolean;
  technologies: string[];
};

export const ProjectCard = ({
  title,
  description,
  image,
  previewUrl,
  codeUrl,
  reverse,
  technologies,
}: IProject): ReactNode => {
  const imageComponent: ReactNode = useMemo(
    () => (
      <div className="h-full w-auto md:w-9/12">
        <img
          alt={"Project " + title}
          className="inset-0 h-full w-full object-cover object-center"
          src={"/assets/" + image}
        />
      </div>
    ),
    [image, title],
  );

  const projectInfoComponent: ReactNode = useMemo(
    () => (
      <div className="w-full py-4 px-6 flex flex-col justify-between border-b-2 border-primary">
        <div className="mt-2">
          <div className="flex justify-between items-start">
            <h2 className="font-semibold text-2xl text-primary">{title}</h2>
            <div className="flex gap-4">
              {previewUrl && (
                <AnimatedIcon href={previewUrl} icon={Icons.globus} />
              )}
              {codeUrl && <AnimatedIcon href={codeUrl} icon={Icons.github} />}
            </div>
          </div>
          <div className="divider" />
        </div>

        <p>{description}</p>
        <div className="flex flex-wrap gap-4 mt-6">
          {technologies.map((technology) => (
              // eslint-disable-next-line react/jsx-key
            <span className="badge badge-lg badge-primary font-semibold">
              {technology}
            </span>
          ))}
        </div>
      </div>
    ),
    [codeUrl, description, previewUrl, technologies, title],
  );

  return (
    <>
      <div className="hidden md:flex card-wrapper">
        {!reverse && imageComponent}
        {projectInfoComponent}
        {reverse && imageComponent}
      </div>
      <div className="md:hidden flex card-wrapper">
        {imageComponent}
        {projectInfoComponent}
      </div>
    </>
  );
};
