import React,{useState} from "react";

const NavToggle = React.createContext();


const NavigationToggle = ({ children }) => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <NavToggle.Provider value={[isToggle, setIsToggle]}>
      {children}
    </NavToggle.Provider>
  );
};

export {NavigationToggle,NavToggle}