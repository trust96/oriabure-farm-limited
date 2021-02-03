import React from "react";
import Btn from "./style";
export default function Button({ children, variant, onClick, className}) {
  return (
    <Btn variant={variant} onClick={onClick} className={className}>
      {children}
    </Btn>
  );
}
