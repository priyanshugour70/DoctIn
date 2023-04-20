import Link from "next/link";
import React from "react";
import Image from "next/image";
import ImageCor, { Cc1, Cc2, Cc3, Cc4, Cc5 } from "../../public/ImageCor";

const ConsultCorosole = () => {
    return (
        <div className="carousel rounded-box w-full my-4 mb-8 sm-w-64 carousel-end">
            <div className="carousel-item m-3">
                <CarouselCard
                    title="Gynaecologist"
                    desc="Period doubts or Pregnancy"
                    lnk="/Doctors"
                    image={<Cc1 />}
                />
            </div>
            <div className="carousel-item m-3">
                <CarouselCard
                    title="Dermatologist"
                    desc=" Acne, pimple or skin issues "
                    lnk="/Doctors"
                    image={<Cc2 />}
                />
            </div>
            <div className="carousel-item m-3">
                <CarouselCard
                    title="Urologist"
                    desc="diabetes, obesity and smoking"
                    lnk="/Doctors"
                    image={<Cc3 />}
                />
            </div>
            <div className="carousel-item m-3">
                <CarouselCard
                    title="ENT Doctors"
                    desc="Cold, cough or fever symptoms"
                    lnk="/Doctors"
                    image={<Cc4 />}
                />
            </div>
            <div className="carousel-item m-3">
                <CarouselCard
                    title="Psychiatrist"
                    desc="Depression, sadness or anxiety"
                    lnk="/Doctors"
                    image={<Cc5 />}
                />
            </div>
        </div>
    );
};

export default ConsultCorosole;

const CarouselCard = (props) => {
    return (
        <div className="flex flex-col justify-center max-w-xs p-6 shadow-2xl rounded-xl sm:px-812 dark:bg-gray-900 dark:text-gray-100">
            <div className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square">
              {props.image}
            </div>
            <div className="space-y-4 text-center divide-y divide-gray-700">
                <div className="my-5 space-y-1">
                    <h2 className="text-sm font-semibold sm:text-xl">
                        {props.title}
                    </h2>
                    <p className="px-5 text-xs sm:text-xs dark:text-gray-400">
                        {props.desc}
                    </p>
                </div>
                <div className="flex justify-center text-blue-900 pt-2 space-x-4 align-center">
                    <Link href={props.lnk}>CONSULT NOW</Link>
                </div>
            </div>
        </div>
    );
};
