import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Art Works", href: "/works" },
    { text: "Book illustration", href: "/book" },
    { text: "Contact", href: "/contact" },
];
const Navbar = () => {
    const [navActive, setNavActive] = useState(false);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <header>
            <nav className={`nav`}>
                <Link href={"/"} className='logo'>
                   Ovsianykova Mary
                </Link>
                <div
                    onClick={() => setNavActive(!navActive)}
                    className={`nav__menu-bar`}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                    {MENU_LIST.map((menu, idx) => (
                        <div
                            onClick={() => {
                                setActiveIdx(idx);
                                setNavActive(false);
                            }}
                            key={menu.text}
                        >
                            <NavItem active={activeIdx === idx} {...menu} />
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
