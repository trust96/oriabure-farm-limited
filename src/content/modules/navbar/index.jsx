import { useRouter } from "next/router";
import React,{useContext} from "react";
import { NavToggle } from "../../../utils/state_management/nav-context";
import {Container,Wrapper,M,S} from './styles'

export default function Navbar({ className }) {
  const [isToggle,setIsToggle] = useContext(NavToggle)
  const router = useRouter();
  const gotoSignin = ()=>{
    router.push('/signin')
  }
  return (
    <>

      <Container className={className}>
        <S.Logo variant="small" />
        <Wrapper>
          <S.Navlist />
          <S.Typography weight="bold"> Are you a member?</S.Typography>
          <S.Button variant="primary" onClick={gotoSignin}>Sign in</S.Button>
        </Wrapper>
        <S.Menu />
      </Container>
      <M.Container className={`${isToggle? '':'active'}`}>
        <M.Navlist mobile />
        <M.Button variant="primary" onClick={gotoSignin}>Sign in</M.Button>
      </M.Container>
    </>
  );
}
