import '../styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp


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




  //                   <i className="fas fa-map-marker-alt pt-2 pr-2">
  //   <i className="fas fa-phone-alt pt-2 pr-2">
  //     <i className="fab fa-facebook-f text-blue-900">
  //       <i className="fab fa-linkedin-in text-blue-900">
  //         {/* BUY ME A PIZZA AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
  //         <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
  //           <div>
  //             <a
  //               title="Buy me a pizza"
  //               href="https://www.buymeacoffee.com/Dekartmc"
  //               target="_blank"
  //               className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
  //             >
  //               <img
  //                 className="object-cover object-center w-full h-full rounded-full"
  //                 src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png"
  //               />
  //             </a>
  //           </div>
  //         </div>
  //       </i>
  //     </i>
  //   </i>
  // </i>