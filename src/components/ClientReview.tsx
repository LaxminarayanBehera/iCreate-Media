import { Autoplay, Pagination } from "swiper/modules";
import XSpacing from "../wrappers/XSpacing";
import ClientSignature from "./ClientSignature";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import avatar1 from "/assets/clients-review/avatar2.png";
import avatar2 from "/assets/clients-review/avatar3.png";
import avatarBg from "/assets/clients-review/avatar-bg.png";
import quote from "/assets/clients-review/quoteWhite.png";
import "../App.css"

const ClientReview = () => {
    const reviews = [
        {
            id: 1,
            text: "iCreate Media is an absolutely brilliant provider of reputation services and you will not find anyone any better. Thank you for your work and communication and we look forward to continuing to work with you.",
            name: "Iona Yeung",
            role: "Sales Manager",
            avatar: avatar1,
        },
        {
            id: 2,
            text: "Outstanding experience. iCreate Media has met and gone beyond my expectations. They are knowledgeable and their work is impeccable. I highly recommend their services.",
            name: "Eli Nadler",
            role: "Web Developer",
            avatar: avatar2,
        },
        {
            id: 3,
            text: "Team at iCreate Media house seems to be very knowledgeable and professional, describing properly how things will evolve being very grounded. Qualities that are always to keep in mind when delegating a delicate field as it is PPC. Definitely hire them again.",
            name: "Andrew Watson",
            role: "Lead Manager",
            avatar: avatar2,
        },
        {
            id: 4,
            text: "These agents are having huge skills in Amazon & eBay. They increased my sales massively and I am really pleased to see the final outcome. Going to recommend these guys in future. Great Job",
            name: "Carl Quesinberry",
            role: "Lead Manager",
            avatar: avatar2,
        },
        {
            id: 5,
            text: "iCreate Media is a star company among all the other web marketing companies. Every project they have worked on has been completed successfully. I would work with them again and again…",
            name: "Sheldon Myers",
            role: "IT Head at FoxChapel Publishing",
            avatar: avatar2,
        },
    ];

    return (
        <div className="w-full bg-icm-yellow py-16">
            <XSpacing>
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center py-4">
                    {/* Left side */}
                    <div className="space-y-6 text-center md:text-left md:w-2/5">
                        <h1 className="text-5xl font-normal text-icm-black leading-snug">
                            Happy Clients <br /> About Us
                        </h1>
                        <div className="w-16 h-0.5 bg-icm-white mx-auto md:mx-0" />
                        <p className="text-2xl text-white">Words of Appreciation</p>
                        <div className="flex w-full justify-center md:justify-start items-start">
                            <ClientSignature />
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative bg-icm-black/90 text-white p-8 rounded-bl-[90px] rounded-tr-[90px] max-w-3xl h-[340px] w-full">
                            <div className="absolute -top-12 -left-12">
                                <div className="relative">
                                    <img
                                        src={avatarBg}
                                        alt="avatar bubble"
                                        className="w-fit h-fit object-contain"
                                    />
                                    <img
                                        src={avatar1}
                                        alt="avatar1"
                                        className="absolute top-6 left-8"
                                    />
                                </div>
                            </div>

                            <Swiper
                                modules={[Autoplay, Pagination]}
                                spaceBetween={0}
                                slidesPerView={1}
                                autoplay={{ delay: 4000, disableOnInteraction: false }}
                                pagination={{
                                    clickable: true,
                                    el: '.custom-pagination-outside',
                                }}
                                loop={true}
                                className="w-full testimonial-swiper cursor-grab"
                            >
                                {reviews.map((review) => (
                                    <SwiperSlide key={review.id}>
                                        <div className="flex flex-col">
                                            <p className="px-14 text-xl py-7 leading-relaxed">
                                                {review.text}
                                            </p>
                                            <div className="px-14">
                                                <h3 className="text-icm-yellow font-semibold">
                                                    {review.name}
                                                </h3>
                                                <p className="text-sm text-icm-white/30">
                                                    {review.role}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div>
                                <img
                                    src={quote}
                                    alt="quote"
                                    className="h-28 w-28 object-contain absolute bottom-14 right-14 invert-0"
                                />
                            </div>
                        </div>

                        {/* Pagination dots outside the container */}
                        <div className="custom-pagination-outside mt-6 flex justify-center gap-3" />
                    </div>
                </div>
            </XSpacing>
        </div>
    );
};

export default ClientReview;