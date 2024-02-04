import React, { createContext, useState } from "react";

const ProfileContext = createContext("");

const ProfileContextProvider = ({ children }) => {
  const [profile, setProfile] = useState("");
  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileContextProvider };
