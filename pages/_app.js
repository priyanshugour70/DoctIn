import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import TopFooter from "./Components/TopFooter";
import PopUp from "./Components/PopUp"

function MyApp({ Component, pageProps }) {
    return (
        <main>
        <ThemeProvider>
            <TopFooter/>
            <Navbar />
            <Component {...pageProps} />
            <div className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
            <PopUp />
            </div>
            <Footer />
        </ThemeProvider>
        </main>
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
