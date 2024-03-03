import React, { useState } from "react";

function UploadBox(props) {
  const [post, setPost] = useState("");
  function getPost(ev) {
    var url = URL.createObjectURL(ev.target.files[0]);
    setPost(url);
  }
  return (
    <div className="flex flex-col gap-3 pt-4">
      <label htmlFor="" className="text-left">Upload a Picture or a Video:</label>
      <div className="w-full h-32 border-2 border-dashed mt-2 rounded-lg flex justify-center items-center relative">
        {post.length > 0 ? (
          <img src={post} alt="" className="w-full h-32 rounded-lg" />
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
          onChange={(ev) => getPost(ev)}
        />
      </div>
      <label htmlFor="" className="text-left">Caption:</label>
      <textarea name="" id="" cols="30" rows="10" className="border p-3 rounded-lg outline-none"></textarea>
      <button
          className="mt-2 w-full bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Post
        </button>
    </div>
  );
}

export default UploadBox;
