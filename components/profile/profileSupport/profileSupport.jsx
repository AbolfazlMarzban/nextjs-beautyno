import Navbar from "../../navbar";
import SupportTickets from "./supportTickets";
import { useState } from "react";

export default function ProfileSupport({}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col h-full items-center justify-center mt-10">
      <div className="w-full flex flex-col items-center justify-center max-w-3xl">
        <div>
          <h2 className="text-xl font-bold">Support</h2>
        </div>
        <SupportTickets />
        <button
          className="mt-2 w-4/5 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Add Ticket
        </button>
        {showModal ? (
          <>
            <div className="animate__animated animate__fadeInUp justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-x-0 bottom-0 z-50 outline-none focus:outline-none h-4/5 overflow-auto">
              <div className="relative w-full max-w-3xl h-full">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-full">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-2xl font-semibold">New Ticket</h3>
                    <button
                      className="p-1 border-0 text-red-600 text-xl font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      X
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto w-full">
                    <form>
                      <div className="mb-6">
                        <label
                          for="name"
                          className="block mb-2 text-sm font-medium text-start text-gray-900 dark:text-white"
                        >
                          Ticket Subject
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Insert your ticket's subject"
                          required
                        />
                      </div>
                      <div className="mb-6">
                      <label
                          className="block my-2 text-sm font-medium text-start text-gray-900 dark:text-white"
                          for="subject"
                        >
                          explain your issue here
                        </label>
                        <textarea
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          name="subject"
                          id=""
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="w-full bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Send Ticket
                    </button>
                  </div>
                    </form>
                  </div>
             
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
}
