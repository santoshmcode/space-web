import React from "react";

const SmallCard = ({ Icon, title, subtitle, borderRight = true }) => {
    return (
        <div
            className={`flex-1 flex flex-col items-start p-10 ${
                borderRight && "border-r-2 border-bg-dark"
            }`}
        >
            <>{Icon}</>
            <div className="uppercase font-Teko text-white mt-10 font-medium text-4xl">
                {title}
            </div>
            <div className=" mt-2 w-64 font-Sora font-light text-gray-400">
                {subtitle}
            </div>
        </div>
    );
};

export default SmallCard;
