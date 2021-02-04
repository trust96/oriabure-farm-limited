import React from "react";
import styled from "styled-components";
import { NavigationToggle } from "../../../utils/state_management/store/nav-context";
import Navbar from "../../modules/navbar";

const S = {};
S.Nav = styled.nav`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: var(--space-200) 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: var(--white);
`;
export default function Nav() {
  return (
    <>
<NavigationToggle>
      <S.Nav>    
        <div className="container-lg container-fluid">
          <Navbar />
        </div>  
      </S.Nav>
  </NavigationToggle>
    </>
  );
}
