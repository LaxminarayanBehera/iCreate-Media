import image1 from "/assets/images/gridpart/one.svg";
import image2 from "/assets/images/gridpart/two.svg";
import image3 from "/assets/images/gridpart/three.svg";
import image4 from "/assets/images/gridpart/four.svg";
import image5 from "/assets/images/gridpart/five.svg";
import XSpacing from "../wrappers/XSpacing";

const DropDown = () => {
  const text = [
    {
      id: 1,
      number: "01",
      img: image1,
      text: "Search Engine Optimization",
    },
    {
      id: 2,
      number: "02",
      img: image2,
      text: "Amazon SEO & Advertising",
    },
    {
      id: 3,
      number: "03",
      img: image3,
      text: "Social Media Marketing Service",
    },
    {
      id: 4,
      number: "04",
      img: image4,
      text: "Reputation Management",
    },
    {
      id: 5,
      number: "05",
      img: image5,
      text: "Pay Per Click Management",
    },
  ];

  return (
    <XSpacing>
      <div className="flex flex-wrap gap-4 w-full bg-icm-white p-6 rounded-2xl">
        {text.map((item, index) => (
          <div
            key={item.id}
            className={`
              relative flex flex-col gap-3 items-center w-full justify-center
              rounded-2xl p-6 shadow-md cursor-pointer
              bg-icm-gray-light text-white
              ${index === 0 ? "basis-[45%] min-h-[120px]" : ""}
              ${index === 1 ? "basis-[25%] min-h-[120px]" : ""}
              ${index === 2 ? "basis-[25%] min-h-[120px]" : ""}
              ${index === 3 ? "basis-[60%] min-h-[120px]" : ""}
              ${index === 4 ? "basis-[36%] min-h-[120px]" : ""}
            `}
          >
            <img src={item.img} alt={item.text} className="w-fit h-fit" />
            {/* <span className="text-4xl font-bold text-icm-white/30">
              {item.number}
            </span> */}
            <h3 className="text-lg font-semibold text-center">{item.text}</h3>
          </div>
        ))}
      </div>
    </XSpacing>
  );
};

export default DropDown;
