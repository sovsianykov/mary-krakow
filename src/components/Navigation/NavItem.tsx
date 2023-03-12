import Link from "next/link";
import { FunctionComponent, memo } from "react";
import {ListItemButton} from "@mui/material";

interface Props {
  text: string;
  href: string;
  active: boolean;
}

const NavItem: FunctionComponent<Props> = ({ text, href, active }) => {
  return (
    <Link href={href} className={`nav__item ${active ? "active" : ""}`}>
      <ListItemButton style={{ fontSize:18}}>
      {text}
      </ListItemButton>
    </Link>
  );
};

export default memo(NavItem);
