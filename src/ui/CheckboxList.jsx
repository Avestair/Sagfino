import { useState } from "react";
import Checkbox from "./Checkbox";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function CheckboxList({ ListTittle, ListId }) {
  const [isClicked, isSetClicked] = useState(false);

  function handleClick() {
    isSetClicked(!isClicked);
  }

  function handleOnClick(e) {
    e.preventDefault();
  }

  return (
    <form className="w-fit grid md:p-4 p-2 border-[1px] border-gray-300 rounded-md">
      <div
        onClick={handleClick}
        className={`flex md:gap-16 gap-8 select-none p-2 ${
          isClicked ? "border-info" : "border-gray-300"
        } rounded-md w-fit border-2 text-sm transition-all duration-300`}
      >
        <p className="text-gray-600">{ListTittle}</p>
        {isClicked ? (
          <IoIosArrowDown className="mt-1 text-gray-600" />
        ) : (
          <IoIosArrowUp className="mt-1 text-gray-600" />
        )}
      </div>
      <ul
        className={`${
          isClicked ? "" : "hidden"
        } grid gap-1 p-2 px-2 text-gray-600`}
      >
        <li>
          <Checkbox text={"1"} />
        </li>
        <li>
          <Checkbox text={"2"} />
        </li>
        <li>
          <Checkbox text={"3"} />
        </li>
        <li>
          <Checkbox text={"4"} />
        </li>
        <li>
          <Checkbox text={"5"} />
        </li>
        <li>
          <Checkbox text={"6"} />
        </li>
        <div className="flex gap-4 mt-1">
          <input
            value="حذف همه"
            type="reset"
            className="text-xs md:text-sm text-primary border-2 focus:border-primary border-gray-300 outline-none p-2 rounded-md"
          />
          <button
            onClick={handleOnClick}
            className="text-xs md:text-sm text-Success border-2 focus:border-Success border-gray-300 outline-none p-2 rounded-md"
          >
            انتخاب همه
          </button>
        </div>
      </ul>
    </form>
  );
}
