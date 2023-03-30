import React from "react";
import KeyCard from "../atoms/KeyCard";
import polkaDotCoin from "../../assets/polka-dot-coin.png.webp";
import stackCoin from "../../assets/stacks-coin.png.webp";
import tenzosIcon from "../../assets/tezos-coin.png.webp";

const KeyFeature = () => {
    return (
        <div className="mb-12">
            <h2 className="font-Teko text-2xl text-blue-200 uppercase text-center">
                key Feature
            </h2>
            <h3 className="font-Teko text-6xl text-white uppercase text-center mb-6">
                Access future
            </h3>

            <div className="flex justify-between gap-5">
                <KeyCard icon={polkaDotCoin} title="FUELING THE METAVERSE" />
                <KeyCard icon={stackCoin} title="INITIAL METAVERSE OFFERING" />
                <KeyCard icon={tenzosIcon} title="INCUBATION" />
            </div>
        </div>
    );
};

export default KeyFeature;
