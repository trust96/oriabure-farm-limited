import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Navlist from "./Navlist";
import Menu from "./Menu";
import Navprovider from "../utils/context";
export default function Nav() {
  return (
    <>
      <Navprovider>
        <nav className="nav">
          <div className="container">
            <div className="nav__bar">
              <Logo />
              <Navlist />
              <Menu />
            </div>
          </div>
        </nav>
      </Navprovider>
    </>
  );
}
