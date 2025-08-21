import { IconButton } from "@mui/material";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";

import clsx from "clsx";
import {
    motion,
    useAnimation,
    useMotionValueEvent,
    useScroll,
} from "framer-motion";

import { useNavigate, useLocation } from "react-router-dom";
import type { DrawerRefType } from "../wrappers/Drawer";

import bannerImage from "/assets/logo/full-logo.png";
import MagicScrollWrapper from "../wrappers/MagicScrollWrapper";
import XSpacing from "../wrappers/XSpacing";
import Drawer from "../wrappers/Drawer";
import DropDown from "../components/DropDown";

const NavBar = () => {
    const drawerEl = useRef<DrawerRefType>(null);
    const { scrollY } = useScroll();
    const controls = useAnimation();
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [showServices, setShowServices] = useState(false);

    const navItems = [
        { label: "Home", path: "/" },
        { label: "Services", path: "/services" },
        { label: "About Us", path: "/about" },
        { label: "Blog", path: "/blog" },
        { label: "Career", path: "/career" },
        { label: "Get In Touch", path: "/contact" },
    ];

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 0);
    });

    useEffect(() => {
        controls.start({
            y: scrolled ? 0 : -100,
            opacity: scrolled ? 1 : 0,
            transition: {
                duration: 0.6,
                ease: [0.77, 0, 0.175, 1],
            },
        });
    }, [scrolled, controls]);

    const handleNavigation = (path: string) => {
        navigate(path);
        drawerEl.current?.close?.();
    };

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    // Handle dropdown with delay for better UX
    const handleMouseEnter = (label: string) => {
        if (label === "Services") {
            setShowServices(true);
        }
    };

    const handleMouseLeave = (label: string) => {
        if (label === "Services") {
            setShowServices(false);
        }
    };

    return (
        <MagicScrollWrapper>
            <nav
                className={clsx(
                    "navbar w-full lg:py-4 items-center relative justify-center flex text-mw-sm overflow-visible h-full"
                )}
            >
                <motion.div
                    animate={controls}
                    className="w-full absolute inset-0 top-0 left-0 bg-icm-white backdrop-blur-[1px] z-1"
                />
                <XSpacing>
                    <div className="flex items-center justify-between w-full relative z-2 rounded-md">
                        <div className="flex lg:hidden gap-2 justify-center items-center hover:cursor-pointer ">
                            <img src={bannerImage} alt=" logo" className="h-24 w-24 object-contain" />
                        </div>
                        <div className="w-fit lg:w-full h-">
                            <Drawer
                                ref={drawerEl}
                                muiDrawerProps={{
                                    anchor: "right",
                                    disableScrollLock: true,
                                }}
                                menu={
                                    <IconButton
                                        className="text-[clamp(20px,4vw,28px)]"
                                        sx={{ p: 2 }}
                                        onClick={() => drawerEl?.current?.open?.()}
                                    >
                                        <HiOutlineBars3 className="text-lnb-gray-hard-dark text-4xl" />
                                    </IconButton>
                                }
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full h-full lg:mt-0 space-y-6 lg:space-y-1">
                                    {/* Desktop Logo */}
                                    <div className="flex flex-col items-center justify-center">
                                        <button
                                            onClick={() => handleNavigation("/")}
                                            className="bg-transparent"
                                        >
                                            <div className="hidden lg:flex text-center gap-1 justify-center items-center font-bold text-lg lg:text-2xl bg-transparent text-lnb-beige md:pt-2 lg:pb-0 cursor-pointer transition duration-200">
                                                <img
                                                    src={bannerImage}
                                                    alt="bannerImage"
                                                    className="h-24 w-24 object-contain"
                                                />
                                            </div>
                                        </button>
                                    </div>

                                    {/* Nav Links */}
                                    <div className="flex flex-col lg:flex-row items-center justify-center flex-1 space-y-6 lg:space-y-0 lg:space-x-8">
                                        {navItems.map((item, i) => (
                                            <div
                                                key={i}
                                                onMouseEnter={() => handleMouseEnter(item.label)}
                                                onMouseLeave={() => handleMouseLeave(item.label)}
                                            >
                                                <button
                                                    type="button"
                                                    onClick={() => handleNavigation(item.path)}
                                                    className={clsx(
                                                        "relative text-center font-bold text-lg transition-all ease-in-out hover:cursor-pointer",
                                                        item.label === "Get In Touch" && "lg:hidden",
                                                        isActive(item.path)
                                                            ? "lg:text-icm-green lg:scale-110"
                                                            : "lg:text-icm-black hover:scale-110 transition-all ease-in-out"
                                                    )}
                                                >
                                                    {item.label}
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Dropdown — render once under the full navbar */}
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={
                                            showServices
                                                ? { height: "auto", opacity: 1 }
                                                : { height: 0, opacity: 0 }
                                        }
                                        transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
                                        className="hidden lg:block absolute left-0 top-full w-full bg-icm-white  rounded-2xl z-50 shadow-xl overflow-hidden"
                                        onMouseEnter={() => setShowServices(true)}
                                        onMouseLeave={() => setShowServices(false)}
                                    >
                                        <DropDown />
                                    </motion.div>

                                    {/* Contact Button */}
                                    <div className="hidden lg:flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6">
                                        <div
                                            onClick={() => handleNavigation("/contact")}
                                            className={clsx(
                                                "flex text-center justify-center items-center font-bold text-sm lg:text-base px-6 py-2 rounded-3xl cursor-pointer border-2 transition duration-200",
                                                isActive("/contact")
                                                    ? "bg-icm-green text-icm-white"
                                                    : "bg-icm-green text-icm-white border-icm-green"
                                            )}
                                        >
                                            Get In Touch
                                        </div>
                                    </div>
                                </div>
                            </Drawer>
                        </div>
                    </div>
                </XSpacing>
            </nav>
        </MagicScrollWrapper>
    );
};

export default NavBar;
