import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import useRouter from "next/router";
import { List, ListItem, ListLink, Indicator } from "./styles";
import { NavToggle } from "../../../utils/state_management/nav-context";

export default function Navlist({ color, mobile, className, footer}) {
  const [isToggle, setIsToggle] = useContext(NavToggle)
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [mquery, setMquery] = useState(false)

  const home = useRef(null);
  const about = useRef(null);
  const service = useRef(null);
  const contact = useRef(null);
  const router = useRouter;
  useEffect(() => {
    if (mquery){


    if (router.pathname === "/") {
      home.current.click();
    } else if (router.pathname === "/about_us") {
      about.current.click();
    } else if (router.pathname === "/services") {
      service.current.click();
    } else if (router.pathname === "/contact_us") {
      contact.current.click();
    }
  }
  }, []);
  useEffect(() => {
    const mql=window.matchMedia('(min-width:800px)');
if (mql.matches){
  setMquery(prev=>!prev)
}
    return () => {
      
    }
  }, [])
    const handleLink = (e) => {
    setWidth(e.target.offsetWidth);
    setLeft(e.target.offsetLeft);
    setIsToggle(prevstate=>!prevstate)
  };
  return (
    <List color={color} className={className}>
      <ListItem mobile={mobile}>
        <Link href="/">
          <ListLink mobile={mobile} ref={home} onClick={handleLink}>
            home
          </ListLink>
        </Link>
      </ListItem>
      <ListItem mobile={mobile}>
        <Link href="about_us">
          <ListLink mobile={mobile} ref={about} onClick={handleLink}>
            about us
          </ListLink>
        </Link>
      </ListItem>
      <ListItem mobile={mobile}>
        <Link href="/services">
          <ListLink mobile={mobile} ref={service} onClick={handleLink}>
            services
          </ListLink>
        </Link>
      </ListItem>
      <ListItem mobile={mobile}>
        <Link href="contact_us">
          <ListLink mobile={mobile} ref={contact} onClick={handleLink}>
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
