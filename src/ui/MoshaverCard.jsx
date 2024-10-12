import { FaStar } from "react-icons/fa";

export default function meshaverCard({ img, tittle, company, rate }) {
  return (
    <div className="grid w-fit justify-items-center p-4 gap-4 border border-gray-100 shadow rounded-xl">
      <img src={img} className=" w-[60%] rounded-full" alt="" />
      <p className="font-bold">{tittle}</p>
      <p className="text-gray-600 md:text-sm text-xs">{company}</p>
      <div className="flex gap-2 justify-center py-2">
        <FaStar className="fill-yellow-400 w-5 h-5" />
        <p className="text-gray-600 mt-[2px] md:text-sm text-xs">
          امتیاز {rate} از 10
        </p>
      </div>
      <button className="border border-primary w-[60%] rounded-xl p-2 text-sm text-primary hover:bg-primary hover:text-white transition-all duration-300">
        نمایش پروفایل
      </button>
    </div>
  );
}
