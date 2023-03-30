import React from "react";
import image1 from "../../assets/cube.png";
import joinMan from "../../assets/join-img.png";
function Join() {
    return (
        <div class="flex justify-center h-80 mb-28">
            <a class="flex flex-col items-center justify-between bg-indigo-600  rounded-3xl shadow md:flex-row w-full relative dark:border-gray-700">
                <img
                    class="-translate-y-9 object-cover w-full rounded-t-lg h-full md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
                    src={joinMan}
                    alt="join"
                />
                <div className="absolute translate-x-96">
                    <img className="w-24" src={image1} alt="" />
                </div>
                <div class="flex flex-col justify-between p-4 leading-normal mr-20">
                    <h1 className="font-Teko text-6xl text-white">
                        JOIN US NOW
                    </h1>
                    <p className="text-gray-400 font-Sora font-light">
                        {" "}
                        Lorem and ipsum dolor sit amet consectetur slides{" "}
                    </p>
                    <p className="text-gray-400 font-Sora font-light">
                        adipisicing elit. Incidunt dolorem nobis inventore.{" "}
                    </p>
                    <br />
                    <button className="border-2 text-white  py-3 px-4 rounded-full w-44">
                        Join Tournament
                    </button>
                </div>
            </a>
        </div>
    );
}

export default Join;
