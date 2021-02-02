import React from "react";
import styled from "styled-components";

const Type = styled.span`
  font-size: ${({ variant }) => {
    switch (variant) {
      case "primary":
        return "var(--font-size-100)";

      case "secondary":
        return "var(--font-size-200)";

      case "terziary":
        return "var(--font-size-300)";

      case "quartenary":
        return "var(--font-size-400)";
    }
  }};
  text-shadow: ${({ variant }) =>
    variant === "primary" && "2px 4px 3px rgba(0,0,0,0.3)"};
  color: ${({ color }) => {
    switch (color) {
      case "primary":
        return "var(--primary-300)";
      case "danger":
        return "var(--danger-300)";
      case "success":
        return "var(--success-300)";
      case "warning":
        return "var(--warning-300)";
    }
  }};
`;
export default function Typography({ children, variant,color }) {
  return <Type variant={variant} color={color}>{children}</Type>;
}
