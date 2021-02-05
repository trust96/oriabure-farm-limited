import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../base/style/styles";
import Typography from "../../base/typography";
const C = {};
C.Container = styled.div`
max-width:300px;
color:white;
position:relative;
left:50%;
transform:translate(-50%,40%);
background-color:var(--primary-300);
padding:1.5rem 1rem 4rem 1rem;
line-height:0;
z-index:1;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
${mediaQuery.up.md} {
    position:absolute;
    right:0;
    top:50%;
    transform:translate(40%,-50%);
    max-width:450px;
}

`;
C.Typography = styled(Typography) `
`
C.Link = styled.span `
& a{
    color:white;
    font-weight: var(--font-weight-normal);
}
`
export default function Card({ title, href='', children }) {
  return (
    <>
      <C.Container>
        <Typography variant="terziary" as="h3" weight="light" margin="lg">{title}</Typography>
        <C.Typography variant="caption" lineheight="md" transform="normal">{children}        <C.Link>
          <Link href={href}>read more</Link>
        </C.Link></C.Typography>

      </C.Container>
    </>
  );
}
