"use client"

import Hero from "@/app/components/sections/Hero";
import {RevealDiv} from "@/app/components/core/RevealDiv";
import Header, {ILink} from "@/app/components/elements/nav/Header";
import Footer from "@/app/components/elements/nav/Footer";
import About from "@/app/components/sections/About";
import Projects from "@/app/components/sections/Projects";
import ContactForm from "@/app/components/sections/ContactForm";
import SectionWrapper from "@/app/components/core/SectionWrapper";
import NewSkills from "@/app/components/sections/NewSkills";

const PAGES = [
    {
        component: About,
        title: "About",
        subtitle: "My personal story and experiences",
        id: "about",
    },
    {
        component: NewSkills,
        title: "Skills",
        subtitle: "Explore some of my knowledge",
        id: "skills",
    },
    {
        component: Projects,
        title: "Projects",
        subtitle: "See projects that I created or was part of",
        id: "projects",
    },
    {
        component: ContactForm,
        title: "Contact me",
        id: "contact",
    },
];


const LINKS: ILink[] = [
    { key: "#", text: "Home" },
    { key: "#about", text: "About" },
    { key: "#skills", text: "Skills" },
    { key: "#projects", text: "Projects" },
    { key: "#contact", text: "Contact" },
];

export default function Home() {
  return (
      <div>
          <Header links={LINKS}>
              <RevealDiv>
                  <Hero />
              </RevealDiv>
              <div className="flex flex-col">
                  {PAGES.map(({ component: Component, ...rest }, index) => (
                      <RevealDiv key={index} index={index}>
                          <SectionWrapper {...rest}>
                              <Component />
                          </SectionWrapper>
                      </RevealDiv>
                  ))}
              </div>
              <Footer />
          </Header>
      </div>
  )
}
