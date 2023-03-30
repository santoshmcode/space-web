import React from "react";

const KeyCard = ({ icon, title, subTitle }) => {
    return (
        <div className="key-card rounded-3xl p-5 pr-7 flex flex-col gap-3 mb-12">
            <img className="w-20" src={icon} alt="icon" />
            <h2 className="uppercase font-Teko font-light text-2xl text-white">
                {title}
            </h2>
            <p className="font-Sora text-gray-400 font-light">
                The Metaverse Is The Next Generation Of The Internet. As One Of
                Its Earliest Explorers, You Will Help Fuel Its Expansion.
            </p>
        </div>
    );
};

export default KeyCard;
