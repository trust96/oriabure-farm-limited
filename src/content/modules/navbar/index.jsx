import React from "react";
import styled from "styled-components";
import Typography from "../../base/typography";
import Button from "../../components/button";
import Logo from "../../components/Logo";
import Navlist from "../navlist";

const Container = styled.div`
display:flex;
align-items:center;
justify-content:space-evenly;

`;


const navText = ["home", "about us", "services", "contact us"];
export default function Navbar({ mobile }) {
  if (true) {
    return (
      <>
        <Container>
          <Navlist navText={navText} />
          <Typography weight="bold"> Are you a member?</Typography>
          <Button variant="primary">Sign in</Button>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Style>
          <Navlist navText={navText} mobile />
        </Style>
      </>
    );
  }
}
