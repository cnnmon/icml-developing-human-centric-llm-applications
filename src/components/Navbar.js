'use client'
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const MOBILE_WIDTH = 650;

const menuItems = [
  { name: "About", link: "#about" },
  { name: "Speakers", link: "#speakers" },
  { name: "Organizers", link: "#organizers" },
];

function MenuList({ horizontal = false }) {
  return (
    <ul className={`flex ${horizontal ? "flex-row gap-8" : "flex-col"}`}>
      {menuItems.map((item, index) => (
        <li key={index}>
          <a
            href={item.link}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

function HamburgerMenu() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <GiHamburgerMenu onClick={() => setShowMenu(!showMenu)} className="text-xl cursor-pointer" />
      {showMenu && (
        <div className="absolute top-[70px] right-[25px] w-48 rounded-md bg-white ring-2 ring-black p-4 divide-y divide-gray-100 focus:outline-none">
          <MenuList />
        </div>
      )}
    </>
  );
}

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < MOBILE_WIDTH);
    window.addEventListener("resize", () => setIsMobile(window.innerWidth < MOBILE_WIDTH));
  }, []);

  return (
    <div className="w-full fixed top-0 header">
      <div className="w-full p-8 flex justify-between items-center max-w-4xl mx-auto">
        <h3 />
        {isMobile ? <HamburgerMenu /> : <MenuList horizontal />}
      </div>
    </div>
  );
}