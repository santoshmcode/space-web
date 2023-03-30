import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaBitcoin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";

function Footer() {
    return (
        <div className="flex justify-between pb-20">
            <div>
                <div className=" font-Teko text-white text-2xl h-8 mr-4 flex items-center bg-clip-text">
                    SPACE.
                </div>
                &nbsp;
                <div className="flex gap-3">
                    <AiFillTwitterCircle size={25} style={{ fill: "white" }} />
                    <FaBitcoin size={23} style={{ fill: "white" }} />
                    <IoLogoDiscord size={25} style={{ fill: "white" }} />
                    <BsGithub size={25} style={{ fill: "white" }} />
                </div>
                <br />
                <br />
                <div>
                    <h6 className="text-gray-400 font-Sora font-light text-sm">
                        All Rights reserved &#169; 2023.
                    </h6>
                </div>
            </div>

            <div className="flex gap-24">
                <div>
                    <h3 className=" font-Teko text-white text-lg h-8 mr-4 flex items-center bg-clip-text mb-2">
                        MARKETPLACE
                    </h3>
                    <h4 className="text-gray-400 font-Sora font-light text-xs mb-1">
                        {" "}
                        About us
                    </h4>
                    <h4 className="text-gray-400 font-Sora font-light text-xs mb-1">
                        Our team
                    </h4>
                    <h4 className="text-gray-400 font-Sora font-light text-xs mb-1">
                        {" "}
                        Team details
                    </h4>
                    <h4 className="text-gray-400 font-Sora font-light text-xs mb-1">
                        {" "}
                        Error 404
                    </h4>
                    <h4 className="text-gray-400 font-Sora font-light text-xs mb-1">
                        {" "}
                        Cart page
                    </h4>
                </div>

                <div>
                    <h3 className=" font-Teko text-white text-lg h-8 mr-4 flex items-center bg-clip-text mb2">
                        COMPANY
                    </h3>
                    <h4 className="text-gray-400 font-Sora font-light text-xs mb-1 mr-3">
                        Wallet
                    </h4>
                    <h4 className="text-gray-400 font-Sora font-light text-xs mb-1 mr-3">
                        Create page
                    </h4>
                    <h4 className="text-gray-400 font-Sora font-light text-xs mb-1">
                        Login page
                    </h4>
                    <h4 className="text-gray-400 font-Sora font-light text-xs mb-1">
                        Registration
                    </h4>
                    <h4 className="text-gray-400 font-Sora font-light text-xs mb-1">
                        Checkout
                    </h4>
                </div>

                <div>
                    <h3 className=" font-Teko text-white text-lg h-8 mr-4 flex items-center bg-clip-text mb-2">
                        SERVICES
                    </h3>
                    <h4 className="text-gray-400 font-Sora font-light text-xs mb-1">
                        Contact us
                    </h4>
                    <h4 className="text-gray-400 font-Sora font-light text-xs mb-1">
                        Shop page
                    </h4>
                    <h4 className="text-gray-400 font-Sora font-light text-xs mb-1">
                        Shop details
                    </h4>
                    <h4 className="text-gray-400 font-Sora font-light text-xs mb-1">
                        Collectors
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Footer;
