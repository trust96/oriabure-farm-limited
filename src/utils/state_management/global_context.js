import React, { useState } from "react";

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const user = {
    email: [email, setEmail],
    password: [password, setPassword],
    username: [username, setUsername],
  };
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
