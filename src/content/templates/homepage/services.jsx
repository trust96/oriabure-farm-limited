import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../base/style/styles";
import Typography from "../../base/typography";
import Card from "../../modules/card";
const S = {};
S.Services = styled.section`
padding: var(--space-600) 0;

`;
S.Wrapper = styled.div `
position:relative;
${mediaQuery.up.md}{
  &:not(:last-child){
    
  }
  margin-bottom: 40px;
}
`
export default function Services() {
  return (
    <>
      <S.Services>
          <Typography as="h2" variant="secondary" margin="lg" weight="normal" className="mb-5">services</Typography>
        <div className="container">
            <S.Wrapper>
            <Card title="holticulture">
              Designs commercial greenhouse for the horticultural industry in
              Nigeria. Product feature greenhouse structure....
            </Card>
              <Image src="/Assets/Horticolture.jpg" height={600} width={1000}/>

    </S.Wrapper>
    <S.Wrapper>
            <Card title="greenhouse">
              Designs commercial greenhouse for the horticultural industry in
              Nigeria. Product feature greenhouse structure....
            </Card>
              <Image src="/Assets/Greenhouse.jpg" height={600} width={1000}/>

    </S.Wrapper>
    <S.Wrapper>
            <Card title="Tools">
              Designs commercial greenhouse for the horticultural industry in
              Nigeria. Product feature greenhouse structure....
            </Card>
              <Image src="/Assets/Tools.jpg" height={600} width={1000}/>

    </S.Wrapper>
    </div>
      </S.Services>
    </>
  );
}
