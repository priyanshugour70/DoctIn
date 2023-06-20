import React from "react";
import MediCarts1 from "./MediCarts1";
import MediCarts2 from "./MediCarts2";
import MediCarts3 from "./MediCarts3";

export default function Content() {
  return (
    <div>
      <section className="py-8 bg-gray-50 font-poppins dark:bg-gray-800 ">
        <div className="px-4 py-4 mx-auto max-w-7xl lg:py-6 md:px-6">
          <div className="flex flex-wrap mb-4 -mx-3">
            <div className="w-full pr-4 lg:w-1/4 lg:block">
              <div className="p-4 mb-5 bg-white border border-gray-200 dark:border-gray-900 dark:bg-gray-900">
                <h2 className="text-2xl font-bold dark:text-gray-400">
                  Product Categories
                </h2>
                <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400" />
                <ul>
                  <li className="mb-4">
                    <label
                      htmlFor=""
                      className="flex items-center dark:text-gray-400 "
                    >
                      <input type="checkbox" className="w-4 h-4 mr-2" />
                      <span className="text-lg">Sweater</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label
                      htmlFor=""
                      className="flex items-center dark:text-gray-400 "
                    >
                      <input type="checkbox" className="w-4 h-4 mr-2 " />
                      <span className="text-lg">Socks</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label
                      htmlFor=""
                      className="flex items-center dark:text-gray-400"
                    >
                      <input type="checkbox" className="w-4 h-4 mr-2" />
                      <span className="text-lg">T-Shirt</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label
                      htmlFor=""
                      className="flex items-center dark:text-gray-400"
                    >
                      <input type="checkbox" className="w-4 h-4 mr-2" />
                      <span className="text-lg">Shoes</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label
                      htmlFor=""
                      className="flex items-center dark:text-gray-400"
                    >
                      <input type="checkbox" className="w-4 h-4 mr-2" />
                      <span className="text-lg">Hoodies &amp; Pants</span>
                    </label>
                  </li>
                </ul>
                <a
                  href="#"
                  className="text-base font-medium text-blue-500 hover:underline dark:text-blue-400"
                >
                  View More
                </a>
              </div>
              <div className="p-4 mb-5 bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-900">
                <h2 className="text-2xl font-bold dark:text-gray-400 ">Size</h2>
                <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400" />
                <div className="flex flex-wrap -mx-2 -mb-2">
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">
                    XL
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                    S
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                    M
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                    XS
                  </button>
                </div>
              </div>
              <div className="p-4 mb-5 bg-white border border-gray-200 dark:border-gray-900 dark:bg-gray-900">
                <h2 className="text-2xl font-bold dark:text-gray-400">
                  Colors
                </h2>
                <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400" />
                <div className="flex flex-wrap -mx-2 -mb-2">
                  <button className="p-1 mb-2 mr-4 ">
                    <div className="w-5 h-5 bg-amber-700" />
                  </button>
                  <button className="p-1 mb-2 mr-4 ">
                    <div className="w-5 h-5 bg-green-700" />
                  </button>
                  <button className="p-1 mb-2 mr-4 ">
                    <div className="w-5 h-5 bg-pink-400" />
                  </button>
                  <button className="p-1 mb-2 mr-4 ">
                    <div className="w-5 h-5 bg-indigo-400" />
                  </button>
                  <button className="p-1 mb-2 mr-4 ">
                    <div className="w-5 h-5 bg-cyan-600" />
                  </button>
                  <button className="p-1 mb-2 mr-4 ">
                    <div className="w-5 h-5 bg-yellow-400" />
                  </button>
                </div>
              </div>
              <div className="p-4 mb-5 bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-900">
                <h2 className="text-2xl font-bold dark:text-gray-400">Brand</h2>
                <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400" />
                <ul>
                  <li className="mb-4">
                    <label
                      htmlFor=""
                      className="flex items-center dark:text-gray-300"
                    >
                      <input type="checkbox" className="w-4 h-4 mr-2" />
                      <span className="text-lg dark:text-gray-400">Amul</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label
                      htmlFor=""
                      className="flex items-center dark:text-gray-300"
                    >
                      <input type="checkbox" className="w-4 h-4 mr-2" />
                      <span className="text-lg dark:text-gray-400">RIGO</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label
                      htmlFor=""
                      className="flex items-center dark:text-gray-300"
                    >
                      <input type="checkbox" className="w-4 h-4 mr-2" />
                      <span className="text-lg dark:text-gray-400">Nyptra</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label
                      htmlFor=""
                      className="flex items-center dark:text-gray-300"
                    >
                      <input type="checkbox" className="w-4 h-4 mr-2" />
                      <span className="text-lg dark:text-gray-400">
                        Shangri-la{" "}
                      </span>
                    </label>
                  </li>
                </ul>
                <a
                  href="#"
                  className="text-base font-medium text-blue-500 hover:underline dark:text-blue-400"
                >
                  View More
                </a>
              </div>
            </div>
            <div className="w-full px-3 lg:w-3/4">
              <div className="px-3 ">
                <div className="items-center justify-between hidden px-4 py-2 mb-4 bg-gray-100 md:flex dark:bg-gray-900 ">
                  <h2 className="text-2xl dark:text-gray-400">
                    Search Results for items
                  </h2>
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <a
                        href="#"
                        className="inline-block h-full p-2 mr-3 border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="w-5 h-5 bi bi-list"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="inline-block h-full p-2 mr-3 border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="w-5 h-5 bi bi-grid-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="inline-block h-full p-2 mr-6 border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="w-5 h-5 bi bi-grid-3x3-gap-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
                        </svg>
                      </a>
                    </div>
                    <div>
                      <select
                        name=""
                        id=""
                        className="block w-40 text-base bg-gray-100 dark:text-gray-400 dark:bg-gray-900"
                      >
                        <option value="">Sort by latest</option>
                        <option value="">Sort by Popularity</option>
                        <option value="">Sort by Price</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* ***** */}
              <MediCarts1 />
              {/* ***** */}
            </div>
          </div>
        </div>
      </section>
      <MediCarts2 />
      <MediCarts3 />
    </div>
  );
}
