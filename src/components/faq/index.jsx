import React from "react";
import FaqQuestion from "../atoms/FaqQuestion";

const FAQ = () => {
    return (
        <div className="mb-48">
            <h2 className="font-Teko text-2xl text-blue-200 uppercase text-center">
                faqs
            </h2>
            <h3 className="font-Teko text-6xl text-white uppercase text-center mb-6">
                Frequently asked questions
            </h3>
            <div className="flex gap-4 mt-6">
                <div className="flex flex-col gap-4 flex-1">
                    <FaqQuestion
                        question="WHERE ARE YOUR COMPANY BRANCHES LOCATED?"
                        defaultVal={true}
                    />
                    <FaqQuestion
                        question="WHERE ARE YOUR COMPANY BRANCHES LOCATED?"
                        defaultVal={false}
                    />
                    <FaqQuestion
                        question="WHERE ARE YOUR COMPANY BRANCHES LOCATED?"
                        defaultVal={false}
                    />
                    <FaqQuestion
                        question="WHERE ARE YOUR COMPANY BRANCHES LOCATED?"
                        defaultVal={false}
                    />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                    <FaqQuestion
                        question="WHERE ARE YOUR COMPANY BRANCHES LOCATED?"
                        defaultVal={false}
                    />
                    <FaqQuestion
                        question="WHERE ARE YOUR COMPANY BRANCHES LOCATED?"
                        defaultVal={false}
                    />
                    <FaqQuestion
                        question="WHERE ARE YOUR COMPANY BRANCHES LOCATED?"
                        defaultVal={true}
                    />
                    <FaqQuestion
                        question="WHERE ARE YOUR COMPANY BRANCHES LOCATED?"
                        defaultVal={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default FAQ;
