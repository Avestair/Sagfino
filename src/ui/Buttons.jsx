import { RiArrowLeftWideLine } from "react-icons/ri";
import { RiArrowRightWideLine } from "react-icons/ri";
import { RiTimeLine } from "react-icons/ri";

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
    <button className="p-2 rounded-xl bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 gap-4 items-center content-center font-light   md:text-base text-sm font-Vazirmatn text-white flex justify-center">
      <RiArrowRightWideLine className="md:w-5 md:h-5" />
      <p className="mt-[2px]">متن دکمه</p>
      <RiArrowLeftWideLine className="md:w-6 md:h-6 border-2 border-white rounded-md p-1" />
    </button>
  );
}

export function DangerButtons() {
  return (
    <button className="p-2 rounded-xl bg-red-600 hover:bg-red-700 transition-all duration-300 gap-4 items-center content-center font-light   md:text-base text-sm font-Vazirmatn text-white flex justify-center">
      <RiArrowRightWideLine className="md:w-5 md:h-5" />
      <p className="mt-[2px]">متن دکمه</p>
      <RiArrowLeftWideLine className="md:w-6 md:h-6 border-2 border-white rounded-md p-1" />
    </button>
  );
}

export function SuccessButton() {
  return (
    <button className="p-2 rounded-xl bg-green-600 hover:bg-green-700 transition-all duration-300 gap-4 items-center content-center font-light   md:text-base text-sm font-Vazirmatn text-white flex justify-center">
      <RiArrowRightWideLine className="md:w-5 md:h-5" />
      <p className="mt-[2px]">متن دکمه</p>
      <RiArrowLeftWideLine className="md:w-6 md:h-6 border-2 border-white rounded-md p-1" />
    </button>
  );
}

export function ArrowKeyLeft({ disabled }) {
  return (
    <button
      className={`border-2 rounded-md ${
        disabled
          ? "text-gray-400 pointer-events-none border-gray-400"
          : "text-primary hover:scale-105 transition-all duration-300 border-primary"
      } p-2 w-fit`}
    >
      <RiArrowLeftWideLine className="w-5 h-5" />
    </button>
  );
}

export function ArrowKeyRight({ disabled }) {
  return (
    <button
      className={`border-2 rounded-md ${
        disabled
          ? "text-gray-400  pointer-events-none border-gray-400"
          : "text-primary hover:scale-105 transition-all duration-300 border-primary"
      } p-2 w-fit`}
    >
      <RiArrowRightWideLine className="w-5 h-5" />
    </button>
  );
}

export function TimeIcon() {
  return (
    <div>
      <button className="p-2 rounded-md w-fit border-2 pointer-events-none border-gray-400 opacity-75 text-gray-400">
        <RiTimeLine className="w-5 h-5" />
      </button>
    </div>
  );
}
