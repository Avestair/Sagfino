import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export function PriceFilter() {
  const [isOpen, setIsOpen] = useState(false);

  function handleFilter() {
    setIsOpen(!isOpen);
  }

  return (
    <div className=" grid gap-3 md:text-sm text-xs">
      <div
        onClick={handleFilter}
        className={`flex gap-3 md:px-4 p-2 border w-fit  text-gray-700 rounded-md ${
          isOpen ? "border-info" : "border-gray-300"
        }`}
      >
        {isOpen ? (
          <IoIosArrowUp className="md:w-5 md:h-5 mt-[2px]" />
        ) : (
          <IoIosArrowDown className="md:w-5 md:h-5 mt-[2px]" />
        )}

        <p className="select-none">قیمت</p>
      </div>

      {/* filter container */}
      <div
        className={` gap-2 border w-fit rounded-md justify-center justify-items-center p-2 ${
          isOpen ? "border-info" : "border-gray-300"
        }   ${isOpen ? "grid" : "hidden"}`}
      >
        <div className="grid gap-2">
          <p className="px-1">رهن</p>
          <div className="flex gap-3">
            <p className="mt-1">از</p>
            <input
              type="number"
              placeholder="مثلا 100000 تومان"
              className="rounded-md text-gray-700 transition-all duration-300 placeholder:text-gray-300 border border-gray-300 outline-none focus:border-info p-2 "
            />
          </div>

          <div className="flex gap-3">
            <p className="mt-1">تا</p>
            <input
              type="number"
              placeholder="مثلا 100000000 تومان"
              className="rounded-md text-gray-700 transition-all duration-300 placeholder:text-gray-300 border border-gray-300 outline-none focus:border-info p-2 "
            />
          </div>
        </div>

        <div className="grid gap-2">
          <p className="px-1">اجاره</p>
          <div className="flex gap-3">
            <p className="mt-1">از</p>
            <input
              type="number"
              placeholder="مثلا 100000 تومان"
              className="rounded-md text-gray-700 transition-all duration-300 placeholder:text-gray-300 border border-gray-300 outline-none focus:border-info p-2 "
            />
          </div>

          <div className="flex gap-3">
            <p className="mt-1">تا</p>
            <input
              type="number"
              placeholder="مثلا 100000000 تومان"
              className="rounded-md text-gray-700 transition-all duration-300 placeholder:text-gray-300 border border-gray-300 outline-none focus:border-info p-2 "
            />
          </div>
        </div>

        <div className="flex gap-2">
          <button className="border border-gray-300 rounded-md w-[85px] md:w-[100px] text-Success p-2">
            جست و جو
          </button>
          <button className="border border-gray-300 rounded-md w-[85px] md:w-[100px] text-primary p-2">
            حذف
          </button>
        </div>
      </div>
    </div>
  );
}

export function MeterFilter() {
  const [isOpen, setIsOpen] = useState(true);

  function handleFilter() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="grid gap-2 md:text-sm text-xs text-gray-700">
      <div
        onClick={handleFilter}
        className={`flex gap-3 cursor-pointer  border ${
          isOpen ? "border-info" : "border-gray-300"
        } w-fit px-4 p-2 rounded-md`}
      >
        {isOpen ? (
          <IoIosArrowUp className="md:w-5 md:h-5" />
        ) : (
          <IoIosArrowDown className="md:w-5 md:h-5" />
        )}
        <p className="select-none">متراژ</p>
      </div>

      <div
        className={`gap-2 border border-info w-fit px-4 p-2 rounded-md ${
          isOpen ? "grid" : "hidden"
        }`}
      >
        <div className="grid gap-2">
          <div className="flex gap-3 mt-2">
            <p className="mt-1">از</p>
            <input
              type="number"
              placeholder="مثلا 70 متر"
              className="rounded-md text-gray-700 transition-all duration-300 placeholder:text-gray-300 border border-gray-300 outline-none focus:border-info p-2 "
            />
          </div>

          <div className="flex gap-2">
            <p className="mt-1">تا</p>
            <input
              type="number"
              placeholder="مثلا 800 متر"
              className="rounded-md text-gray-700 transition-all duration-300 placeholder:text-gray-300 border border-gray-300 outline-none focus:border-info p-2 "
            />
          </div>
        </div>

        <div className="flex gap-2">
          <button className="border border-gray-300 rounded-md w-[85px] md:w-[100px] text-Success p-2">
            جست و جو
          </button>
          <button className="border border-gray-300 rounded-md w-[85px] md:w-[100px] text-primary p-2">
            حذف
          </button>
        </div>
      </div>
    </div>
  );
}
