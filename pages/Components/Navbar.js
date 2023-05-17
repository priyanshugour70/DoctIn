"use client";
import Link from "next/link";
import ImageCor, { ProfileImg } from "../../public/ImageCor";
import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
    IconButton,
} from "@material-tailwind/react";
import {
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    Square3Stack3DIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    RocketLaunchIcon,
    Bars2Icon,
} from "@heroicons/react/24/outline";

import { HiCreditCard } from "react-icons/hi";

// profile menu component
const profileMenuItems = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
        lnk: "/User/MyProfile",
    },
    {
        label: "Edit Profile",
        icon: Cog6ToothIcon,
        lnk: "/User/EditProfile",
    },
    {
        label: "Account",
        icon: HiCreditCard,
        lnk: "/Account",
    },
    {
        label: "About Us",
        icon: InboxArrowDownIcon,
        lnk: "/Common/AboutUs",
    },
    {
        label: "Contact Us",
        icon: LifebuoyIcon,
        lnk: "/Common/ContactUs",
    },
    {
        label: "Sign In",
        icon: PowerIcon,
        lnk: "/User/SignIn",
    },
];

function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="candice wu"
                        className="border border-blue-500 p-0.5"
                        src="https://media.licdn.com/dms/image/D5603AQGHCJg_VKVHvQ/profile-displayphoto-shrink_800_800/0/1672745029677?e=1687392000&v=beta&t=tmHhTJafq6U7V8rnPupOWh2VIiWlH_ToEcyhrvX-QKs"
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${
                            isMenuOpen ? "rotate-180" : ""
                        }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon, lnk }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <Link key={label} href={lnk}>
                            <MenuItem
                                key={label}
                                onClick={closeMenu}
                                className={`flex items-center gap-2 rounded ${
                                    isLastItem
                                        ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                        : ""
                                }`}
                            >
                                {React.createElement(icon, {
                                    className: `h-4 w-4 ${
                                        isLastItem ? "text-red-500" : ""
                                    }`,
                                    strokeWidth: 2,
                                })}
                                <Typography
                                    as="span"
                                    variant="small"
                                    className="font-normal"
                                    color={isLastItem ? "red" : "inherit"}
                                >
                                    {label}
                                </Typography>
                            </MenuItem>
                        </Link>
                    );
                })}
            </MenuList>
        </Menu>
    );
}

// nav list menu
const navListMenuItems = [
    {
        title: "General Medicine ",
        description:
            "A general medicine doctor diagnoses and treats various illnesses and injuries in patients of all ages.",
        lnk: "/Doctors/GeneralMedicine",
    },
    {
        title: "Cardiologists",
        description:
            "A cardiologist is a medical doctor who specializes in diagnosing and treating heart-related conditions and diseases.",
        lnk: "/Doctors/Cardiologist",
    },
    {
        title: "Neurologists",
        description:
            "A neurologist is a medical doctor who specializes in diagnosing and treating disorders of the nervous system, including the brain and spinal cord.",
        lnk: "/Doctors/Neurologist",
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const triggers = {
        onMouseEnter: () => setIsMenuOpen(true),
        onMouseLeave: () => setIsMenuOpen(false),
    };

    const renderItems = navListMenuItems.map(({ title, description, lnk }) => (
        <Link href={lnk} key={title}>
            <a key={title}>
                <MenuItem>
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                        {title}
                    </Typography>
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                    >
                        {description}
                    </Typography>
                </MenuItem>
            </a>
        </Link>
    ));

    return (
        <React.Fragment>
            <Menu open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                    <Typography as="a" variant="small" className="font-normal">
                        <Link href="/Doctors">
                            <MenuItem
                                {...triggers}
                                className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
                            >
                                <Square3Stack3DIcon className="h-[18px] w-[18px]" />
                                Doctor&apos;s
                                <ChevronDownIcon
                                    strokeWidth={2}
                                    className={`h-3 w-3 transition-transform ${
                                        isMenuOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </MenuItem>
                        </Link>
                    </Typography>
                </MenuHandler>
                <MenuList
                    {...triggers}
                    className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid"
                >
                    <Card
                        color="blue"
                        shadow={false}
                        variant="gradient"
                        className="col-span-3 grid h-full w-full place-items-center rounded-md"
                    >
                        <RocketLaunchIcon
                            strokeWidth={1}
                            className="h-28 w-28"
                        />
                    </Card>
                    <ul className="col-span-4 flex w-full flex-col gap-1">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <Link href="/Doctors">
                <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
                    <Square3Stack3DIcon className="h-[18px] w-[18px]" />
                    Doctor&apos;s
                </MenuItem>
            </Link>
            <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
                {renderItems}
            </ul>
        </React.Fragment>
    );
}

// nav list component
const navListItems = [
    {
        label: "Medicine",
        icon: UserCircleIcon,
        lnk: "./Medicine",
    },
    {
        label: "Video Consult",
        icon: CubeTransparentIcon,
        lnk: "./VideoConsult",
    },
    {
        label: "Surgeries",
        icon: CodeBracketSquareIcon,
        lnk: "./Surgeries",
    },
];

// function NavList() {
//     return (
//         <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
//             <NavListMenu />
//             {navListItems.map(({ label, icon, lnk }, key) => (
//                 <Link href={lnk}>
//                     <Typography
//                         key={label}
//                         as="a"
//                         variant="small"
//                         color="blue-gray"
//                         className="font-normal"
//                     >
//                         <MenuItem className="flex items-center gap-2 lg:rounded-full">
//                             {React.createElement(icon, {
//                                 className: "h-[18px] w-[18px]",
//                             })}
//                             {label}
//                         </MenuItem>
//                     </Typography>
//                 </Link>
//             ))}
//         </ul>
//     );
// }

function NavList() {
    return (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            <NavListMenu />
            {navListItems.map(({ label, icon, lnk }, key) => (
                <Link key={key} href={lnk}>
                    <Typography
                        key={label}
                        as="a"
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        <MenuItem className="flex items-center gap-2 lg:rounded-full">
                            {React.createElement(icon, {
                                className: "h-[18px] w-[18px]",
                            })}
                            {label}
                        </MenuItem>
                    </Typography>
                </Link>
            ))}
        </ul>
    );
}

export default function ComplexNavbar() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false)
        );
    }, []);

    return (
        <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
            <div className="relative mx-auto flex items-center text-blue-gray-900">
                <Link href="./">
                    <Typography
                        as="a"
                        className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
                    >
                        <div className="flex justify-center items-center tracking-widest font-normal text-2xl text-gray-600">
                            <div className="flex items-center justify-center w-8 h6 rounded-full dark:bg-violet-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    fill="currentColor"
                                    className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900"
                                >
                                    <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                                </svg>
                            </div>
                            <span className="text-2xl font-semibold text-blue-600">
                                Doct
                            </span>
                            In
                        </div>
                    </Typography>
                </Link>
                <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
                    <NavList />
                </div>
                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden"
                >
                    <Bars2Icon className="h-6 w-6" />
                </IconButton>
                <ProfileMenu />
            </div>
            <MobileNav open={isNavOpen} className="overflow-scroll">
                <NavList />
            </MobileNav>
        </Navbar>
    );
}
