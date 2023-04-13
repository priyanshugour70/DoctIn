import React from "react";
import Link from "next/link";


const Navbar = () => {
  
  return (
    <header className="sticky top-0 hsc flex justify-between bg-gray-200 shadow-md py-3 px-6 items-center">
      <Link href={"/"}>
        <div className="flex justify-center items-center tracking-widest  font-normal text-3xl text-gray-600">
          <span className="text-3xl font-semibold text-blue-600">Doct</span>{" "}
          In
        </div>
      </Link>
    </header>
  )
}

export default Navbar
