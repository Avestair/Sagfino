import { RiArrowLeftWideLine } from "react-icons/ri";
import { RiArrowRightWideLine } from "react-icons/ri";

export function NeturalButtons() {
  return (
    <button className="p-2 rounded-xl bg-gray-400 hover:bg-gray-500 transition-all duration-300 gap-4 items-center content-center font-light   md:text-base text-sm font-Vazirmatn text-white flex justify-center">
      <RiArrowRightWideLine className="md:w-5 md:h-5" />
      <p className="mt-[2px]">متن دکمه</p>
      <RiArrowLeftWideLine className="md:w-6 md:h-6 border-2 border-white rounded-md p-1" />
    </button>
  );
}

export function WarningButton() {
  return (
    <div>
      <p></p>
    </div>
  );
}

export function DangerButtons() {
  return (
    <div>
      <p></p>
    </div>
  );
}

export function successButton() {
  return (
    <div>
      <p></p>
    </div>
  );
}
