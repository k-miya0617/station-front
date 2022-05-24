import {
  CogIcon,
  PhotographIcon,
  SearchIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import { FooterButtonProps } from "../../components/footer";

export const footerButtons: FooterButtonProps[] = [
  {
    caption: "Playlist",
    icon: <ViewListIcon className="w-8 h-8 text-red-500" />,
    href: "#",
  },
  {
    caption: "Album",
    icon: <PhotographIcon />,
    href: "#",
  },
  {
    caption: "Search",
    icon: <SearchIcon />,
    href: "#",
  },
  {
    caption: "Settings",
    icon: <CogIcon />,
    href: "#",
  },
];
