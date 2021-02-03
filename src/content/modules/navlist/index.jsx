import React from "react";
import styled from "styled-components";
import Link from "next/link";

const List = styled.ul`
padding:0;
margin:0;
background-color:${({color})=>{
    switch(color){
        case 'primary':
            return 'var(--primary-300)';
        default:
            return 'var(--white)'
    }
}};
color:${({color})=>{
    switch(color){
        case 'primary':
            return 'var(--white)';
        default:
            return 'var(--primary-300)'
    }
}};
`;

const ListItem = styled.li`

display:${({mobile})=>mobile?'flex':'inline-block'};


`;

const ListLink = styled.a`
color:inherit;
text-decoration:none;
text-transform:capitalize;
cursor:pointer;
display:${({mobile})=>mobile?'flex':'inline-block'};
flex-basis:100%;
justify-content:center;
align-items:center;
padding: var(--space-500) var(--space-400);

&:hover{
    background-color: ${({mobile})=>mobile? 'rgba(0,0,0,0.1)':''};
}
`;

export default function Navlist({ navText = [], color, mobile, className}) {
  return (
    <List color={color} className={className}>
      {navText.map((value, index) => (
        <ListItem key={index} mobile={mobile}>
          <Link href={value==='home'? '/': value}>
            <ListLink mobile={mobile}>{value}</ListLink>
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
