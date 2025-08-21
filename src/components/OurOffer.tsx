import XSpacing from "../wrappers/XSpacing";
import CustomButton2 from "./button/CustomButton2";
import offers from "/assets/images/offers1.png";
import { TiTickOutline } from "react-icons/ti";

const OurOffer = () => {
    return (
        <div className="bg-white py-16">
            <XSpacing>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="flex justify-center">
                        <img
                            src={offers}
                            alt="Our Offers"
                            className="w-full max-w-md rounded-2xl shadow-lg"
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex flex-col gap-6">
                        <h1 className="text-3xl md:text-4xl font-semibold text-icm-black">
                            We Offer a Full Range of{" "}
                            <span className="text-icm-red ">Digital Marketing Services!</span>
                        </h1>

                        <p className="text-gray-600 leading-relaxed">
                            We execute the latest techniques that are aligned to the success of
                            your business. We help in building brands socially to stand out from
                            the competition.
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-2">
                                <TiTickOutline className="text-icm-red text-xl mt-1" />
                                <p className="text-gray-700">
                                    <span className="font-semibold">Social Media Marketing</span> –
                                    We help brands to find potential customers and drive traffic to their website.
                                </p>
                            </div>

                            <div className="flex items-start gap-2">
                                <TiTickOutline className="text-icm-red  text-xl mt-1" />
                                <p className="text-gray-700">
                                    <span className="font-semibold">Search Engine Optimization</span> –
                                    We strategize to get first page ranking for keywords, aligned with Google Algorithms.
                                </p>
                            </div>

                            <div className="flex items-start gap-2">
                                <TiTickOutline className="text-icm-red  text-xl mt-1" />
                                <p className="text-gray-700">
                                    <span className="font-semibold">Online Reputation Management</span> –
                                    Our actionable results dramatically improve your online reputation.
                                </p>
                            </div>

                            <div className="flex items-start gap-2">
                                <TiTickOutline className="text-icm-red  text-xl mt-1" />
                                <p className="text-gray-700">
                                    <span className="font-semibold">Amazon SEO & Advertising</span> –
                                    Find automated keywords, build product listings, get ranked, and lower ACOS.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-8 my-6 w-full text-center">
                    <CustomButton2
                        label="Get a Quote"
                        bgColor="bg-icm-black"
                        textColor="text-icm-white"
                    />
                </div>
            </XSpacing>
        </div>
    );
};

export default OurOffer;
