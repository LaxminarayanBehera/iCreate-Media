import { motion } from "framer-motion";
import XSpacing from "../wrappers/XSpacing";
import about1 from "/assets/about/about1.svg";
import about2 from "/assets/about/about2.svg";
import about3 from "/assets/about/about3.svg";
import about4 from "/assets/about/about4.svg";
import CustomButton2 from "./button/CustomButton2";

const About = () => {
    const showText = [
        {
            id: 1,
            name: about1,
            title: "ETHICAL APPROACH",
            description: "Driven by Integrity, Honesty, Dedication and Commitment",
        },
        {
            id: 2,
            name: about2,
            title: "KICK-OFF MEETING",
            description: "Understand your goals, obstacles, marketing wins plans",
        },
        {
            id: 3,
            name: about3,
            title: "DAILY INTERACTION",
            description: "Well informed of the progress",
        },
        {
            id: 4,
            name: about4,
            title: "100% WHITE HAT SEO",
            description: "Our SEO methods are 100% white hat and natural",
        },
    ];

    return (
        <div className="w-full py-16">
            <XSpacing>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {showText.map((item) => (
                        <motion.div
                            key={item.id}
                            className="flex flex-col items-center bg-icm-gray-light/10 text-center p-6 rounded-tl-[50px] cursor-pointer rounded-br-[50px]   transition"
                            whileHover={{
                                x: [-20, -20, 20, -20, 20, 0], // wiggle left & right
                                rotate: [0, -50, 20, -20, 2, 0], // slight 3D tilt
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <img
                                src={item.name}
                                alt={item.title}
                                className="w-36 h-36 object-contain mb-4"
                            />
                            <h2 className="text-2xl text-icm-black mb-2">
                                {item.title}
                            </h2>
                            <p className="text-icm-black text-base">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
                <div className="py-10 flex gap-6 mt-4">
                    <CustomButton2 label="More Info" textColor="text-icm-white" bgColor="bg-icm-black" />
                    <CustomButton2 label="Get Started" textColor="text-icm-white" bgColor="bg-icm-green" />
                </div>
            </XSpacing>
        </div>
    );
};

export default About;
