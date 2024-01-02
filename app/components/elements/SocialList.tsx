import AnimatedIcon from "../core/AnimatedIcon";
import { ReactNode } from "react";
import Icons from "@/app/utils/Icons";

const SOCIALS = [

    {
        href: "https://www.github.com/vachalvo/vachalvo",
        icon: Icons.github,
    },
    {
    href: "https://www.linkedin.com/in/vojtech-vachal",
    icon: Icons.linkedin,
  },
  {
    href: "https://www.instagram.com/vojtavachal",
    icon: Icons.instagram,
  },
  {
    href: "https://twitter.com/Vachalvo",
    icon: Icons.twitter,
  },
];

function SocialList(): ReactNode {
  return (
    <nav className="flex justify-center items-center gap-6">
      {SOCIALS.map((social, index) => (
        <AnimatedIcon key={index} {...social} />
      ))}
    </nav>
  );
}

export default SocialList;
