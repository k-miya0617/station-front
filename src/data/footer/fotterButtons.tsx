import {
  CogIcon,
  PhotographIcon,
  SearchIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import { FooterButtonProps } from "../../components/footer";

export const footerButtons: FooterButtonProps[] = [
  {
    name: "playlist",
    caption: "Playlist",
    icon: <ViewListIcon className="w-8 h-8 text-red-500" />,
    href: "/playlist",
  },
  {
    name: "album",
    caption: "Album",
    icon: <PhotographIcon />,
    href: "/",
  },
  {
    name: "search",
    caption: "Search",
    icon: <SearchIcon />,
    href: "/search",
  },
  {
    name: "settings",
    caption: "Settings",
    icon: <CogIcon />,
    href: "/settings",
  },
];
