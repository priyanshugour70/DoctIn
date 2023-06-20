import Link from "next/link";
import React from "react";

export default function Doct () {
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
        name: "Dr. Ajit Verma | Bansal Hospital",
        role: " Neurology",
        imageUrl: "https://bansalhospital.com/wp-content/uploads/2020/09/Ajit-Verma.jpg",
        Link: '/NearestDoctor/DoctProfile',
    },{
        name: "Dr. Mansi Jain | LifeLine Hospital",
        role: " MBBS, MD- Radiology",
        imageUrl: "https://imagesx.practo.com/providers/dr-mansi-jain-radiologist-bhopal-81c69076-73fe-4e85-a688-70fa22614357.jpg?i_type=t_100x100",
        Link: '/NearestDoctor/DoctProfile',
    },{
        name: "Dr. Rajesh Verma | Krishna Care Center",
        role: " MBBS- General Physician",
        imageUrl: "https://imagesx.practo.com/providers/dr-rajesh-verma-general-physician-bhopal-bfc0223d-ee5d-41c0-846f-c115259b8973.jpg?i_type=t_100x100",
        Link: '/NearestDoctor/DoctProfile',
    },{
        name: "Dr. Neeraj Gupta | Shree Sidhi Vinayak Hospital",
        role: " MBBS, MS - General Surgery",
        imageUrl: "https://imagesx.practo.com/providers/dr-neeraj-gupta-urologist-bhopal-fe1dd80b-469e-427b-8f8f-c561a2261a18.jpg?i_type=t_100x100",
        Link: '/NearestDoctor/DoctProfile',
    },{
        name: "Dr. H. H. Trivedi | Bansal Hospital",
        role: " M.D., FISE, FICP, FICMU",
        imageUrl: "https://bansalhospital.com/wp-content/uploads/2020/09/Dr-H-H-Trivedi-213x230.png",
        Link: '/NearestDoctor/DoctProfile',
    },{
        name: "Dr. Shrikant Jain | LIfeLine Hospital",
        role: " MBBS, Anesthesiologist",
        imageUrl: "https://imagesx.practo.com/providers/dr-shrikant-jain-anesthesiologist-bhopal-7c39c009-564d-40f1-81a0-5d75740114e2.jpg?i_type=t_100x100",
        Link: '/NearestDoctor/DoctProfile',
    }
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
                                <img
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
