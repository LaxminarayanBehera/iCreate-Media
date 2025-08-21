type CustomButton2Props = {
  label: string;
  bgColor?: string;
  textColor?: string;
};

const CustomButton2 = ({ label, bgColor, textColor }: CustomButton2Props) => {
  return (
    <button
      className={` px-6 py-3 rounded-full font-semibold overflow-hidden ${bgColor} ${textColor}`}
    >
      <span className=" z-10 uppercase">{label}</span>
    </button>
  );
};

export default CustomButton2;
