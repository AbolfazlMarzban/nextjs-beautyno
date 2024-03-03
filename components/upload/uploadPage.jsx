import React from "react";
import Navbar from "../navbar";
import UploadBox from "./uploadBox";

function UploadPage(props) {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="w-full max-w-3xl">
        <UploadBox />
      </div>
      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
}

export default UploadPage;
