import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

import client1 from "/assets/images/clients/client1.png";
import client2 from "/assets/images/clients/client2.png";
import client3 from "/assets/images/clients/client3.png";
import client4 from "/assets/images/clients/client4.png";
import client5 from "/assets/images/clients/client5.png";
import client6 from "/assets/images/clients/client6.png";

interface Slide {
    id: number;
    image: string;
    title: string;
}

const SlideComponent = ({ card }: { card: Slide }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-white">
            <img
                src={card.image}
                alt={card.title}
                className="h-28 w-auto object-contain"
            />
        </div>
    );
};

const Client = () => {
    const cardData: Slide[] = [
        { id: 1, image: client1, title: "Client 1" },
        { id: 2, image: client2, title: "Client 2" },
        { id: 3, image: client3, title: "Client 3" },
        { id: 4, image: client4, title: "Client 4" },
        { id: 5, image: client5, title: "Client 5" },
        { id: 6, image: client6, title: "Client 6" },
    ];

    // duplicate data to make it look infinite
    const infiniteCards = [...cardData, ...cardData, ...cardData];

    return (
        <div className="w-full h-auto bg-icm-white py-10 my-5">
            <div className="text-center mb-6">
                <h1 className="text-5xl text-icm-black">Clients We Have Helped</h1>
                <p className="text-icm-black/60 text-xl py-4">
                    These are some of our clients, maybe you will be joining them soon
                </p>
            </div>

            <div className="w-full py-8 overflow-hidden pointer-events-none">
                <div className="w-11/12 mx-auto">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        loop={true}
                        grabCursor={true}
                        centeredSlides={false}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        speed={4000}
                        breakpoints={{
                            320: { slidesPerView: 2 },
                            480: { slidesPerView: 3 },
                            640: { slidesPerView: 4 },
                            768: { slidesPerView: 5 },
                            1024: { slidesPerView: 6 },
                        }}
                        className="mySwiper"
                    >
                        {infiniteCards.map((card, index) => (
                            <SwiperSlide key={`${card.id}-${index}`}>
                                <SlideComponent card={card} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Client;
