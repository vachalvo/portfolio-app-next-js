import SectionTitle, { IPageTitle } from "./SectionTitle";
import { ReactNode } from "react";

interface ISectionWrapper extends IPageTitle {
    children: ReactNode;
    id: string;
}

export default function SectionWrapper({
                                children,
                                id,
                                title,
                                subtitle,
                            }: ISectionWrapper): ReactNode {
    return (
        <div id={id} className="pt-24">
            <SectionTitle title={title} subtitle={subtitle} />
            {children}
        </div>
    );
}
