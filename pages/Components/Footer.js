import React from "react";
import Link from "next/link";

import {
    AiFillLinkedin,
    AiFillGithub,
    AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100 mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <Link
                        rel="noopener noreferrer"
                        href="/"
                        className="flex justify-center space-x-3 lg:justify-start"
                    >
                        <div className="flex justify-center cursor-pointer items-center tracking-widest font-normal text-2xl text-gray-600">
                            <div className="flex items-center justify-center w-12 h6 rounded-full dark:bg-violet-400">
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
                    </Link>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-50">
                            Product
                        </h3>
                        <ul className="space-y-1">
                            <li>
                                <Link rel="noopener noreferrer" href="/">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="/">
                                    Integrations
                                </Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="/">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="/">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-50">
                            Company
                        </h3>
                        <ul className="space-y-1">
                            <li>
                                <Link
                                    rel="noopener noreferrer"
                                    href="/Common/Help"
                                >
                                    Help
                                </Link>
                            </li>
                            <li>
                                <Link
                                    rel="noopener noreferrer"
                                    href="/Common/Privacy"
                                >
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    rel="noopener noreferrer"
                                    href="/Common/TermsOfService"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase dark:text-gray-50">
                            Developers
                        </h3>
                        <ul className="space-y-1">
                            <li>
                                <Link rel="noopener noreferrer" href="/">
                                    Priyanshu Gour
                                </Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="/">
                                    Vedant Chandaker
                                </Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="/">
                                    Guides : Lakshita maam
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase dark:text-gray-50">
                            Social media
                        </div>
                        <div className="flex justify-start space-x-3">
                            <Link
                                rel="noopener noreferrer"
                                href="https://github.com/priyanshugour70"
                                title="GitHub"
                                className="flex items-center p-1 cursor-pointer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                                </svg>
                            </Link>
                            <Link
                                rel="noopener noreferrer"
                                href="https://twitter.com/Priyanshugour70"
                                title="Twitter"
                                className="flex items-center p-1 cursor-pointer"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 fill-current"
                                >
                                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                                </svg>
                            </Link>
                            <Link
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/priyanshugour70/"
                                title="Instagram"
                                className="flex items-center p-1 cursor-pointer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    fill="currentColor"
                                    className="w-5 h-5 fill-current"
                                >
                                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Link href="/">
                <div className="py-6 text-sm text-center dark:text-gray-400">
                        <span className=" hover:text-gray-800  hover:underline cursor-pointer">
                        © 2023 DoctIn Co. All rights reserved.
                        </span> 
                </div>
            </Link>
        </footer>
    );
};

export default Footer;
