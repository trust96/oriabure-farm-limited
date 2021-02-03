import styled from "styled-components";
import Image from 'next/image'
export const Container = styled.div`
  width: ${({ variant }) => {
    switch (variant) {
      case "small":
        return "50px";
      case "medium":
        return "100px";
      case "small":
        return "150px";
    }
  }};
  height: ${({ variant }) => {
    switch (variant) {
      case "small":
        return "50px";
      case "medium":
        return "100px";
      case "small":
        return "150px";
    }
  }};
`;
export const Img = styled(Image)`
  max-width: 100%;
  height: auto;
`;