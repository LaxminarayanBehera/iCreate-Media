import logo from "/assets/logo/full-logo-2.png";
import upwork from "/assets/logo/upwork-lgo.png";
import fiver from "/assets/logo/Fiverr-Logo.png";
import {
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaCalendarAlt,
  FaLinkedin,
} from "react-icons/fa";
import XSpacing from "../wrappers/XSpacing";

const Footer = () => {
  const QuickLinks = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "Services", href: "#services" },
    { id: 3, name: "About Us", href: "#about" },
    { id: 4, name: "Blog", href: "#blog" },
    { id: 5, name: "Career", href: "#career" },
    { id: 6, name: "Contact Us", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      hoverColor: "hover:text-blue-500",
      bgHover: "hover:bg-blue-500",
      link: "#",
    },
    {
      icon: FaLinkedin,
      hoverColor: "hover:text-cyan-400",
      bgHover: "hover:bg-cyan-400",
      link: "#",
    },
    {
      icon: FaDribbble,
      hoverColor: "hover:text-pink-500",
      bgHover: "hover:bg-pink-500",
      link: "#",
    },
    {
      icon: FaInstagram,
      hoverColor: "hover:text-red-500",
      bgHover: "hover:bg-red-500",
      link: "#",
    },
    {
      icon: FaGithub,
      hoverColor: "hover:text-icm-green",
      bgHover: "hover:bg-icm-green",
      link: "#",
    },
  ];

  return (
    <footer className="w-full bg-icm-gray-dark text-icm-white relative overflow-hidden">
      <XSpacing>
        <div className="relative z-10 pt-6 md:pt-20 pb-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-4 pb-6 border-b border-icm-green">
            {/* Company Info */}
            <div className="lg:col-span-1 ">
              <div className="group">
                <img
                  src={logo}
                  alt="iCreate Media Logo"
                  className="h-28 w-auto  transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>

              <p className="text-gray-300 leading-relaxed text-sm mb-4">
                iCreate Media is a Digital Marketing agency with a passionate
                in-house team delivering innovative Web and Marketing solutions
                for businesses worldwide.
              </p>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-icm-white relative inline-block">
                  Follow Us
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-icm-green to-icm-cyan rounded-full"></div>
                </h4>

                <div className="flex gap-3 flex-wrap">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        className={`group relative overflow-hidden p-3 bg-icm-green/80 text-black rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer ${social.bgHover} hover:text-white shadow-lg hover:shadow-xl`}
                      >
                        <IconComponent className="text-lg relative z-10 transition-transform duration-300 group-hover:rotate-12" />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-icm-white relative inline-block">
                Quick Links
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-icm-green to-icm-cyan rounded-full"></div>
              </h3>

              <ul className="space-y-3">
                {QuickLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-icm-cyan transition-all duration-300 hover:translate-x-2 inline-flex items-center group text-sm"
                    >
                      <span className="w-2 h-2 bg-icm-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative">
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-icm-cyan transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-icm-white relative inline-block">
                Contact Us
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-icm-green to-icm-cyan rounded-full"></div>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-icm-green/20 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-icm-green/30 transition-colors duration-300">
                    <FaMapMarkerAlt className="text-icm-green text-sm" />
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Plot No D-160, Top Floor, Phase 8<br />
                    Industrial Area, Sector 73, Sahibzada Ajit Singh Nagar,
                    Punjab 160071
                  </p>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-icm-green/20 rounded-lg flex items-center justify-center group-hover:bg-icm-green/30 transition-colors duration-300">
                    <FaPhoneAlt className="text-icm-green text-sm" />
                  </div>
                  <a
                    href="tel:+919646094101"
                    className="text-sm text-gray-300 hover:text-icm-cyan transition-colors duration-300"
                  >
                    +91 9646094101
                  </a>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-icm-green/20 rounded-lg flex items-center justify-center group-hover:bg-icm-green/30 transition-colors duration-300">
                    <FaEnvelope className="text-icm-green text-sm" />
                  </div>
                  <a
                    href="mailto:admin@icreate-media.com"
                    className="text-sm text-gray-300 hover:text-icm-cyan transition-colors duration-300"
                  >
                    admin@icreate-media.com
                  </a>
                </div>
              </div>

              {/* Hire Us Section */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-icm-white relative inline-block">
                  Hire Us
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-icm-green to-icm-cyan rounded-full"></div>
                </h4>

                <div className="space-y-3 mb-2">
                  <div className="flex flex-col gap-4">
                    <img
                      src={upwork}
                      alt="Upwork"
                      className="h-8 object-contain w-fit transition-transform duration-300 hover:scale-105 hover:cursor-pointer "
                    />
                    <img
                      src={fiver}
                      alt="Fiverr"
                      className="h-8 object-contain w-fit transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-icm-white relative inline-block">
                Our Location
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-icm-green to-icm-cyan rounded-full"></div>
              </h3>

              <div className="relative group">
                <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.218526200885!2d76.70445477466065!3d30.71225648662358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef3e3ff0fc2f%3A0xaf36970e7d47b5e3!2siCreate%20Media!5e0!3m2!1sen!2sin!4v1755608017774!5m2!1sen!2sin"
                  width="100%"
                  height="180"
                  loading="lazy"
                  className="rounded-2xl shadow-lg border-2 border-icm-green/20 group-hover:border-icm-green/40 transition-all duration-300 group-hover:shadow-xl"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none"></div>
              </div>

              <button className="w-full mt-4 group flex items-center justify-center gap-3 bg-gradient-to-r from-icm-green/20 to-icm-cyan/20 hover: hover:text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium border border-icm-green/30 ">
                <FaCalendarAlt className="group-hover:rotate-12 transition-transform duration-300" />
                Schedule a Meeting
              </button>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="text-center pb-4 pt-2">
            <p className="text-sm text-gray-400">
              Copyright © {new Date().getFullYear()}
              <span className="text-icm-green font-medium mx-1">
                iCreate Media
              </span>
              | Designed & Developed by <span>iCreate Media</span>
            </p>
          </div>
        </div>
      </XSpacing>
    </footer>
  );
};

export default Footer;
