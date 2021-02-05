import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../base/style/styles";
import Typography from "../../base/typography";
import Button from "../../components/button";
const H = {};
H.Header = styled.section`
  padding: 150px 0 100px 0;
`;
H.Container = styled.div``;
H.Wrapper = styled.div``;

H.Buttons = styled.div`
display:inline-block;
position:relative;
left:50%;
transform:translateX(-50%);
${mediaQuery.up.md} {
  position:static;
  transform:none;
}
& button{
display:block;
width:100%;
margin-bottom:var(--space-200);
${mediaQuery.up.md} {
  display:inline-block;
  width:initial;
  margin-bottom:0;
}
}
`;
H.Button = styled(Button) `
${mediaQuery.up.md} {
margin-right:var(--space-300);

}`



export default function Header() {
  return (
    <H.Header>
      <H.Container className="container-md container-fluid">
        <div className="row">
          <H.Wrapper className="col col-md-8">
            <Typography as="h1" variant="primary" color="primary" margin="lg">
              Taking Nigeria agriculture to the next level
            </Typography>
            <Typography
              as="p"
              variant="subtitle1"
              color="secondary"
              lineheight="md"
              weight="bold"
              margin="lg"
              normal
            >
              ORIABURE FARMS LTD is a well structured and organised company
              which approaches the domestic market following the principal
              standard attached to product quality and efficient service
            </Typography>
            <H.Buttons>
              <H.Button variant="primary">Book a consultation</H.Button>
              <Button variant="outline">Learn more</Button>
            </H.Buttons>
          </H.Wrapper>
          <H.Wrapper className="col-md-4 d-none d-md-block">
            <Image
              src="/Assets/breadfruit.png"
              height={800}
              width={990}
              alt=""
            />
          </H.Wrapper>
        </div>
      </H.Container>
    </H.Header>
  );
}
