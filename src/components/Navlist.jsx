import Link from "next/link";
import React, { useContext } from "react";
import { Navcontext } from "../utils/context";
  const links = ["home", "about us", "services", "contact us"];

export default function Navlist() {

const [isToggle,setIsToggle]=useContext(Navcontext)
  return (
    <ul className={"nav__list unstyled--list"} style={{transform:isToggle?'translate(0%)':''}}>
      {links.map((link) => (
        <li className="nav__item" key={link}>
          <Link href={`/${link==="home"?'':link}`}>
            <a className="nav__link unstyled--link">{link}</a>
          </Link>
        </li>
      ))}
      <strong className="only-lg-screen nav__text">Are you a member?</strong> <button className="nav__button button button--primary">sign in</button>
    </ul>
  );
}
