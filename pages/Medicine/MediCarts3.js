import React from 'react'

export default function MediCarts3() {
  return (
    <div>
        <section className="flex items-center bg-stone-100 font-poppins dark:bg-gray-800 ">
  <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
    <h2 className="pb-2 text-xl font-bold text-left text-gray-800 md:text-3xl dark:text-gray-400">
      Hot Products
    </h2>
    <div className="w-20 mb-6 border-b border-red-700 dark:border-gray-400" />
    <div className="grid gap-4 mb-11 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      <div className="border border-gray-200 rounded-md bg-gray-50 dark:border-gray-900 rounded-b-md dark:bg-gray-900">
        <div className="relative ">
          <a href="#" className="">
            <img
              src="https://i.postimg.cc/xC8FnZPT/pexels-suzy-hazelwood-2536965.jpg"
              alt=""
              className="object-cover w-full mx-auto h-96 lg:h-64"
            />
          </a>
          <div className="absolute z-10 flex items-center justify-center w-14 h-14 p-5 text-center text-gray-100 bg-orange-600 rounded-full shadow-xl left-1 top-1 ">
            <span className="relative text-base font-semibold text-gray-200 ">
              {" "}
              SALE
            </span>
          </div>
          <div className="flex justify-center ">
            <div className="absolute z-10 flex items-center justify-center p-2 -mt-6 text-center text-orange-600 border border-orange-400 rounded-full shadow-xl cursor-pointer bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900 hover:text-gray-50 hover:bg-orange-600 w-11 h-11 ">
              <a href="#" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 h-4 bi bi-cart3"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="p-6 ">
          <h3 className="mb-3 text-xl font-medium text-center dark:text-gray-400">
            <a href="#"> Product name</a>
          </h3>
          <p className="mb-3 text-lg font-medium text-center text-gray-600 dark:text-gray-400">
            <span className="text-orange-500 dark:text-gray-300">$600.00</span>
            <span className="ml-2 text-gray-400 line-through dark:text-gray-400">
              $1000
            </span>
          </p>
          <ul className="flex justify-center ">
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border border-gray-200 rounded-md bg-gray-50 dark:border-gray-900 rounded-b-md dark:bg-gray-900">
        <div className="relative ">
          <a href="#" className="">
            <img
              src="https://i.postimg.cc/K8qmN64m/pexels-javon-swaby-2783873.jpg"
              alt=""
              className="object-cover w-full mx-auto h-96 lg:h-64"
            />
          </a>
          <div className="absolute z-10 flex items-center justify-center w-14 h-14 p-5 text-center text-gray-100 rounded-full shadow-xl bg-rose-700 left-1 top-1">
            <span className="relative text-base font-semibold text-gray-200 ">
              {" "}
              22% OFF
            </span>
          </div>
          <div className="flex justify-center ">
            <div className="absolute z-10 flex items-center justify-center p-2 -mt-6 text-center text-orange-600 border border-orange-400 rounded-full shadow-xl cursor-pointer bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900 hover:text-gray-50 hover:bg-orange-600 w-11 h-11 ">
              <a href="#" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 h-4 bi bi-cart3"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="p-6 ">
          <h3 className="mb-3 text-xl font-medium text-center dark:text-gray-400">
            <a href="#"> Product name</a>
          </h3>
          <p className="mb-3 text-lg font-medium text-center text-gray-600 dark:text-gray-400">
            <span className="text-orange-500 dark:text-gray-300">$600.00</span>
            <span className="ml-2 text-gray-400 line-through dark:text-gray-400">
              $1000
            </span>
          </p>
          <ul className="flex justify-center ">
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border border-gray-200 rounded-md bg-gray-50 dark:border-gray-900 rounded-b-md dark:bg-gray-900">
        <div className="relative ">
          <a href="#" className="">
            <img
              src="https://i.postimg.cc/zv8m573d/pexels-artem-beliaikin-1117272.jpg"
              alt=""
              className="object-cover w-full mx-auto h-96 lg:h-64"
            />
          </a>
          <div className="absolute z-10 flex items-center justify-center w-14 h-14 p-5 text-center text-gray-100 bg-orange-600 rounded-full shadow-xl left-1 top-1 ">
            <span className="relative text-base font-semibold text-gray-200 ">
              {" "}
              SALE
            </span>
          </div>
          <div className="flex justify-center ">
            <div className="absolute z-10 flex items-center justify-center p-2 -mt-6 text-center text-orange-600 border border-orange-400 rounded-full shadow-xl cursor-pointer bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900 hover:text-gray-50 hover:bg-orange-600 w-11 h-11 ">
              <a href="#" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 h-4 bi bi-cart3"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="p-6 ">
          <h3 className="mb-3 text-xl font-medium text-center dark:text-gray-400">
            <a href="#"> Product name</a>
          </h3>
          <p className="mb-3 text-lg font-medium text-center text-gray-600 dark:text-gray-400">
            <span className="text-orange-500 dark:text-gray-300">$600.00</span>
            <span className="ml-2 text-gray-400 line-through dark:text-gray-400">
              $1000
            </span>
          </p>
          <ul className="flex justify-center ">
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border border-gray-200 rounded-md bg-gray-50 dark:border-gray-900 rounded-b-md dark:bg-gray-900">
        <div className="relative ">
          <a href="#" className="">
            <img
              src="https://i.postimg.cc/HLyFyRyZ/pexels-suzy-hazelwood-2533266.jpgg"
              alt=""
              className="object-cover w-full mx-auto h-96 lg:h-64"
            />
          </a>
          <div className="absolute z-10 flex items-center justify-center w-14 h-14 p-5 text-center text-gray-100 bg-green-600 rounded-full shadow-xl left-1 top-1 ">
            <span className="relative text-base font-semibold text-gray-200 ">
              {" "}
              New
            </span>
          </div>
          <div className="flex justify-center ">
            <div className="absolute z-10 flex items-center justify-center p-2 -mt-6 text-center text-orange-600 border border-orange-400 rounded-full shadow-xl cursor-pointer bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900 hover:text-gray-50 hover:bg-orange-600 w-11 h-11 ">
              <a href="#" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 h-4 bi bi-cart3"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="p-6 ">
          <h3 className="mb-3 text-xl font-medium text-center dark:text-gray-400">
            <a href="#"> Product name</a>
          </h3>
          <p className="mb-3 text-lg font-medium text-center text-gray-600 dark:text-gray-400">
            <span className="text-orange-500 dark:text-gray-300">$600.00</span>
            <span className="ml-2 text-gray-400 line-through dark:text-gray-400">
              $1000
            </span>
          </p>
          <ul className="flex justify-center ">
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-yellow-400 dark:text-gray-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <a
        href="#"
        className="px-4 py-2 text-orange-500 border border-orange-500 rounded-full hover:text-gray-50 hover:bg-orange-500 dark:text-gray-400 dark:bg-gray-900 dark:border-gray-900 dark:hover:border-gray-700 dark:hover:bg-gray-700"
      >
        View More
      </a>
    </div>
  </div>
</section>

    </div>
  )
}
