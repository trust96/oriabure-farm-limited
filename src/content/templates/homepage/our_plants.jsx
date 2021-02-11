import Image from "next/image";
import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import Typography from "../../base/typography";
import Button from "../../components/button";
const S = {};
S.Our_plants = styled.section`
  padding: var(--space-600) 0;
`;
S.Wrapper
export default function Our_plants() {
  return (
    <>
      <S.Our_plants>
        <Typography
          as="h2"
          variant="secondary"
          margin="lg"
          weight="normal"
          className="mb-5"
        >
          our plants
        </Typography>
        <div className="container">
          <Carousel indicators={false} controls={false}>
            <Carousel.Item>
              <div className="d-flex">
                <div className="col-6 d-none d-md-block">
                  <img className="img-fluid" src="/Assets/breadfruit.png" />
                </div>
                <div className="col-md-6 col align-self-center">
                    <Typography as="h3" variant="terziary" >breadfruit</Typography>
                <Typography as="p" variant="body1" color="black" margin="lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  perspiciatis vel vitae eveniet soluta totam tempora sit sequi
                  maiores laudantium!
                </Typography>
                <Button variant="primary">learn more</Button>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex">
                <div className="col-6 d-none d-md-block">
                  <img className="img-fluid" src="/Assets/tree.png" />
                </div>
                <div className="col-md-6 col align-self-center">
                    <Typography as="h3" variant="terziary">a tree</Typography>
                <Typography as="p" variant="body1" color="black" margin="lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  perspiciatis vel vitae eveniet soluta totam tempora sit sequi
                  maiores laudantium!
                </Typography>
                <Button variant="primary">learn more</Button>
                </div>
              </div>
            </Carousel.Item>

          </Carousel>
        </div>
      </S.Our_plants>
    </>
  );
}
