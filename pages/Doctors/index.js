import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="mx-auto max-w-screen-xl p-2 my-12 lg:rounded-full lg:pl-6">
      <section className="relative overflow-hidden">
        <div className="container px-4 mx-auto mt-12">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-auto px-4 mb-4 text-center ">
              <a
                className="hidden p-2 bg-blue-600 rounded-full dark:bg-blue-500 xl:mb-0 hover:bg-blue-700 lg:inline-block text-gray-50"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 h-4 bi bi-chevron-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="w-full px-4 lg:w-2/5">
              <div className=" lg:max-w-xl">
                <h1 className="mb-6 text-4xl font-bold dark:text-gray-300 lg:text-6xl">
                  <span>medical </span>
                  <span className="text-blue-600 dark:text-blue-400">
                    professionals
                  </span>
                </h1>
                <p className="mb-6 leading-8 text-gray-500 dark:text-gray-400">
                  Medical professionals are trained individuals in the
                  healthcare field, such as doctors, nurses, and pharmacists,
                  who provide medical care, diagnosis, treatment, and support to
                  patients for their well-being.
                </p>
              </div>
            </div>
            <div className="w-full px-4 mt-20 lg:w-2/5 lg:mt-0">
              <div className="flex justify-center lg:justify-end">
                <div className="mr-4 lg:mr-8">
                  <img
                    className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                    src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
                    alt=""
                  />
                  <img
                    className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                    src="https://images.pexels.com/photos/7583382/pexels-photo-7583382.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                    src="https://images.pexels.com/photos/5327659/pexels-photo-5327659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <img
                    className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                    src="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-auto px-4 mb-4 text-center xl:mb-0">
              <a
                className="hidden p-2 bg-blue-600 rounded-full dark:bg-blue-500 hover:bg-blue-700 lg:inline-block text-gray-50"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Container for demo purpose */}
      {/* ---------------------------------------- */}

      {/* # 1st */}

      <section className="cta-sec relative max-w-screen-xl mt-20 mx-auto py-16 px-4 md:px-8">
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
        <div className="relative z-10 gap-5 items-center lg:flex">
          <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
            <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
              Connect with general{" "}
              <span className="text-indigo-600">practitioners</span>
            </h3>
            <p className="text-gray-500 leading-relaxed mt-3">
              General doctors, also known as primary care physicians, are
              healthcare professionals who provide comprehensive medical care,
              routine check-ups, preventive services, and basic treatment for
              common health issues to patients of all ages.
            </p>
            <p className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center">
              <Link href="/Doctors/GeneralMedicine">Consult Now</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-1 duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </p>
          </div>
          <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
            <img
              src="https://images.pexels.com/photos/287227/pexels-photo-287227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full"
            />
          </div>
        </div>

        <style jsx>{`
          .cta-sec {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          }
        `}</style>
      </section>

      {/* # 2nd */}
      <section className="cta-sec relative max-w-screen-xl mx-auto py-4 px-4 md:px-8">
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
        <div className="relative z-10 gap-5 items-center lg:flex">
          <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
            <img
              src="https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full"
            />
          </div>
          <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-right">
            <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
              Engaging with a{" "}
              <span className="text-indigo-600">Neurologist</span>
            </h3>
            <p className="text-gray-500 leading-relaxed mt-3">
              Neurologists are specialized medical professionals who diagnose
              and treat disorders of the nervous system, including conditions
              like epilepsy, stroke, multiple sclerosis, and neurodegenerative
              diseases such as Alzheimer's and Parkinson's.
            </p>
            <p
              className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-1 duration-150"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  // fill-rule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  // clip-rule="evenodd"
                />
              </svg>
              <Link href="/Doctors/Neurologist">Consult Now</Link>
            </p>
          </div>
        </div>
      </section>
      {/* 3rd */}
      <section className="cta-sec relative max-w-screen-xl mx-auto py-16 px-4 md:px-8">
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
        <div className="relative z-10 gap-5 items-center lg:flex">
          <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
            <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
              Connecting with a{" "}
              <span className="text-indigo-600">Cardiologist</span>
            </h3>
            <p className="text-gray-500 leading-relaxed mt-3">
              Cardiologists are specialized medical professionals who diagnose,
              treat, and manage conditions related to the heart and
              cardiovascular system, including heart diseases, heart attacks,
              high blood pressure, and arrhythmias.
            </p>
            <p
              className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
              href="#"
            >
              <Link href="/Doctors/Cardiologist">Consult Now</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-1 duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </p>
          </div>
          <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
            <img
              src="https://images.pexels.com/photos/3845126/pexels-photo-3845126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full"
            />
          </div>
        </div>

        <style jsx>{`
          .cta-sec {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          }
        `}</style>
      </section>

      {/* ------------------------------------------------- */}

      <div className="container my-16 px-6 mx-auto">
        {/* Section: Design Block */}
        <section className="mb-32 text-gray-800 text-center">
          <div className="flex justify-center">
            <div className="text-center max-w-[700px]">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Why is it so
                <u className="text-blue-600"> great?</u>
              </h2>
              <p className="text-gray-500 mb-12">
                A website that offers a wide range of doctors provides
                convenience, comprehensive care, improved coordination, enhanced
                access, extensive expertise, patient empowerment, continuity of
                care, comprehensive information, streamlined appointment
                booking, and promotes a holistic approach to healthcare.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
            <div className="mb-12 lg:mb-0">
              <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
                <svg
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                  ></path>
                </svg>
              </div>
              <h5 className="text-lg font-bold mb-4">Appointment Booking</h5>
              <p className="text-gray-500">
                A centralized website can offer a convenient appointment booking
                system, allowing patients to easily schedule visits with
                different doctors without the hassle of multiple phone calls or
                visits.
              </p>
            </div>
            <div className="mb-12 lg:mb-0">
              <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
                <svg
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"
                  ></path>
                </svg>
              </div>
              <h5 className="text-lg font-bold mb-4">Extensive Expertise</h5>
              <p className="text-gray-500">
                Having a diverse pool of doctors on one website means accessing
                a wealth of expertise across different medical fields, enabling
                patients to find the most suitable and knowledgeable
                professionals for their specific conditions.
              </p>
            </div>
            <div className="mb-12 md:mb-0">
              <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
                <svg
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"
                  ></path>
                </svg>
              </div>
              <h5 className="text-lg font-bold mb-4">Improved Coordination</h5>
              <p className="text-gray-500">
                When different doctors are available on a single platform, it
                facilitates better coordination and communication among
                healthcare providers, leading to more effective and integrated
                care for patients.
              </p>
            </div>
            <div className="mb-12 md:mb-0">
              <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
                <svg
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 544 512"
                >
                  <path
                    fill="currentColor"
                    d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"
                  ></path>
                </svg>
              </div>
              <h5 className="text-lg font-bold mb-4">Convenience</h5>
              <p className="text-gray-500">
                Having access to various types of doctors in one place saves
                time and effort in searching for specific medical professionals
                individually.
              </p>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </div>
      {/* Container for demo purpose */}
    </div>
  );
};

export default index;
