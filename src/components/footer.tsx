import Link from "next/link";
// import Image from "next/image";
import React from "react";
import { Track } from "../api/tracks";

import { footerButtons } from "../data/footer/fotterButtons";
import { classNames } from "../utils";

export interface FooterButtonProps {
  caption: string;
  icon: React.ReactElement;
  href: string;
}

// フッターにある各ボタンのオブジェクト
const FooterButton = (props: FooterButtonProps) => {
  // アイコンを複製し、スタイルを与える
  const iconElementProps = {
    className: classNames("w-6 h-6 align-middle"),
  };
  const IconElement = React.cloneElement(props.icon, { ...iconElementProps });

  return (
    <Link href={props.href}>
      <div className="flex-1 h-14 flex flex-col p-2 items-center hover:cursor-pointer">
        <div className="flex-1">{IconElement}</div>
        <div className="h-6 text-xs">{props.caption}</div>
      </div>
    </Link>
  );
};

interface TrackFooterProps {
  track: Track;
}

const TrackFooter = (props: TrackFooterProps) => {
  return (
    <div className="h-14 flex flex-row items-center space-x-1 p-1 bg-stone-200 dark:bg-stone-800 border-t border-stone-300 dark:border-stone-600">
      {/* アルバムアートワークの表示 */}
      <img
        src="https://content-jp.umgi.net/products/up/upcp-9005_ube_extralarge.jpg?12052017115247"
        className="w-12 h-12"
      />

      {/* 曲名・アルバム名の表示 */}
      <div className="flex-1 flex flex-col">
        <p className="text-md">{props.track.name ?? "(Unknown title)"}</p>
        <p className="text-xs">
          {props.track.album ?? "(Unknown album title)"}
        </p>
      </div>

      {/* コントロールの表示 */}
      <div className="bg-blue-500 w-14">A</div>
    </div>
  );
};

interface FooterProps {
  track?: Track | undefined;
}

const Footer = (props: FooterProps) => {
  return (
    <>
      {/* もし現在再生中のトラックがある場合、トラックの領域を描画する */}
      {props.track !== undefined && <TrackFooter track={props.track} />}
      <footer className="h-14 bg-stone-200 dark:bg-stone-800 border-t-2 border-stone-200 dark:border-stone-600">
        {/* 4つのボタンを配置する */}
        <div className="flex flex-row space-x-1">
          {footerButtons.map((footerButton) => (
            <FooterButton
              caption={footerButton.caption}
              icon={footerButton.icon}
              href={footerButton.href}
            />
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
