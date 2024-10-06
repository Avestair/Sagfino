import { useEffect } from "react";
import { useState } from "react";

const RowFilter = ({ values, filterName, resetTrigger }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (index) => {
    setSelectedOption(index);
  };

  useEffect(() => {
    if (resetTrigger) {
      setSelectedOption(null);
    }
  }, [resetTrigger]);

  return (
    <div className="grid gap-3">
      <p className="!text-base">{filterName}</p>
      <div className="flex md:flex-nowrap flex-wrap gap-2 md:gap-0  md:border md:border-gray-300 rounded-md w-fit">
        {values.map((item, index) => (
          <div
            key={index}
            className="flex md:!text-sm !text-xs items-center space-x-2"
          >
            <div
              onClick={() => handleSelect(index)}
              className={`cursor-pointer w-[80px] select-none flex justify-center p-2 transition-all duration-300 ease-in-out border md:rounded-none rounded-md md:border-l border-gray-300
              ${
                selectedOption === index
                  ? "bg-primary text-white"
                  : "bg-white text-black"
              }`}
            >
              {item.option}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RowFilter;
