import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <>
      <div className="logo nav__logo">
        <Link href="/">
          <a className="logo__link">
            <img className="responsive--image" src="/Assets/logo.jpeg" alt="" />
          </a>
        </Link>
      </div>
    </>
  );
}
