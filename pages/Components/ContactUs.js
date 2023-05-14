import React from "react";

const ContactUs = () => {
    return (
        <>
            {/* Container for demo purpose */}
            <div>
                {/* Section: Design Block */}
                <section className="my-8 background-radial-gradient overflow-hidden rounded-lg">
                    <style
                        dangerouslySetInnerHTML={{
                            __html: "\n      .background-radial-gradient {\n        background-color: hsl(218, 41%, 15%);\n        background-image: radial-gradient(\n          650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%\n        ),\n        radial-gradient(\n          1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%\n        );\n      }\n      #radius-shape-1 {\n        height: 220px;\n        width: 220px;\n        top: -60px;\n        left: -130px;\n        background: radial-gradient(#44006b, #ad1fff);\n        overflow: hidden;\n      }\n      #radius-shape-2 {\n        border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n        bottom: -60px;\n        right: -110px;\n        width: 300px;\n        height: 300px;\n        background: radial-gradient(#44006b, #ad1fff);\n        overflow: hidden;\n      }\n      .bg-glass {\n        background-color: hsla(0, 0%, 100%, 0.9);\n        backdrop-filter: saturate(200%) blur(25px);\n      }\n    ",
                        }}
                    />
                    <div className="px-6 py-12 lg:py-24 md:px-12 text-center lg:text-left">
                        <div className="container mx-auto xl:px-32 text-gray-800">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div
                                    className="mt-12 lg:mt-0"
                                    style={{ zIndex: 10 }}
                                >
                                    <h1
                                        className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-12"
                                        style={{ color: "hsl(218, 81%, 95%)" }}
                                    >
                                        Any Query <br />
                                        <span
                                            style={{
                                                color: "hsl(218, 81%, 75%)",
                                            }}
                                        >
                                            Then Contact Us
                                        </span>
                                    </h1>
                                    <p
                                        className="opacity-70"
                                        style={{ color: "hsl(218, 81%, 85%)" }}
                                    >
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Temporibus, expedita
                                        iusto veniam atque, magni tempora
                                        mollitia dolorum consequatur nulla ?
                                    </p>
                                </div>
                                <div className="mb-12 lg:mb-0 relative">
                                    <div
                                        id="radius-shape-1"
                                        className="absolute rounded-full shadow-lg"
                                    />
                                    <div
                                        id="radius-shape-2"
                                        className="absolute shadow-lg"
                                    />
                                    <div className="block rounded-lg shadow-lg bg-glass px-6 py-12 md:px-12">
                                        <form>
                                            <div className="grid md:grid-cols-2 md:gap-6">
                                                <div className="mb-6">
                                                    <input
                                                        type="text"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        placeholder="First name"
                                                    />
                                                </div>
                                                <div className="mb-6">
                                                    <input
                                                        type="text"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        placeholder="Last name"
                                                    />
                                                </div>
                                            </div>
                                            <input
                                                type="email"
                                                className="form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Email address"
                                            />
                                            <input
                                                type="password"
                                                className="form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Password"
                                            />
                                            <div className="form-check flex justify-center mb-6">
                                                <input
                                                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckChecked"
                                                    defaultChecked=""
                                                />
                                                <label
                                                    className="form-check-label inline-block text-gray-800"
                                                    htmlFor="flexCheckChecked"
                                                >
                                                    Subscribe to our newsletter
                                                </label>
                                            </div>
                                            <button
                                                type="button"
                                                data-mdb-ripple="true"
                                                data-mdb-ripple-color="light"
                                                className="inline-block px-6 py-2.5 mb-6 w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                            >
                                                Sign up
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */}
            </div>
            {/* Container for demo purpose */}
        </>
    );
};

export default ContactUs;
