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
