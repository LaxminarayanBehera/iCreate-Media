import XSpacing from "../wrappers/XSpacing";
import CustomButton2 from "./button/CustomButton2";
import ScoreCheck from "/assets/images/score.png";

const CheckScore = () => {
    return (
        <div className="bg-icm-black py-16">
            <XSpacing>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                    <div className="flex flex-col gap-6 text-icm-white">
                        <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
                            What’s Your Online Reputation Score?
                        </h1>
                        <p className="text-lg text-icm-white/55">
                            Instantly check your website’s SEO and reputation issues — 100%
                            free!
                        </p>


                        <div className="flex flex-col gap-4 mt-4">
                            <input
                                type="url"
                                placeholder="Enter your website URL"
                                className="w-full px-4 py-3 rounded-2xl border border-icm-gray-dark bg-icm-gray-light text-icm-white placeholder-icm-white/30 focus:outline-none focus:ring-2 focus:ring-icm-yellow-dark"
                            />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-2xl border border-icm-gray-dark bg-icm-gray-light text-icm-white placeholder-icm-white/30 focus:outline-none focus:ring-2 focus:ring-icm-yellow-dark"
                            />
                            <CustomButton2 label="Check Now" bgColor="bg-icm-green" textColor="text-icm-white" />
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center">
                        <img src={ScoreCheck} alt="SEO Score" className="max-w-sm w-full" />
                    </div>
                </div>
            </XSpacing>
        </div>
    );
};

export default CheckScore;
