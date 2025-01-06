import React from "react";
import SkillWidget from "@/app/components/elements/SkillWidget";
import SKILLS from "@/app/constants/skills";

function NewSkills(): React.JSX.Element {
    return (
        <div className="text-center flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-8">
            {SKILLS.map((skill) => (
                <SkillWidget key={skill.name} {...skill} />
            ))}
        </div>
    );
}

export default NewSkills;
