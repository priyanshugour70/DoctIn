import React from "react";
import MapboxMap from "./MapboxMap";
import Doct from "./Doctors";

const Index = () => {
    return (
        <>
            <section className="text-gray-600 body-font relative min-h-screen">
                <div className=" absolute inset-0 bg-gray-300">
                    <MapboxMap />
                </div>
                <div className="Z-10 container px-5 py-20 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-5 md:mt-0 relative z-10 shadow-md">
                        <Doct />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;
