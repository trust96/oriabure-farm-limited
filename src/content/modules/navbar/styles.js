import styled from "styled-components";
import Typography from "../../base/typography";
import Button from "../../components/button";
import Logo from "../../components/Logo";
import Navlist from "../navlist";
import * as style from "../../base/style/styles";
import Menu from "../../components/menu";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const S = {};

S.Logo = styled(Logo)`
  margin-right: var(--space-100);
  position: relative;
  z-index: 1;
`;
S.Typography = styled(Typography)`
  margin-right: var(--space-200);
  ${style.mediaQuery.down.md} {
    display: none;
  }
`;

S.Button = styled(Button)`
  ${style.mediaQuery.down.md} {
    display: none;
    color: red;
  }
`;
S.Navlist = styled(Navlist)`
  margin-right: var(--space-200);
  ${style.mediaQuery.down.md} {
    display: none;
  }
`;
S.Menu = styled(Menu)`
  position: relative;
  z-index: 1;
  ${style.mediaQuery.up.md} {
    display: none;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const M = {};
M.Container = styled.div`
  background-color: var(--white);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding-top: 70px;
  transform:translateX(0%);
      transition: all ease-out 150ms;
  &.active{
      transform:translateX(100%);
      transition: all ease-in 150ms;

  }
  ${style.mediaQuery.up.md} {
    display: none;
  }


`;
M.Navlist = styled(Navlist)`
  font-size: var(--font-size-300);
  margin-bottom: var(--space-500);
`;

M.Button = styled(Button)`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;
