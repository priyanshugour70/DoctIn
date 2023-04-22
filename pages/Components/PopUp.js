import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { BookmarkIcon } from "@heroicons/react/24/outline";

const PopUp = () => {
    return (
        <section className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
            {/* BUY ME A PIZZA AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
            <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div className="relative px-5 py-2 font-medium text-white group">

                <label htmlFor="my-modal-3" className="relative px-5 py-2 font-medium text-white group">
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                    <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                    <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                    <span className="relative">Join</span>
                </label>
                </div>

                {/* Put this part before </body> tag */}
                <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                />
                <div className="modal">
                    <div className="modal-box relative">
                        <label
                            htmlFor="my-modal-3"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>
                        <h3 className="text-lg font-bold">
                            Hello..! if your Want to Join ..!
                        </h3>
                        <p className="py-4">
                            As an Doctor then you can properly fill out this form, but please
                            be careful about the time that you fill it out.!
                        </p>
                        <Link href="/Doctors/JoinAsDoctor">
                            <Button className="flex items-center gap-3">
                                <BookmarkIcon
                                    strokeWidth={2}
                                    className="h-5 w-5"
                                />{" "}
                                Join As Doctor
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopUp