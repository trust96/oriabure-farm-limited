import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import useRouter from "next/router";
import { List, ListItem, ListLink, Indicator } from "./styles";

export default function Navlist({ color, mobile, className, footer }) {
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const handleLink = (e) => {
    setWidth(e.target.offsetWidth);
    setLeft(e.target.offsetLeft);
  };
  const home = useRef(null);
  const about = useRef(null);
  const service = useRef(null);
  const contact = useRef(null);
  const router = useRouter;
  useEffect(() => {
    if (router.pathname === "/") {
      home.current.click();
    } else if (router.pathname === "/about_us") {
      about.current.click();
    }else if (router.pathname === "/services") {
      services.current.click();
    }else if (router.pathname === "/contact_us") {
      contact.current.click();
    }
  }, []);
  return (
    <List color={color} className={className}>
      <ListItem>
        <Link href="/">
          <ListLink ref={home} onClick={handleLink}>
            home
          </ListLink>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/about_us">
          <ListLink ref={about} onClick={handleLink}>
            about us
          </ListLink>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/services">
          <ListLink ref={service} onClick={handleLink}>
            services
          </ListLink>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="contact_us">
          <ListLink ref={contact} onClick={handleLink}>
            contact us
          </ListLink>
        </Link>
      </ListItem>
      {!mobile && !footer ? (
        <Indicator style={{ width: width, left: left }} />
      ) : (
        ""
      )}
    </List>
  );
}
