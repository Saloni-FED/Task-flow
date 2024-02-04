import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <div className="h-screen flex justify-center bg-l_blue pt-10">
      <div className="font-rest">
        <h1 className="text-bold text-3xl text-d_green">Oops there is an Error ❌</h1>
        <p className="text-center mt-3">
          {error.statusText} {error.status}
        </p>
      </div>
    </div>
  );
};

export default Error;
