import Link from "next/link";
import React from "react";
import { Container, Img } from "./styles";

export default function Logo({ variant, className }) {
  return (
    <Container variant={variant} className={className}>
      <Link  href="/">
      <Img src="/Assets/logo-small.jpeg" width={186} height={188} />
      </Link>
    </Container>
  );
}