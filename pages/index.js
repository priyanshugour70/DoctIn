import Head from "next/head";
import Image from "next/image";
import ImageCor, {CorosaleF1,CorosaleF2,CorosaleS1,CorosaleS2,CorosaleS3,CorosaleS4,Card1,Card2,Card3,} from "../public/ImageCor";
import Link from "next/link";

export default function Home() {
    return (
        <div className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
            <div className="container mx-auto px-2 py-1 lg:px-16 lg:pt-12">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <CorosaleS1 />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <CorosaleS2 />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <CorosaleF1 />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <CorosaleF2 />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <CorosaleS3 />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <CorosaleS4 />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* component */}
                <div className="p-20 flex flex-wrap items-center justify-center">
                    <section className="dark:bg-gray-800 dark:text-gray-100">
                        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
                                Consult with top doctors
                            </p>
                            <h2 className=" text-3xl font-bold leading-none text-center sm:text-5xl">
                                For Any Health Concern
                            </h2>
                        </div>
                    </section>

                    <div className="flex-shrink-0 m-3 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
                        <svg
                            className="absolute bottom-0 left-0 mb-8"
                            viewBox="0 0 375 283"
                            fill="none"
                            style={{ transform: "scale(1.5)", opacity: "0.1" }}
                        >
                            <rect
                                x="159.52"
                                y={175}
                                width={152}
                                height={152}
                                rx={8}
                                transform="rotate(-45 159.52 175)"
                                fill="white"
                            />
                            <rect
                                y="107.48"
                                width={152}
                                height={152}
                                rx={8}
                                transform="rotate(-45 0 107.48)"
                                fill="white"
                            />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div
                                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{
                                    background:
                                        "radial-gradient(black, transparent 60%)",
                                    transform:
                                        "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                                    opacity: "0.2",
                                }}
                            />
                            <Card1 />
                        </div>
                        <Link href="/Doctors/">
                            <div className="relative cursor-pointer text-white px-6 pb-6 mt-6">
                                <span className="block opacity-75 -mb-1">
                                    Top
                                </span>
                                <div className="flex justify-between">
                                    <span className="block font-semibold text-xl">
                                        Doctor&apos;s
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex-shrink-0 m-3 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
                        <svg
                            className="absolute bottom-0 left-0 mb-8"
                            viewBox="0 0 375 283"
                            fill="none"
                            style={{ transform: "scale(1.5)", opacity: "0.1" }}
                        >
                            <rect
                                x="159.52"
                                y={175}
                                width={152}
                                height={152}
                                rx={8}
                                transform="rotate(-45 159.52 175)"
                                fill="white"
                            />
                            <rect
                                y="107.48"
                                width={152}
                                height={152}
                                rx={8}
                                transform="rotate(-45 0 107.48)"
                                fill="white"
                            />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div
                                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{
                                    background:
                                        "radial-gradient(black, transparent 60%)",
                                    transform:
                                        "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                                    opacity: "0.2",
                                }}
                            />
                            <Card2 />
                        </div>
                        <Link href="/NearestDoctor/">
                            <div className="relative cursor-pointer text-white px-6 pb-6 mt-6">
                                <span className="block opacity-75 -mb-1">
                                    Doctors
                                </span>
                                <div className="flex justify-between">
                                    <span className="block font-semibold text-xl">
                                        Near You
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex-shrink-0 m-3 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
                        <svg
                            className="absolute bottom-0 left-0 mb-8"
                            viewBox="0 0 375 283"
                            fill="none"
                            style={{ transform: "scale(1.5)", opacity: "0.1" }}
                        >
                            <rect
                                x="159.52"
                                y={175}
                                width={152}
                                height={152}
                                rx={8}
                                transform="rotate(-45 159.52 175)"
                                fill="white"
                            />
                            <rect
                                y="107.48"
                                width={152}
                                height={152}
                                rx={8}
                                transform="rotate(-45 0 107.48)"
                                fill="white"
                            />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div
                                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{
                                    background:
                                        "radial-gradient(black, transparent 60%)",
                                    transform:
                                        "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                                    opacity: "0.2",
                                }}
                            />
                            <Card3 />
                        </div>
                        <Link href="/VideoConsult/">
                            <div className="relative cursor-pointer text-white px-6 pb-6 mt-6">
                                <span className="block opacity-75 -mb-1">
                                    Video
                                </span>
                                <div className="flex justify-between">
                                    <span className="block font-semibold text-xl">
                                        Consult
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
