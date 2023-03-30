import React from "react";
function Colletion() {
    return (
        <div className="flex mb-12">
            <div style={{ margin: "auto" }}>
                <h2 className="font-Teko text-2xl text-blue-200">COLLECTION</h2>
                <h1 className="font-Teko text-6xl text-white">BORED APES</h1>
                <h1 className="font-Teko text-6xl text-white">NFT ITEMS</h1>
                <p className="text-gray-400 font-Sora font-medium text-xs">
                    {" "}
                    Lorem and ipsum dolor sit amet consectetur slides{" "}
                </p>
                <p className="text-gray-400 font-Sora font-medium text-xs">
                    adipisicing elit. Incidunt dolorem nobis inventore.{" "}
                </p>
                <br />
                <button className="border-2 text-white font-bold py-2 px-4 rounded-full">
                    {" "}
                    View On Opensea
                </button>
            </div>
            <div
                id="app"
                className="max-w-screen-md mx-auto px-4 md:px-8 py-12 transition-all duration-500 ease-linear w-874"
            >
                <div className="relative">
                    <div className="gap-2 slides-container h-72 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
                        <div className="w-52 slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                            <img
                                className="h-full object-cover rounded-2xl"
                                src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?w=740&t=st=1680115763~exp=1680116363~hmac=4cd34135ce758030334120a30a6fcb21c311b5c455299f9a580663c59bd7f3cb"
                                alt="mountain_image"
                            />
                        </div>
                        <div className="w-52 slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                            <img
                                className="h-full object-cover rounded-2xl"
                                src="https://s3-prod.adage.com/s3fs-public/20220311_MeUndies_3x2.jpg"
                                alt="mountain_image"
                            />
                        </div>
                        <div className="w-52 slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                            <img
                                className="h-full object-cover rounded-2xl"
                                src="https://i.pinimg.com/originals/53/b2/a4/53b2a4138e99e0081f5d0af94df950b1.png"
                                alt="mountain_image"
                            />
                        </div>
                        <div className="w-52 slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                            <img
                                className="h-full object-cover rounded-2xl"
                                src="https://s3-prod.adage.com/s3fs-public/20220311_MeUndies_3x2.jpg"
                                alt="mountain_image"
                            />
                        </div>
                        <div className="w-52 slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                            <img
                                className="h-full object-cover rounded-2xl"
                                src="https://img.freepik.com/premium-vector/hand-drawn-monkey-ape-vr-box-virtual-nft-style_361671-246.jpg?w=740"
                                alt="mountain_image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Colletion;
