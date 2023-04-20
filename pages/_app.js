import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { BookmarkIcon } from "@heroicons/react/24/outline";

const PopUp = () => {
    return (
        <section className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
            {/* BUY ME A PIZZA AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
            <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div className="relative px-5 py-2 font-medium text-white group">

                <label htmlFor="my-modal-3" className="relative px-5 py-2 font-medium text-white group">
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                    <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                    <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                    <span className="relative">Join</span>
                </label>
                </div>

                {/* Put this part before </body> tag */}
                <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                />
                <div className="modal">
                    <div className="modal-box relative">
                        <label
                            htmlFor="my-modal-3"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>
                        <h3 className="text-lg font-bold">
                            Hello..! if your Want to Join ..!
                        </h3>
                        <p className="py-4">
                            As an Doctor then you can properly fill out this form, but please
                            be careful about the time that you fill it out.!
                        </p>
                        <Link href="/Doctors/JoinAsDoctor">
                            <Button className="flex items-center gap-3">
                                <BookmarkIcon
                                    strokeWidth={2}
                                    className="h-5 w-5"
                                />{" "}
                                Join As Doctor
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Navbar />
            <Component {...pageProps} />
            <div className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
            <PopUp />
            </div>
            <Footer />
        </ThemeProvider>
    );
}

export default MyApp;

// <div className="flex justify-center items-center tracking-widest font-normal text-2xl text-gray-600"><div className="flex items-center justify-center w-8 h6 rounded-full dark:bg-violet-400">
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 32 32"
//             fill="currentColor"
//             className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900"
//         >
//             <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
//         </svg>
//     </div>
//     <span className="text-2xl font-semibold text-blue-600">
//         Doct
//     </span>{" "}
//     In
// </div>

// mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6
