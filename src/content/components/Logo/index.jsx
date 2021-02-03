import React from "react";
import { Container, Img } from "./styles";

export default function Logo({ variant }) {
  return (
    <Container variant={variant}>
      <Img src="/Assets/logo-small.jpeg" width={186} height={188} />
    </Container>
  );
}
