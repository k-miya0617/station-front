import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Track } from "../api/tracks";

import { PauseIcon, PlayIcon } from "@heroicons/react/outline";

import { footerButtons } from "../data/footer/fotterButtons";
import { classNames } from "../utils";

export interface FooterButtonProps {
  name: string;
  caption: string;
  icon: React.ReactElement;
  href: string;
  isCurrent?: boolean | undefined;
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
        <div
          className={classNames(
            "flex-1",
            props.isCurrent ? "text-amber-500" : ""
          )}
        >
          {IconElement}
        </div>
        <div
          className={classNames(
            "h-6 text-xs",
            props.isCurrent ? "text-amber-500" : ""
          )}
        >
          {props.caption}
        </div>
      </div>
    </Link>
  );
};

interface TrackFooterProps {
  track: Track;
  isLoading?: boolean | undefined;
  isPlaying?: boolean | undefined;
}

const TrackFooter = (props: TrackFooterProps) => {
  const [isPlaying, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    setPlaying(props.isPlaying ?? false);
  }, []);

  return (
    <div className="h-14 flex flex-row shrink-0 items-center space-x-1 p-1 bg-stone-200 dark:bg-stone-800 border-t border-stone-300 dark:border-stone-600">
      {/* アルバムアートワークの表示 */}
      <img
        src="https://content-jp.umgi.net/products/up/upcp-9005_ube_extralarge.jpg?12052017115247"
        className="w-12 h-12"
      />

      {/* 曲名・アルバム名の表示 */}
      <div className="flex-1 shrink-0 flex flex-col">
        <p className="text-md truncate">
          {props.track.name ?? "(Unknown title)"}
        </p>
        <p className="text-xs truncate">
          {props.track.album ?? "(Unknown album title)"}
        </p>
      </div>

      {/* コントロールの表示 */}
      <div className="w-10" onClick={() => setPlaying(!isPlaying)}>
        {isPlaying ? (
          <PauseIcon className="w-8 h-8" />
        ) : (
          <PlayIcon className="w-8 h-8" />
        )}
      </div>
    </div>
  );
};

interface FooterProps {
  currentPageName?: string | undefined;
  track?: Track | undefined;
}

const Footer = (props: FooterProps) => {
  return (
    <>
      {/* もし現在再生中のトラックがある場合、トラックの領域を描画する */}
      {props.track !== undefined && (
        <TrackFooter track={props.track} isLoading={true} />
      )}
      <footer className="h-14 bg-stone-200 dark:bg-stone-800 border-t border-stone-300 dark:border-stone-600">
        {/* 4つのボタンを配置する */}
        <div className="flex flex-row space-x-1">
          {footerButtons.map((footerButton) => (
            <FooterButton
              name={footerButton.name} // but unuse.
              caption={footerButton.caption}
              icon={footerButton.icon}
              href={footerButton.href}
              isCurrent={(props.currentPageName ?? "") === footerButton.name}
            />
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
