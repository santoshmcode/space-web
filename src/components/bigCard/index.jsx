import React from "react";
import SmallCard from "../atoms/SmallCard";
import { AiOutlineSecurityScan, AiOutlineCheckCircle } from "react-icons/ai";
import { CiWallet } from "react-icons/ci";

const BigCard = () => {
    return (
        <div className="bg-card-bg h-460 -translate-y-32 rounded-3xl">
            <div className="flex ">
                <div className="h-40 flex-auto flex justify-around items-center border-b-2 border-bg-dark">
                    <div>
                        <div className="text-white font-Teko text-8xl font-medium">
                            1.5K+
                        </div>
                        <div className="text-gray-300 font-Sora font-light">
                            Collections
                        </div>
                    </div>
                    <div>
                        <div className="text-white font-Teko text-8xl font-medium">
                            102K+
                        </div>
                        <div className="text-gray-300 font-Sora font-medium">
                            Artworks
                        </div>
                    </div>
                    <div>
                        <div className="text-white font-Teko text-8xl font-medium">
                            3.2K+
                        </div>
                        <div className="text-gray-300 font-Sora font-light">
                            Artists
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex h-72 items-center justify-center overflow-hidden">
                <SmallCard
                    Icon={<AiOutlineSecurityScan size={48} color="#61d3f1" />}
                    title="strong security"
                    subtitle="Secure transaction and record information with 2-factor authentication (2FA)"
                />
                <SmallCard
                    Icon={<CiWallet size={48} color="#8e87fb" />}
                    title="payment options"
                    subtitle="Flexible payment of methods with Visa, Mastercard, Paypal, bank transfer"
                />
                <SmallCard
                    Icon={<AiOutlineCheckCircle size={48} color="#ce80e8" />}
                    title="market updated"
                    subtitle="The most accurate and trusted source  and cryptocurrency information"
                    borderRight={false}
                />
            </div>
        </div>
    );
};

export default BigCard;
