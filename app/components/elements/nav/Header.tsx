"use client"

import { ReactNode, useCallback, useState } from "react";
import SocialList from "../SocialList";
import Icons from "@/app/utils/Icons";

export interface ILink {
  key: string;
  text: string;
}

interface IHeader {
  links: ILink[];
  children: ReactNode;
}

const renderLink = ({ key, text }: ILink): ReactNode => (
  <div className="navbar-link">
    <a href={key}>{text}</a>
  </div>
);

export default function Header({ children, links }: IHeader): ReactNode {
  const [navbar, setNavbar] = useState(false);

  const closeDrawer = useCallback(() => {
    document.getElementById("my-drawer-3")?.click();
  }, []);

  const changeBackground = (): void => {
    if (window.scrollY > 10) setNavbar(true);
    else setNavbar(false);
  };
  window.addEventListener("scroll", changeBackground);

  const getResumeButton = (): ReactNode => {
    return (
      <a
        href="./cv.pdf"
        download="Vojtech Vachal - Resume.pdf"
        target="_blank"
      >
        <button className="btn-resume" rel="noreferrer">
          Curriculum Vitae
        </button>
      </a>
    );
  };
  const getNavbar = (): ReactNode => {
    return (
      <div
        id={"navbar"}
        className={navbar ? "navbar-top active" : "navbar-top"}
      >
        <div className="flex-none md:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {Icons.barMenu}
          </label>
        </div>
        <div className="hidden md:flex md:gap-8">
          {links.map((link, index) => (
            <div key={index}>{renderLink(link)}</div>
          ))}
        </div>
        <div>{getResumeButton()}</div>
      </div>
    );
  };

  const getDrawerContent = (): ReactNode => {
    return (
      <>
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="p-4 pb-10 w-80 min-h-full bg-base-200 flex justify-between items-center flex-col">
          <div>
            {Icons.logo}
            <ul className="menu flex flex-col items-center">
              {links.map(({ key, text }, index) => (
                <div key={index}>
                  <li className="w-full">
                    <a
                      href={process.env.PUBLIC_URL + key}
                      onClick={closeDrawer}
                      className="font-medium text-lg w-full"
                    >
                      {text}
                    </a>
                  </li>
                </div>
              ))}
            </ul>
          </div>

          <SocialList />
        </div>
      </>
    );
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {getNavbar()}
        {children}
      </div>
      <div className="drawer-side z-10">{getDrawerContent()}</div>
    </div>
  );
}
