import { TiTickOutline } from "react-icons/ti";
import XSpacing from "../../wrappers/XSpacing";
import CustomButton2 from "../button/CustomButton2";
import logo from "/assets/logo/icm-logo.png";
import { motion } from "framer-motion";
import { FaBolt, FaChartLine, FaShieldAlt } from "react-icons/fa";

const Subscription = () => {
  const plans = [
    {
      id: 1,
      icon: FaChartLine,
      title: "Website SEO Packages",
      subtitle: "Boost Your Search Rankings",
      firstDescription: {
        desc1: "In Depth Site Analysis",
        desc2: "Competition / Competitor's Analysis",
      },
      title2: "SEO Progressive Monthly Reports",
      secondDescription: {
        desc1: "Baseline Ranking Check",
        desc2: "Keywords URL Mapping",
        desc3: "Google Penalty Check",
        desc4: "Off-page / Content Marketing Monthly",
      },
      price: "$699.00/month",
      popular: false,
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      icon: FaBolt,
      title: "Amazon Advertising",
      subtitle: "Maximize Your Amazon Sales",
      firstDescription: {
        desc1: "30 Keyword Research per Product",
        desc2: "Online Project Management System",
      },
      title2: "Progressive Monthly Reports",
      secondDescription: {
        desc1: "Campaign Strategy Development",
        desc2: "Negative Keyword Research",
        desc3: "Promotion, Coupon, Lightning Deal",
        desc4: "Subscribe and Save Recommendations",
      },
      price: "$699.00/month",
      popular: true,
      gradient: "from-emerald-500 to-teal-400",
    },
    {
      id: 3,
      icon: FaShieldAlt,
      title: "Reputation Management",
      subtitle: "Protect Your Brand Image",
      firstDescription: {
        desc1: "Keywords / Phrases Targeting",
        desc2: "In-depth ORM Analysis",
      },
      title2: "Progressive ORM Monthly Reports",
      secondDescription: {
        desc1: "Content Marketing Monthly",
        desc2: "Search Positions Protected",
        desc3: "Push Down Negative Search Results",
        desc4: "GSA Verified and White-hat Backlinks",
      },
      price: "$699.00/month",
      popular: false,
      gradient: "from-purple-500 to-pink-400",
    },
  ];

  return (
    <div className="w-full py-16 bg-icm-white">
      <XSpacing>
        <div className="mx-auto px-6 py-10 text-center">
          <h1 className="text-5xl font-semibold text-icm-black/80 mb-4">
            Affordable Packages & Pricing
          </h1>
          <p className="text-lg text-icm-gray-light max-w-3xl mx-auto mb-12">
            We realize that each business is different and therefore we customize
            our packages based on the requirements of your business.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.id}
                  className={`group relative bg-white shadow-lg rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300 hover:bg-icm-black ${
                    plan.popular ? "scale-105 border-icm-green shadow-xl" : ""
                  }`}
                >
                  {/* Background Logo */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 transition duration-500">
                    <img
                      src={logo}
                      alt="Logo Background"
                      className="w-fit h-fit object-contain"
                    />
                  </div>

                  {/* Plan Icon */}
                  <div
                    className={`w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r ${plan.gradient} text-white text-3xl mx-auto mt-6 relative z-10`}
                  >
                    <Icon />
                  </div>

                  {/* Content */}
                  <div className="px-6 pb-8 text-left relative z-10">
                    <div className="w-full text-center">
                      <h2 className="text-2xl font-semibold text-icm-black/90 group-hover:text-icm-white mt-4">
                        {plan.title}
                      </h2>
                      <p className="text-sm text-icm-gray-dark group-hover:text-icm-white mb-4">
                        {plan.subtitle}
                      </p>
                    </div>

                    {/* First Features */}
                    <div className="mb-4">
                      <h3 className="font-medium text-lg text-icm-gray-dark group-hover:text-icm-white">
                        Features:
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-gray-600 group-hover:text-icm-white">
                          <TiTickOutline className="text-icm-green text-xl flex-shrink-0" />
                          {plan.firstDescription.desc1}
                        </li>
                        <li className="flex items-center gap-2 text-gray-600 group-hover:text-icm-white">
                          <TiTickOutline className="text-icm-green text-xl flex-shrink-0" />
                          {plan.firstDescription.desc2}
                        </li>
                      </ul>
                    </div>

                    {/* Second Features */}
                    <div className="mb-4 py-2">
                      <h3 className="font-medium text-lg py-2 text-gray-800  group-hover:text-icm-white">
                        {plan.title2}
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-gray-600 group-hover:text-icm-white">
                          <TiTickOutline className="text-icm-green text-xl flex-shrink-0" />
                          {plan.secondDescription.desc1}
                        </li>
                        <li className="flex items-center gap-2 text-gray-600 group-hover:text-icm-white">
                          <TiTickOutline className="text-icm-green text-xl flex-shrink-0" />
                          {plan.secondDescription.desc2}
                        </li>
                        <li className="flex items-center gap-2 text-gray-600 group-hover:text-icm-white">
                          <TiTickOutline className="text-icm-green text-xl flex-shrink-0" />
                          {plan.secondDescription.desc3}
                        </li>
                        <li className="flex items-center gap-2 text-gray-600 group-hover:text-icm-white">
                          <TiTickOutline className="text-icm-green text-xl flex-shrink-0" />
                          {plan.secondDescription.desc4}
                        </li>
                      </ul>
                    </div>

                    {/* Price */}
                    <p className="text-2xl text-center font-bold text-icm-green mb-6 group-hover:text-white">
                      {plan.price}
                    </p>

                    {/* Button */}
                    <div className="w-full text-center">
                      <CustomButton2
                        textColor="text-icm-white"
                        bgColor="bg-icm-green"
                        label="Purchase"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </XSpacing>
    </div>
  );
};

export default Subscription;
