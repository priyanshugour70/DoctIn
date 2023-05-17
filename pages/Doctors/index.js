import React from "react";

const index = () => {
    return (
        <div className="mx-auto max-w-screen-xl p-2 my-12 lg:rounded-full lg:pl-6">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                        className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                        className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                        className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                        className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
            Container for demo purpose
            <div className="container my-24 px-6 mx-auto">
                {/* Section: Design Block */}
                <section className="mb-32 text-gray-800 text-center lg:text-left">
                    <style
                        dangerouslySetInnerHTML={{
                            __html: "\n      @media (min-width: 992px) {\n        .rotate-lg-6 {\n          transform: rotate(6deg);\n        }\n      }\n    ",
                        }}
                    />
                    <div className="md:px-6 py-12">
                        <div className="container mx-auto xl:px-32">
                            <div className="grid lg:grid-cols-2  items-center">
                                <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                                    <div
                                        className="relative block rounded-lg shadow-lg px-6 pt-12 pb-6 md:px-12 lg:-mr-14"
                                        style={{
                                            background:
                                                "hsla(0, 0%, 100%, 0.55)",
                                            backdropFilter: "blur(30px)",
                                            zIndex: 1,
                                        }}
                                    >
                                        <h2 className="text-3xl font-bold mb-6">
                                            Why is it so great?
                                        </h2>
                                        <p className="text-gray-500 mb-6">
                                            Nunc tincidunt vulputate elit.
                                            Mauris varius purus malesuada neque
                                            iaculis malesuada. Aenean gravida
                                            magna orci, non efficitur est porta
                                            id. Donec magna diam.
                                        </p>
                                        <div className="grid md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-6">
                                            <div className="mb-6">
                                                <p className="flex items-center">
                                                    <svg
                                                        className="w-4 h-4 mr-2 text-gray-900"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                                        ></path>
                                                    </svg>
                                                    Support 24/7
                                                </p>
                                            </div>
                                            <div className="mb-6">
                                                <p className="flex items-center">
                                                    <svg
                                                        className="w-4 h-4 mr-2 text-gray-900"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                                        ></path>
                                                    </svg>
                                                    Analytics
                                                </p>
                                            </div>
                                            <div className="mb-6">
                                                <p className="flex items-center">
                                                    <svg
                                                        className="w-4 h-4 mr-2 text-gray-900"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                                        ></path>
                                                    </svg>
                                                    Components
                                                </p>
                                            </div>
                                            <div className="mb-6">
                                                <p className="flex items-center">
                                                    <svg
                                                        className="w-4 h-4 mr-2 text-gray-900"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                                        ></path>
                                                    </svg>
                                                    Updates
                                                </p>
                                            </div>
                                            <div className="mb-6">
                                                <p className="flex items-center">
                                                    <svg
                                                        className="w-4 h-4 mr-2 text-gray-900"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                                        ></path>
                                                    </svg>
                                                    Reports
                                                </p>
                                            </div>
                                            <div className="mb-6">
                                                <p className="flex items-center">
                                                    <svg
                                                        className="w-4 h-4 mr-2 text-gray-900"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                                        ></path>
                                                    </svg>
                                                    Mobile
                                                </p>
                                            </div>
                                            <div className="mb-6">
                                                <p className="flex items-center">
                                                    <svg
                                                        className="w-4 h-4 mr-2 text-gray-900"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                                        ></path>
                                                    </svg>
                                                    Modules
                                                </p>
                                            </div>
                                            <div className="mb-6">
                                                <p className="flex items-center">
                                                    <svg
                                                        className="w-4 h-4 mr-2 text-gray-900"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                                        ></path>
                                                    </svg>
                                                    Blocks
                                                </p>
                                            </div>
                                            <div className="mb-6">
                                                <p className="flex items-center">
                                                    <svg
                                                        className="w-4 h-4 mr-2 text-gray-900"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                                        ></path>
                                                    </svg>
                                                    Templates
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:mb-12 lg:mb-0">
                                    <img
                                        src="https://mdbootstrap.com/img/new/ecommerce/vertical/121.jpg"
                                        className="w-full rounded-lg shadow-lg rotate-lg-6"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */}
            </div>
            {/* Container for demo purpose */}

            {/* Container for demo purpose */}
            <div className="container my-24 px-6 mx-auto">
                {/* Section: Design Block */}
                <section className="mb-32 text-gray-800 text-center">
                    <div className="flex justify-center">
                        <div className="text-center max-w-[700px]">
                            <h2 className="text-3xl font-bold mb-6 text-center">
                                Why is it so
                                <u className="text-blue-600"> great?</u>
                            </h2>
                            <p className="text-gray-500 mb-12">
                                Minus fuga aliquid vero facere ducimus quos,
                                quisquam nemo? Molestias ullam provident vitae
                                error aliquam dolorum temporibus? Doloremque,
                                quasi
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
                            <h5 className="text-lg font-bold mb-4">
                                Support 24/7
                            </h5>
                            <p className="text-gray-500">
                                Laudantium totam quas cumque pariatur at
                                doloremque hic quos quia eius. Reiciendis optio
                                minus mollitia rerum labore
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
                            <h5 className="text-lg font-bold mb-4">
                                Safe and solid
                            </h5>
                            <p className="text-gray-500">
                                Eum nostrum fugit numquam, voluptates veniam
                                neque quibusdam ullam aspernatur odio soluta,
                                quisquam dolore animi
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
                            <h5 className="text-lg font-bold mb-4">
                                Extremely fast
                            </h5>
                            <p className="text-gray-500">
                                Enim cupiditate, minus nulla dolor cumque iure
                                eveniet facere ullam beatae hic voluptatibus
                                dolores exercitationem
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
                            <h5 className="text-lg font-bold mb-4">
                                Live analytics
                            </h5>
                            <p className="text-gray-500">
                                Illum doloremque ea, blanditiis sed dolor
                                laborum praesentium maxime sint, consectetur
                                atque ipsum ab adipisci
                            </p>
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */}
            </div>
            {/* Container for demo purpose */}
            {/* Container for demo purpose */}
            <div className="container my-24 px-6 mx-auto">
                {/* Section: Design Block */}
                <section className="mb-32 text-gray-800 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        Latest articles
                    </h2>
                    <div className="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
                        <div className="mb-6 md:mb-0">
                            <div
                                className="overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                <img
                                    src="https://mdbootstrap.com/img/new/standard/city/018.jpg"
                                    className="w-full"
                                    alt="Louvre"
                                />
                                <a href="#!">
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                        style={{
                                            backgroundColor:
                                                "rgba(251, 251, 251, 0.2)",
                                        }}
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="mb-6 md:mb-0">
                            <h3 className="text-2xl font-bold mb-3">
                                Welcome to California
                            </h3>
                            <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center md:justify-start">
                                <svg
                                    className="w-4 h-4 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 496 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                    />
                                </svg>
                                Travels
                            </div>
                            <p className="text-gray-500 mb-6">
                                <small>
                                    Published <u>13.01.2022</u> by
                                    <a href="" className="text-gray-900">
                                        Anna Maria Doe
                                    </a>
                                </small>
                            </p>
                            <p className="text-gray-500">
                                Ut pretium ultricies dignissim. Sed sit amet mi
                                eget urna placerat vulputate. Ut vulputate est
                                non quam dignissim elementum. Donec a
                                ullamcorper diam.
                            </p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
                        <div className="mb-6 md:mb-0 md:order-2">
                            <div
                                className="overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                <img
                                    src="https://mdbootstrap.com/img/new/standard/city/032.jpg"
                                    className="w-full"
                                    alt="Louvre"
                                />
                                <a href="#!">
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                        style={{
                                            backgroundColor:
                                                "rgba(251, 251, 251, 0.2)",
                                        }}
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="mb-6 md:mb-0 md:order-1">
                            <h3 className="text-2xl font-bold mb-3">
                                Exhibition in Paris
                            </h3>
                            <div className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center md:justify-start">
                                <svg
                                    className="w-4 h-4 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                                    />
                                </svg>
                                Art
                            </div>
                            <p className="text-gray-500 mb-6">
                                <small>
                                    Published <u>12.01.2022</u> by
                                    <a href="" className="text-gray-900">
                                        Halley Frank
                                    </a>
                                </small>
                            </p>
                            <p className="text-gray-500">
                                Suspendisse in volutpat massa. Nulla facilisi.
                                Sed aliquet diam orci, nec ornare metus semper
                                sed. Integer volutpat ornare erat sit amet
                                rutrum.
                            </p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
                        <div className="mb-6 md:mb-0">
                            <div
                                className="overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                <img
                                    src="https://mdbootstrap.com/img/new/standard/city/059.jpg"
                                    className="w-full"
                                    alt="Louvre"
                                />
                                <a href="#!">
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                        style={{
                                            backgroundColor:
                                                "rgba(251, 251, 251, 0.2)",
                                        }}
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="mb-6 md:mb-0">
                            <h3 className="text-2xl font-bold mb-3">
                                Stock market boom
                            </h3>
                            <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center md:justify-start">
                                <svg
                                    className="w-4 h-4 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"
                                    />
                                </svg>
                                Business
                            </div>
                            <p className="text-gray-500 mb-6">
                                <small>
                                    Published <u>10.01.2022</u> by
                                    <a href="" className="text-gray-900">
                                        Joe Svan
                                    </a>
                                </small>
                            </p>
                            <p className="text-gray-500">
                                Curabitur tristique, mi a mollis sagittis, metus
                                felis mattis arcu, non vehicula nisl dui quis
                                diam. Mauris ut risus eget massa volutpat
                                feugiat. Donec.
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
