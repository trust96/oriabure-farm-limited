import React from "react";

const NavToggle = React.createContext();
const NavigationToggle = ({ children }) => {
  const [isToggle, setisToggle] = useState(false);
  return (
    <NavigationToggle value={[isToggle, setisToggle]}>
      {children}
    </NavigationToggle>
  );
};

export {NavigationToggle,NavToggle}