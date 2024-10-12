import { CiBookmark } from "react-icons/ci";

export default function AdCard({ address, img, tag, size, rahan, ejare }) {
  return (
    <div className="grid gap-5 md:hover:scale-105 transition-all duration-300 cursor-pointer rounded-2xl w-[95%] border-b border-l border-r border-gray-200 shadow shadow-gray-200 justify-items-center">
      <img src={img} className="ad-img-border" alt="تصویر خانه" />
      <div className="flex w-full px-4 text-xs  justify-between">
        <p className="text-gray-400">{tag}</p>
        <CiBookmark className="md:w-5 md:h-5 hover:fill-primary transition-all duration-300 cursor-pointer" />
      </div>
      <div className="grid gap-5 text-sm w-full justify-items-start px-6">
        <p className="mb-1 font-semibold">
          {size} متر، {address}
        </p>
        <div className="flex gap-4 text-xs  font-semibold pb-8">
          <p>{rahan} میلیون تومان رهن </p>
          <p>{ejare} میلیون تومان اجاره</p>
        </div>
      </div>
    </div>
  );
}
