import React, { useState } from "react";

function SearchBox() {
  const [showSearchBox, setShowSearchBox] = useState(false);
  return (
    <>
      <div className="md:hidden px-4 py-2">
        <button
          className="mt-2 w-full bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowSearchBox(true)}
        >
          Search
        </button>
      </div>
      <div className="flex justify-around p-4 max-md:hidden">
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="">Username</label>
          <input type="text" className="border rounded-lg p-2" />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="">Service Name</label>
          <input type="text" className="border rounded-lg p-2" />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="">Service Day</label>
          <input type="text" className="border rounded-lg p-2" />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="">Service Time</label>
          <input type="text" className="border rounded-lg p-2" />
        </div>
      </div>
      {showSearchBox && (
        <>
          <div className="animate__animated animate__fadeInUp justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-x-0 bottom-0 z-50 outline-none focus:outline-none h-4/5">
            <div className="relative w-full max-w-3xl h-full">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-full">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">Search</h3>
                  <button
                    className="p-1 border-0 text-red-600 text-xl font-semibold outline-none focus:outline-none"
                    onClick={() => setShowSearchBox(false)}
                  >
                    X
                  </button>
                </div>
                <div className="relative sm:p-6 max-sm:p-1 flex-auto w-full">
                  <div className="flex flex-col justify-around p-4 w-full">
                    <div className="flex flex-col items-start gap-1">
                      <label htmlFor="">Username</label>
                      <input
                        type="text"
                        className="border rounded-lg p-2 w-full"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <label htmlFor="">Service Name</label>
                      <input
                        type="text"
                        className="border rounded-lg p-2 w-full"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <label htmlFor="">Service Day</label>
                      <input
                        type="text"
                        className="border rounded-lg p-2 w-full"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <label htmlFor="">Service Time</label>
                      <input
                        type="text"
                        className="border rounded-lg p-2 w-full"
                      />
                    </div>
                    <button
                      className="mt-2 w-full bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {}}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}

export default SearchBox;
