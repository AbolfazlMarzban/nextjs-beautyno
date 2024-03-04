import { useEffect, useState } from "react";
import Navbar from "../../navbar";

export default function ProfileInfo() {
  const [profilePic, setProfilePic] = useState("");
  function getProfilePic(ev) {
    var url = URL.createObjectURL(ev.target.files[0]);
    setProfilePic(url);
  }

  return (
    <div className="flex flex-col h-full items-center justify-center mt-10">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl">
        <div className="w-full flex flex-col items-start gap-2 justify-center max-sm:p-3">
          <label htmlFor="">Profile Picture:</label>
          <div className="w-full h-32 border-2 border-dashed mt-2 rounded-lg flex justify-center items-center relative">
            {profilePic.length > 0 ? (
              <img src={profilePic} alt="" className="w-full h-32 rounded-lg" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
            )}
            <input
              type="file"
              accept="[.png, .jpg, .jepg]"
              className="w-full h-full opacity-0 absolute cursor-pointer"
              onChange={(ev) => getProfilePic(ev)}
            />
          </div>
          <label htmlFor="">Full Name</label>
          <input type="text" className="p-2 border rounded-lg w-full" />
          <label htmlFor="">Phone Number</label>
          <input type="text" className="p-2 border rounded-lg w-full" />
          <label htmlFor="">Email</label>
          <input type="text" className="p-2 border rounded-lg w-full" />
          <button className="bg-pink-500 text-white hover:bg-pink-600 text-gray-800 p-3 border border-gray-400 rounded-xl shadow text-center w-full">
              Become a Service Provider
          </button>
          <button className="bg-green-400 p-3 rounded-lg text-white w-full mt-2">
            Save
          </button>
        </div>
      </div>
      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
}
