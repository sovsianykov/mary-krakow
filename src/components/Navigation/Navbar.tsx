import Link from "next/link";
// import Image from "next/image";
import React, { useState } from "react";
// import Logo from "../../static_data/logo-mary.png";
import NavItem from "./NavItem";

const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Art Works", href: "/works" },
    { text: "Contact", href: "/contact" },
    { text: "Book illustration", href: "/book" },
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
