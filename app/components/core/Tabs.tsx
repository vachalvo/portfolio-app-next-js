import  { ReactNode } from "react";

interface ITabs {
    tabs: string[];
    activeTab: string;
    onChange: (val: string) => void;
}

export default function Tabs({ tabs, activeTab, onChange }: ITabs): ReactNode {
    const tabClass = (tab: string) =>
        tab === activeTab
            ? "tab tab-lg tab-bordered tab-active"
            : "tab tab-lg tab-bordered";

    return (
        <div className="tabs">
            {tabs.map((tab) => (
                <button key={tab} className={tabClass(tab)} onClick={() => onChange(tab)}>
                    {tab}
                </button>
            ))}
        </div>
    );
}
