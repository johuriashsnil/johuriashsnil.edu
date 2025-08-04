"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "@/components/Navbar/menu.css";

type UserDataType = {
    designation: string;
    name: string;
    image: string;
    message: string;
    role: string;
};

type InfoModalProps = {
    data: UserDataType;
};

export default function InfoModal({ data }: InfoModalProps) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="mx-auto w-fit">
            <div
                className="relative w-36 h-[150px] lg:w-48 lg:h-[300px] xl:w-64 overflow-hidden rounded-lg focus:outline-none cursor-pointer Navbar"
                aria-label={`View ${data.role}'s Message`}
                onClick={() => setOpenModal(true)}
            >
                <Image
                    width={400}
                    height={600}
                    src={data.image}
                    alt={data.name}
                    className="w-full h-full rounded-lg"
                />
                <div className="absolute h-2/3 top-1/3 inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-70 flex flex-col items-center justify-center transition-opacity duration-400">
                    <p className="text-white text-sm lg:text-lg font-bold">{data.role} Message</p>
                    <div className="mt-2">
                        <button
                            onClick={e => { e.stopPropagation(); setOpenModal(true); }}
                            className="flex items-center gap-1 px-4 py-2 text-sm lg:text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600"
                        >
                            <FaMagnifyingGlass />
                            <span>View Message</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div
                onClick={() => setOpenModal(false)}
                className={`fixed z-[100] w-screen ${openModal ? "visible opacity-100" : "invisible opacity-0"} inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent `}
            >
                <div
                    onClick={e => e.stopPropagation()}
                    className={`absolute Navbar w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-auto rounded-lg bg-white p-4 sm:p-6 md:p-8 drop-shadow-lg dark:bg-zinc-900 dark:text-white ${openModal ? "opacity-1 duration-300" : "scale-110 opacity-0 duration-150 "}`}
                >
                    <h1 className="mb-2 text-xl sm:text-2xl font-semibold">
                        {data.name} <span className="text-xs">{data.designation}</span>
                    </h1>
                    <div className="max-w-full mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-lg Modal">
                        <div className="mb-4 sm:mb-6">
                            <div>
                                <Image
                                    width={200}
                                    height={200}
                                    src={data.image}
                                    alt={data.name}
                                    className="w-24 sm:w-32 md:w-48 h-auto object-cover rounded-md float-left mr-2 sm:mr-4 mb-4"
                                />
                                <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed font-sans text-justify dark:text-gray-200">
                                    {data.message}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-2">
                        <button
                            onClick={() => setOpenModal(false)}
                            className="rounded-md border border-zinc-500 px-4 sm:px-5 py-[4px] sm:py-[6px] text-zinc-800 bg-white hover:bg-zinc-200 dark:text-white dark:bg-zinc-800"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
