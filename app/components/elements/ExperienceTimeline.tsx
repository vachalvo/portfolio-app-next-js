import { ReactNode } from "react";

export interface IEvent {
  place: string;
  position: string;
  date: string;
}

interface IExperienceTimeline {
  items: IEvent[];
}

const CIRCLE = (
  <span className="w-4 h-4 inline-block bg-primary rounded-full"></span>
);
const LINE = (
  <span className="block w-1 h-full bg-primary translate-x-1.5 -translate-y-4"></span>
);

function ExperienceTimeline({ items }: IExperienceTimeline): ReactNode {
  const renderOnMD = (item: IEvent, index: number): ReactNode => {
    const isEven = index % 2 === 1;

    const classes = `experience__data ${isEven ? "text-left" : "text-right"}`;

    return (
      <div className={classes}>
        {isEven && (
          <>
            <div></div>
            <div>
              {CIRCLE}
              {LINE}
            </div>
          </>
        )}

        <div>
          <h3 className="text-xl font-bold">{item.position}</h3>
          <p className="inline-block text-sm font-medium mb-2">{item.place}</p>
          <p>{item.date}</p>
        </div>

        {!isEven && (
          <div>
            {CIRCLE}
            {LINE}
          </div>
        )}
      </div>
    );
  };

  const renderOnSM = (item: IEvent, index: number): ReactNode => {
    return (
      <div className="flex gap-8">
        <div>
          {CIRCLE}
          {LINE}
        </div>
        <div>
          <h3 className="text-xl font-bold">{item.position}</h3>
          <p className="inline-block text-sm font-medium mb-2">{item.place}</p>
          <p className={index !== items.length - 1 ? "mb-4" : ""}>
            {item.date}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="hidden md:block">{items.map(renderOnMD)}</div>
      <div className="flex flex-col md:hidden">{items.map(renderOnSM)}</div>
    </div>
  );
}

export default ExperienceTimeline;
