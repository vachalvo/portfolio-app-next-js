import React, { ReactNode } from "react";
import Icon from "@/app/components/core/Icon";

export type SkillWidget = {
    name: string;
    purpose: string;
    icon: ReactNode;
}

const SkillWidget = ({ name, purpose, icon }: SkillWidget): ReactNode => {
    return (
        <div className="border-2 border-slate-500 h-full rounded-lg bg-slate-700 hover:bg-slate-600 p-4 flex items-center gap-4 w-full
        hover:scale-105 hover:-rotate-3 duration-300">
            <div className="group w-fit">
                <Icon icon={icon}/>
            </div>
            <div className="flex flex-col align-start text-left">
                <p className="text-md font-bold">{name}</p>
                <p className="text-sm text-slate-300 whitespace-normal break-words text-wrap text-ellipsis	">{purpose}</p>
            </div>
        </div>
    );
};

export default SkillWidget;
