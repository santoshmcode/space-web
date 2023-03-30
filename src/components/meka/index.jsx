import React from "react";
import meka from "../../assets/meka-hero.png";

function Meka() {
    return (
        <div className="flex items-center gap-40 mb-20">
            <div className="">
                <img
                    class="h-96 w-full rounded-2xl object-cover mr-15"
                    src={meka}
                    alt="meka-hero"
                />
            </div>

            <div className="">
                <h2 className="font-Teko text-2xl text-blue-200 uppercase">
                    {" "}
                    About Us
                </h2>
                <h1 className="font-Teko text-6xl text-white">DISCOVER MORE</h1>
                <h1 className="font-Teko text-6xl text-white">
                    COLLECTAND SELL
                </h1>
                <h1 className="font-Teko text-6xl text-white">RARE NFTS</h1>
                <p className="text-gray-400 font-Sora font-light">
                    {" "}
                    Lorem and ipsum dolor sit amet consectetur slides{" "}
                </p>
                <p className="text-gray-400 font-Sora font-light">
                    adipisicing elit. Incidunt dolorem nobis inventors
                </p>
                <p className="text-gray-400 font-Sora font-light">
                    minus is a corrupti quia?
                </p>

                <div className="flex mr-3 my-4">
                    <button className="mx-2 bg-gray-800 text-white font-w-2 py-2 px-4 rounded-full font-Sora font-medium text-xs">
                        Wide Range Of Platforms
                    </button>
                    <button className="mx-2 bg-gray-800 text-white font-w-2 py-2 px-4 rounded-full font-Sora font-medium text-xs">
                        {" "}
                        Wordl class Artist
                    </button>
                </div>

                <div className="flex mr-3 my-4">
                    <button className="mx-2 bg-gray-800 text-white font-w-2 py-2 px-4 rounded-full font-Sora font-medium text-xs">
                        Any Type Of Assets
                    </button>
                    <button className="mx-2 bg-gray-800 text-white font-w-2 py-2 px-4 rounded-full font-medium text-xs">
                        Fast Payments
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Meka;
