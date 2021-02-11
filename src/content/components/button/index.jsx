import React from "react";
import Btn from "./style";

export default function Button({ children, variant, onClick, className, fullwidth}) {
  return (
    <Btn variant={variant} onClick={onClick} className={className} fullwidth={fullwidth}>
      {children}
    </Btn>
  );
}
