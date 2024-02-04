import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ element, ...rest }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("profile");
    if (!login) {
      navigate("/");
    }
  }, []);
  return <div className="w-screen h-screen">{element}</div>;
};

export default Protected;
