import type { NextPage } from "next";
import React from "react";
import Div100vh from "react-div-100vh";
import { Track } from "../api/tracks";

import Footer from "../components/footer";

interface LayoutProps {
  children: React.ReactNode;
  track?: Track | undefined;
}

const Layout: NextPage<LayoutProps> = (props: LayoutProps) => {
  return (
    <div className="bg-stone-100 dark:bg-stone-800 overscroll-contain">
      {/* temp */}
      <Div100vh className="flex flex-col text-stone-900 bg-stone-100 dark:bg-stone-800 dark:text-stone-100">
        <header className="h-12 bg-amber-500">HEADER</header>
        <main className="flex-1 overflow-y-scroll">{props.children}</main>
        <Footer track={props.track} />
      </Div100vh>
    </div>
  );
};

export default Layout;
