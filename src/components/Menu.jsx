import React, { useContext, useState } from "react";
import { Navcontext } from "../utils/context";

export default function Menu() {
    
  const [isToggle, setIsToggle] = useContext(Navcontext);
  return (
    <>
      <button
        onClick={()=>setIsToggle((prevstate) => !prevstate)}
        className="button menu"
      >
        <div className={`menu__item ${isToggle && "menu__top"}`}></div>
        <div className={`menu__item ${isToggle && "menu__center"}`}></div>
        <div className={`menu__item ${isToggle && "menu__bottom"}`}></div>
      </button>
    </>
  );
}
