import React, { useState } from "react";

const FaqQuestion = ({ question, defaultVal }) => {
    const [active, setActive] = useState(defaultVal);
    const handleOpenFAQ = () => {
        setActive(!active);
    };
    return (
        <div className="bg-[#32303c] w-full rounded-3xl overflow-hidden transition-all">
            <div
                onClick={handleOpenFAQ}
                className={`font-Teko ${
                    active ? "text-bg-dark" : "text-gray-500"
                } font-medium flex items-center justify-between cursor-pointer py-2 px-4 ${
                    active && "bg-blue-200"
                }`}
            >
                <div className="text-xl">{question}</div>
                <div className="text-3xl">+</div>
            </div>
            {active && (
                <div className="font-Sora text-white font-light text-xs px-4 py-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Omnis vero a amet temporibus vel, perspiciatis, voluptates
                    nihil ducimus nobis consequatur itaque reprehenderit libero
                    eaque aut, possimus culpa exercitationem ex accusantium.
                </div>
            )}
        </div>
    );
};

export default FaqQuestion;
