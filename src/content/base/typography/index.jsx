import React from "react";
import styled from "styled-components";

const Type = styled.span`
  font-size: ${({ variant }) => {
    switch (variant) {
      case "primary":
        return "var(--font-size-700)";

      case "secondary":
        return "var(--font-size-700)";

      case "terziary":
        return "var(--font-size-700)";

      case "quartenary":
        return "var(--font-size-700)";
    }
  }};
    text-shadow: ${({ variant }) => variant==='primary'? '2px 4px 3px rgba(0,0,0,0.3)' : 'none'};
`;
export default function Typography({ children, variant }) {
  return <Type variant={variant}>{children}</Type>;
}
