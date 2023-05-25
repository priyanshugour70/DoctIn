import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function () {
    return (
        <div>
            <h1 className="text-gray-900 text-3xl text-center ">
                Nearest Doctor&apos;s
            </h1>

            <Doctors />
        </div>
    );
}

const people = [
    {
        name: "Leslie Alexander",
        role: "Co-Founder / CEO",
        imageUrl: "/Images/Doctors/Doctor1.avif",
        Link: '/Doctors',
    },
    {
        name: "Leslie Alexander",
        role: "Co-Founder / CEO",
        imageUrl: "/Images/Doctors/Doctor1.avif",
        Link: '/Doctors',
    },
    {
        name: "Leslie Alexander",
        role: "Co-Founder / CEO",
        imageUrl: "/Images/Doctors/Doctor1.avif",
        Link: '/Doctors',
    },
    {
        name: "Leslie Alexander",
        role: "Co-Founder / CEO",
        imageUrl: "/Images/Doctors/Doctor1.avif",
        Link: '/Doctors',
    },
    {
        name: "Leslie Alexander",
        role: "Co-Founder / CEO",
        imageUrl: "/Images/Doctors/Doctor1.avif",
        Link: '/Doctors',
    },
    {
        name: "Leslie Alexander",
        role: "Co-Founder / CEO",
        imageUrl: "/Images/Doctors/Doctor1.avif",
        Link: '/Doctors',
    },
    {
        name: "Leslie Alexander",
        role: "Co-Founder / CEO",
        imageUrl: "/Images/Doctors/Doctor1.avif",
        Link: '/Doctors',
    },

    // More people...
];

function Doctors() {
    return (
        <div className="bg-white py-8 sm:py-8">
            <ul role="list" className="">
                {people.map((person) => (
                    <li key={person.name}>
                        <div className=" py-2 sm:py-2 flex items-center gap-x-6">
                            <Link href={person.Link}>
                                <Image
                                    className="h-16 w-16 rounded-full"
                                    src={person.imageUrl}
                                    alt="Doc Image"
                                    height={60}
                                    width={60}
                                />
                            </Link>
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                    {person.name}
                                </h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">
                                    {person.role}
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
