import React, { useState } from "react";

const Navbar = () => {
    return (
        <nav className="flex items-center py-4 px-8">
            <div className="flex items-center">
                <div className="icon font-Teko text-transparent text-3xl h-8 mr-4 flex items-center bg-clip-text">
                    SPACE
                </div>
            </div>
            <div className="flex items-center ml-24">
                <a
                    href="#home"
                    className="font-Teko font-medium text-2xl text-white uppercase mx-4 hover:text-gray-200"
                >
                    home
                </a>
                <a
                    href="#marketplace"
                    className="font-Teko font-light text-2xl text-white uppercase mx-4"
                >
                    marketplace
                </a>
                <a
                    href="#blog"
                    className="font-Teko font-light text-2xl text-white uppercase mx-4"
                >
                    blog
                </a>
                <a
                    href="#road-map"
                    className="font-Teko font-light text-2xl text-white uppercase mx-4"
                >
                    road map
                </a>
            </div>
            <div className="flex justify-end flex-grow">
                <button className="w-40 h-12 font-Sora font-medium text-sm rounded-full  bg-primary-blue text-white px-4 py-2 hover:bg-blue-700 ">
                    Connect Wallet
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
