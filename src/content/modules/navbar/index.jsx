import React,{useContext} from "react";
import { NavToggle } from "../../../utils/state_management/store/nav-context";
import {Container,Wrapper,M,S} from './styles'

const navText = ["home", "about us", "services", "contact us"];
const navTextLink = ["home", "about_us", "services", "contact_us"];
export default function Navbar({ className }) {
  const [isToggle] = useContext(NavToggle)
  return (
    <>

      <Container className={className}>
        <S.Logo variant="small" />
        <Wrapper>
          <S.Navlist />
          <S.Typography weight="bold"> Are you a member?</S.Typography>
          <S.Button variant="primary">Sign in</S.Button>
        </Wrapper>
        <S.Menu />
      </Container>
      <M.Container className={`${isToggle? '':'active'}`}>
        <M.Navlist mobile />
        <M.Button variant="primary">Sign in</M.Button>
      </M.Container>
    </>
  );
}
