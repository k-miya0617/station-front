import Link from "next/link";
import React from "react";

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
    className: classNames("w-8 h-8 align-middle"),
  };
  const IconElement = React.cloneElement(props.icon, { ...iconElementProps });

  return (
    <Link href={props.href}>
      <div className="flex-1 h-16 flex flex-col p-2 items-center hover:cursor-pointer">
        <div className="flex-1">{IconElement}</div>
        <div className="h-6 text-xs">{props.caption}</div>
      </div>
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="h-16 bg-stone-200 dark:bg-stone-800 border-t-2 border-stone-200 dark:border-stone-600">
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
  );
};

export default Footer;
