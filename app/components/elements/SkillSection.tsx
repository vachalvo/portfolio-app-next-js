import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { motion } from "framer-motion";

export interface ISkill {
  title: string;
  skills: string[];
  icon?: ReactNode;
  right?: boolean;
}

const SkillSection = ({ title, skills, icon, right }: ISkill): ReactNode => {
  const classes = twMerge(
    "border-b-2 border-l-2 border-primary bg-base-100 rounded p-4 max-w-[500px] w-full h-full",
    clsx({
      "justify-self-end": right,
    }),
  );

  return (
    <motion.div whileHover={{ scale: 1.05 }} className={classes}>
      <h2 className="text-2xl mb-4 font-bold text-primary flex gap-2 justify-center items-center">
        {icon}
        {title}
      </h2>
      <div
        className={
          skills.length > 5 ? "grid md:grid-cols-2" : "grid md:grid-cols-1"
        }
      >
        {skills.map((skill: string) => (
            // eslint-disable-next-line react/jsx-key
          <p>{skill}</p>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillSection;
