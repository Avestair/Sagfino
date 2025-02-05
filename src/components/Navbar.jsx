import { useState } from "react";
import { RedBorderButton } from "../ui/Buttons";
import LinkTag from "../ui/Link";
import { DesktopSvg, MobileSvg } from "../ui/Svgs";
import { FiX } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { LuUserCircle } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isNavclosed, setIsNavClosed] = useState(true);
  const [isLoggedIn, seIsLoggedIn] = useState(false);

  function handleMenu() {
    setIsNavClosed(!isNavclosed);
  }

  return (
    <>
      <div className="flex justify-center md:w-full">
        <div className="flex md:justify-between bg-black md:w-[90%] mt-4 rounded-xl justify-between px-8 p-2 bg-white">
          {isNavclosed ? (
            <FiMenu
              onClick={handleMenu}
              className="w-7 h-7 md:hidden mt-1 text-gray-700"
            />
          ) : (
            <FiX
              onClick={handleMenu}
              className="w-7 h-7 md:hidden mt-1 text-gray-700"
            />
          )}
          <Link className="md:hidden" to={"/"}>
            <MobileSvg />
          </Link>
          {/*Desktop NavLinks*/}
          <div className=" gap-8 md:flex hidden items-center">
            <Link to={"/"}>
              <DesktopSvg />
            </Link>
            <Link className="link" to={"/rent"}>
              اجاره
            </Link>
            <Link className="link" to={"/buy"}>
              خرید
            </Link>
            <Link className="link" to={"/realestates"}>
              املاک و مستقلات
            </Link>
            <Link className="link" to={"/advisors"}>
              مشاورین املاک
            </Link>
            <Link className="link" to={"/news"}>
              اخبار روز
            </Link>
          </div>
          {/*End Of Desktop NavLinks*/}

          <div className="flex justify-center gap-8 items-center">
            {isLoggedIn ? (
              <div className="hidden md:flex justify-center gap-2 hover:text-primary text-gray-700 cursor-pointer transition-all duration-300 ">
                <LuUserCircle className="w-5 h-5" /> <p>پروفایل</p>
              </div>
            ) : (
              <div className="md:grid hidden">
                <LinkTag hiddenMobile content={"ورود"} />
              </div>
            )}

            <RedBorderButton content={"ثبت آگهی"} />
          </div>
        </div>

        {/*Mobile NavLinks*/}
        <div
          className={` h-[100svh] text-sm mt-4  w-[50%] backdrop-blur-sm divide-neutral-200 p-3 md:hidden ${
            isNavclosed ? "hidden" : "grid"
          }`}
        >
          <div className="grid gap-4  h-fit px-2">
            <LinkTag content={"اجاره"} />
            <LinkTag content={"خرید"} />
            <LinkTag content={"املاک و مستقلات"} />
            <LinkTag content={"مشاورین املاک"} />
            <LinkTag content={"اخبار روز"} />
          </div>
        </div>
      </div>
    </>
  );
}
