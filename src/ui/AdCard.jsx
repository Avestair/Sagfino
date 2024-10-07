import { CiBookmark } from "react-icons/ci";

export default function AdCard({ address, img, tag, rahan, ejare }) {
  return (
    <div className="grid gap-4 md:hover:scale-105 transition-all duration-300 cursor-pointer rounded-md w-[80%] border border-gray-300 justify-items-center">
      <img src={img} className=" rounded-md" alt="تصویر خانه" />
      <div className="flex w-full px-4 text-xs  justify-between">
        <p className="text-gray-400">{tag}</p>
        <CiBookmark className="md:w-5 md:h-5 hover:fill-primary transition-all duration-300 cursor-pointer" />
      </div>
      <div className="grid gap-3 text-sm w-full justify-items-start px-6">
        <p className="mb-1 text-gray-700">{address}</p>
        <div className="grid gap-1 font-semibold pb-6">
          <p>{rahan} میلیون تومان رهن </p>
          <p>{ejare} میلیون تومان اجاره</p>
        </div>
      </div>
    </div>
  );
}
