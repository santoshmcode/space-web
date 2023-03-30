import React from "react";
import Button from "../atoms/Button";
import EthereumLogo from "../../assets/ethereum-3d-logo.png";

const SectionOne = () => {
    return (
        <div className="h-[820px] -mt-20 pt-28 flex">
            <div className="w-2/4">
                <div className="uppercase font-Teko font-bold text-white max-w-xl text-8xl leading-{88px}">
                    discover collect sell digit nft.
                </div>
                <div className="text-gray-500 font-Sora font-light mb-6">
                    Generate 10,000+ FT Collection Only by uploading the layers,
                    and get ready to sell your collection.
                </div>
                <Button
                    text="Get Started"
                    className="bg-primary-blue text-white hover:bg-blue-700 mr-3"
                />
                <Button
                    text="Join Discord"
                    className="bg-transparent border text-white hover:bg-white hover:text-bg-dark"
                />
            </div>
            <div className="w-2/4 relative">
                <img
                    src={EthereumLogo}
                    alt="ethereum-logo"
                    className="-mt-6 h-{500px}"
                />
            </div>
        </div>
    );
};

export default SectionOne;
