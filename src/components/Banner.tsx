import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import XSpacing from "../wrappers/XSpacing";
import image1 from "/assets/images/banner/slider1.png";
import image2 from "/assets/images/banner/slider2.png";
import image3 from "/assets/images/banner/slider4.png";
import image4 from "/assets/images/banner/slider5.png";
import image5 from "/assets/images/banner/slider3.png";
import CustomButton from "./button/CustomButton";
import CustomButton2 from "./button/CustomButton2";

const Banner = () => {
    return (
        <div className="w-full h-screen">
            <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                effect="fade"
                className="w-full h-screen cursor-pointer"
            >
                {/* Slide 1 */}

                <SwiperSlide>
                    <div className="w-full h-screen flex justify-center items-center bg-icm-green">
                        <XSpacing>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
                                {/* Left content */}
                                <div className="text-center md:text-left space-y-6">
                                    <h1 className="text-4xl md:text-5xl font-bold text-icm-black">
                                        Pay Per Click <br /> Management
                                    </h1>
                                    <p className=" text-lg text-icm-white max-w-lg mx-auto md:mx-0">
                                        We have finely tuned process that utilizes tightly themed
                                        campaigns and smart reporting that makes it easy to discover
                                        ads with the best return-on-investment.
                                    </p>
                                    <div className="flex w-full gap-3 justify-center md:justify-start">
                                        <CustomButton />
                                        <CustomButton2
                                            label="Get Started"
                                            bgColor="bg-icm-white"
                                            textColor="text-icm-black"
                                        />
                                    </div>
                                </div>

                                {/* Right image */}
                                <div className="hidden md:flex justify-center items-center">
                                    <img
                                        src={image4}
                                        alt="Reputation Management"
                                        className=" max-h-[200px] md:max-h-[400px] w-full object-contain"
                                    />
                                </div>
                            </div>
                        </XSpacing>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="w-full h-screen flex justify-center items-center bg-icm-yellow-dark">
                        <XSpacing>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
                                {/* Left content */}
                                <div className="text-center md:text-left space-y-6">
                                    <h1 className="text-4xl md:text-5xl font-bold text-icm-black">
                                        Amazon <br /> Advertising
                                    </h1>
                                    <p className="text-lg text-icm-white max-w-lg mx-auto md:mx-0">
                                        Next stage of growth with sponsored ads & AMZ SEO
                                    </p>
                                    <div className="flex gap-3 w-full justify-center md:justify-start">
                                        <CustomButton />
                                        <CustomButton2
                                            label="Our Services"
                                            bgColor="bg-icm-white"
                                            textColor="text-icm-black"
                                        />
                                    </div>
                                </div>

                                {/* Right image */}
                                <div className="hidden md:flex justify-center items-center">
                                    <img
                                        src={image2}
                                        alt="Reputation Management"
                                        className="max-h-[400px] w-full object-contain"
                                    />
                                </div>
                            </div>
                        </XSpacing>
                    </div>
                </SwiperSlide>

                {/* slider3 */}
                <SwiperSlide>
                    <div className="w-full h-screen flex justify-center  items-center bg-icm-cyan">
                        <XSpacing>
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center h-full">
                                {/* Left content */}
                                <div className="flex flex-col justify-center items-center text-center md:text-left space-y-6">
                                    <h1 className="text-4xl md:text-5xl font-bold text-icm-black">
                                        Reputation Management
                                    </h1>
                                    <p className="text-lg text-center text-icm-white max-w-lg mx-auto md:mx-0">
                                        Creating a strong personal or brand Reputation and push down
                                        negative search results.
                                    </p>
                                    <CustomButton />
                                </div>

                                {/* Right image */}
                                <div className="flex justify-center items-center">
                                    <img
                                        src={image3}
                                        alt="Reputation Management"
                                        className="max-h-[230px] w-full object-cover"
                                    />
                                </div>
                            </div>
                        </XSpacing>
                    </div>
                </SwiperSlide>

                {/* slider 4 */}
                <SwiperSlide>
                    <div className="w-full h-screen flex justify-center items-center bg-icm-blue">
                        <XSpacing>
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center h-full">
                                {/* Left content */}
                                <div className="flex flex-col justify-center items-center text-center md:text-left space-y-6">
                                    <h1 className="text-4xl md:text-5xl font-bold text-icm-black">
                                        Search Engine optimization
                                    </h1>
                                    <p className="text-lg text-center w-full text-icm-white max-w-lg mx-auto md:mx-0">
                                        Discover visibility "Organic" , "Editorial" or "Natural" &
                                        Website traffic
                                    </p>
                                    <div className="flex gap-3">
                                        <CustomButton />
                                    </div>
                                </div>

                                {/* Right image */}
                                <div className="flex justify-center items-center">
                                    <img
                                        src={image1}
                                        alt="Reputation Management"
                                        className="max-h-[230px] w-full object-contain"
                                    />
                                </div>
                            </div>
                        </XSpacing>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-screen flex justify-center items-center bg-icm-red">
                        <XSpacing>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
                                {/* left side F */}
                                <div className="hidden md:flex justify-center items-center">
                                    <img
                                        src={image5}
                                        alt="Reputation Management"
                                        className="max-h-[400px] w-full object-contain"
                                    />
                                </div>
                                {/* right side */}
                                <div className="text-center md:text-left space-y-6">
                                    <h1 className="text-4xl md:text-5xl font-bold text-icm-black">
                                        Social Media marketing service
                                    </h1>
                                    <p className="text-lg text-icm-white max-w-lg mx-auto md:mx-0">
                                        <p>
                                            iCreate Media will help you Set actionable social media
                                            marketing goals and Research your audience by using curate
                                            engaging content.
                                        </p>
                                        <p>
                                            We will also help you to increase Brand Awareness and
                                            personalized experience for your customers.
                                        </p>
                                        <p>
                                            We believe in Cost-Effective and Better Customer
                                            Satisfaction
                                        </p>
                                    </p>
                                    <div className="flex gap-3 w-full justify-center md:justify-start">
                                        <CustomButton />
                                        <CustomButton2
                                            label="Get Started"
                                            bgColor="bg-icm-white"
                                            textColor="text-icm-black"
                                        />
                                    </div>
                                </div>
                            </div>
                        </XSpacing>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
