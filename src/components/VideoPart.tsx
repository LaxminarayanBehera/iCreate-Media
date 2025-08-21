import outerImage from "/assets/images/video2.png";
import innerImage from "/assets/images/video-control.svg";
import XSpacing from "../wrappers/XSpacing";
import CustomButton2 from "./button/CustomButton2";

const VideoPart = () => {
  return (
    <XSpacing>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-icm-black rounded-4xl shadow-md p-8">
        {/* Left Side Text */}
        <div className="text-center md:text-left pl-5">
          <h1 className="text-3xl md:text-5xl font-semibold text-icm-white leading-snug mb-4">
            The ICM Experience
          </h1>
          <p className="text-lg md:text-xl text-icm-white px-3">
            A proven track record of success
          </p>
          <div className="py-5">
            <CustomButton2
              bgColor="bg-icm-green"
              textColor="text-icm-white"
              label="Click to Show"
            />
          </div>
        </div>

        {/* Right Side Video Thumbnail */}
        <div className="relative flex justify-center items-center">
          <img
            src={outerImage}
            alt="Video Thumbnail"
            className="w-full h-[250px] md:h-[350px] rounded-2xl object-cover shadow-lg bg-icm-green"
          />
          <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
          <img
            src={innerImage}
            alt="Play Button"
            className="absolute w-16 h-16 md:w-20 md:h-20 cursor-pointer transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </XSpacing>
  );
};

export default VideoPart;
