import React from "react";
import Link from "next/link";
import {List,ListItem,ListLink} from './styles'


export default function Navlist({ navText, color, mobile, className, navlink}) {
  return (
    <List color={color} className={className}>
      {navText.map((value, index) => (
        <ListItem key={index} mobile={mobile}>
          <Link href={value==='home'? '/' : navlink[index]}>
            <ListLink mobile={mobile}>{value}</ListLink>
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
