import React from "react";
import styled from "styled-components";
import Typography from "../../base/typography";
import Logo from "../../components/Logo";
import Navlist from "../../modules/navlist";
const navText = ["home", "about us", "services", "contact us"];
const navTextLink = ["home", "about_us", "services", "contact_us"];
const F = {};

F.Nav = styled(Navlist)`
  & li {
    display: block;
  }
  & a {
    padding: 0;
    font-size: var(--font-size-800);
  }
`;
F.Wrapper = styled.div`

`;
export default function Footer() {
  return (
    <>
      <footer className="pt-5 container">
          <div className="row">
        <Logo className="mr-4 mb-4 mb-md-0" variant="medium" />
        <F.Wrapper className="col-12 col-md-3 mb-4 mb-md-0">
          <Typography as="h4" margin="md" weight="bold" variant="body2">
            Navigation
          </Typography>
          <F.Nav footer />
        </F.Wrapper>
        <F.Wrapper className="col-12 col-md-3 mb-4 mb-md-0">
          <Typography as="h4" margin="md" weight="bold" variant="body2">
            Contact
          </Typography>

          <Typography as="p" variant="caption" >trust4t@hotmail.it</Typography>
          <Typography as="p" variant="caption" >3245367787</Typography>
          <Typography as="p" variant="caption" >via della manaia 18, PT 51092</Typography>
        </F.Wrapper>
        </div>
      </footer>
    </>
  );
}
