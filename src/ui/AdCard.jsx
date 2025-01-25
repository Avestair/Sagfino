import { IoBookmark } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import toast from "react-hot-toast";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdCard({ address, img, tag, size, rahan, ejare }) {
  const [isBookmarked, setIsBookmarked] = useState(true);

  function handleBookmark(event) {
    event.stopPropagation();
    isBookmarked ? toast.error("نشان حذف شد") : toast.success("آگهی نشان شد!");
    setIsBookmarked(!isBookmarked);
  }

  return (
    <Link to={"/ads/:adId"}>
    <div className="grid gap-5 md:hover:scale-105 transition-all duration-300 cursor-pointer rounded-2xl md:w-[95%] w-full border-b border-l border-r border-gray-200 shadow-md justify-items-center">
      <img src={img} className="ad-img-border select-none" alt="تصویر خانه" />
      <div className="flex w-full px-4 text-xs  justify-between">
        <Link to={"/"}>
          <p className="text-gray-400 hover:text-gray-600 transition-all duration-300 select-none">
            {tag}
          </p>
        </Link>
        {isBookmarked ? (
          <IoBookmark
            onClick={handleBookmark}
            className="w-5 h-5 text-primary transition-all duration-300 cursor-pointer"
          />
        ) : (
          <CiBookmark
            onClick={handleBookmark}
            className="w-5 h-5 hover:text-primary transition-all duration-300 cursor-pointer"
          />
        )}
      </div>
        <div className="grid gap-5 text-sm w-full justify-items-start px-6 select-none">
          <p className="mb-1 font-semibold">
            {size} متر، {address}
          </p>
          <div className="flex gap-4 text-xs  font-semibold pb-8 select-none">
            <p>{rahan} میلیون تومان رهن </p>
            <p>{ejare} میلیون تومان اجاره</p>
          </div>
        </div>
    </div>
    </Link>
  );
}
