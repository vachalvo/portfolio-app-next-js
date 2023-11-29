"use client"

import { ReactNode } from "react";
import SocialList from "../SocialList";

export default function Footer(): ReactNode {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <p>Copyright © 2023 - Ing. Vojtěch Váchal</p>
      </aside>
      <div className="md:place-self-center md:justify-self-end">
        <SocialList />
      </div>
    </footer>
  );
}
