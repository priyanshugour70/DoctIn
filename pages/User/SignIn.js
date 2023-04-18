import React from "react";
import ImageCor, { LogIn1 } from "../../public/ImageCor";
import Link from "next/link";

const SignIn = () => {
    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
                <LogIn1 />
            </div>

            <div className="md:w-1/3 max-w-sm">

            <div className="my-9 flex justify-center items-center tracking-widest font-normal text-2xl text-gray-600">
                <div className="flex items-center justify-center w-8 h6 rounded-full dark:bg-violet-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900"
                    >
                        <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                    </svg>
                </div>
                <span className="text-2xl font-semibold text-blue-600">
                    Doct
                </span>{" "}
                In
            </div>
                
                <input
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                    type="password"
                    placeholder="Password"
                />
                <div className="mt-4 flex justify-between font-semibold text-sm">
                    <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                        <input className="mr-1" type="checkbox" />
                        <span>Remember Me</span>
                    </label>
                    <a
                        className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                        href="#"
                    >
                        Forgot Password?
                    </a>
                </div>
                <div className="text-center md:text-left">
                    <button
                        className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
                <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
                        Or
                    </p>
                </div>
                <div className="text-center md:text-left">
                    <label className="mr-1">Sign in with</label>
                    <button
                        type="button"
                        className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-auto h-3.5 w-3.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-auto h-3.5 w-3.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                    </button>
                </div>
                <div className="mt-9 font-semibold text-sm text-slate-500 text-center md:text-left">
                    Don't have an account?{" "}
                    <span className="text-red-600 hover:underline hover:underline-offset-4">
                        {" "}
                        <Link href="/User/SignUp">Register</Link>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default SignIn;
