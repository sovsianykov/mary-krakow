import Link from "next/link";
import { FunctionComponent, memo } from "react";
import {ListItemButton, styled} from "@mui/material";

interface Props {
  text: string;
  href: string;
  active: boolean;
}
const LinkButton = styled(ListItemButton)`
 font-size: 18px;
  &:hover {
    background-color: brown;
    color: #f1f1f1;
    transition: 0.3s ease-in-out;
  }
`


const NavItem: FunctionComponent<Props> = ({ text, href, active }) => {
  return (
    <Link href={href} className={`nav__item ${active ? "active" : ""}`}>
      <LinkButton>
      {text}
      </LinkButton>
    </Link>
  );
};

export default memo(NavItem);
