import React from "react";
import Btn from "./style";
export default function Button({ children, variant, onClick }) {
  return (
    <Btn variant={variant} onClick={onClick}>
      {children}
    </Btn>
  );
}
