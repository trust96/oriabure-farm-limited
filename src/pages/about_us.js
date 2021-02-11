import React, { useEffect } from "react";
import styled from "styled-components";
import { mediaQuery } from "../content/base/style/styles";
import Typography from "../content/base/typography";
import Cards from "../content/modules/our_team";

import Head from "../content/sections/head";
const S = {};
S.Ourteam = styled.section`

padding: var(--space-600) 0;
`;
S.Wrapper = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
justify-items:center;
column-gap: 30px;
row-gap:30px;
${mediaQuery.down.lg}{
  grid-template-columns: 1fr 1fr;
}
${mediaQuery.down.md}{
  grid-template-columns: 1fr;
}
`;
S.Ourmission = styled.section `

padding: var(--space-600) 0;
`
export default function about_us() {

  return (
    <div>
      <Head>about us</Head>
      <S.Ourteam>
        <Typography className="mb-5" variant="secondary" as='h1' margin="lg" weight="normal">our team</Typography>
        <div className="container">
          <S.Wrapper className="">
            <Cards className="" image="logo-small.jpeg" name="oriabure" title="CEO">
              Designs commercial greenhouse for the horticultural industry in
              Nigeria. Product feature greenhouse structure....
            </Cards>
            <Cards className="" image="logo-small.jpeg" name="oriabure" title="CEO">
              Designs commercial greenhouse for the horticultural industry in
              Nigeria. Product feature greenhouse structure....
            </Cards>
            <Cards className="" image="logo-small.jpeg" name="oriabure" title="CEO">
              Designs commercial greenhouse for the horticultural industry in
              Nigeria. Product feature greenhouse structure....
            </Cards>
          </S.Wrapper>
        </div>
      </S.Ourteam>
      <S.Ourmission>
      <Typography className="mb-5" variant="secondary" as='h1' margin="lg" weight="normal">our mission</Typography>
      <div className="container">
        <Typography variant="body1" as='p' margin="lg" lineheight="md">
        sLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </Typography>
      </div></S.Ourmission>
    </div>
  );
}
