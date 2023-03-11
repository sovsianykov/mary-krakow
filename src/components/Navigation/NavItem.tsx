import Link from "next/link";
import { FunctionComponent, memo } from "react";

interface Props {
  text: string;
  href: string;
  active: boolean;
}

const NavItem: FunctionComponent<Props> = ({ text, href, active }) => {
  return (
    <Link href={href} className={`nav__item ${active ? "active" : ""}`}>
      {text}
    </Link>
  );
};

export default memo(NavItem);
