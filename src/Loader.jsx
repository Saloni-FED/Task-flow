import React from 'react'
import { ClipLoader } from "react-spinners";
const Loader = () => {
    return (
      <div className="flex justify-center  h-full mt-10">
        <ClipLoader color={"#6368d9"} size={50} />
      </div>
    );
}

export default Loader
