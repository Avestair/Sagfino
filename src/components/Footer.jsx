import { RiInstagramFill } from "react-icons/ri";
import { BsTelegram } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { DesktopSvg, MobileSvg } from "../ui/Svgs";
import FooterLogo from "../ui/FooterLogo";
import NeshanEtemad from "../ui/Neshanetemad";
import LinkTag from "../ui/Link";

export default function Footer() {
  return (
    <div className="grid bg-[#F9F9F9] gap-6 md:mt-24">
      <div className="grid  bg-[#F9F9F9] gap-8 px-24">
        <p className="text-xl mt-8 text-center font-semibold">
          سقفینو، سقفی ایده آل برای زندگی
        </p>
        <div className="flex justify-between p-4 border-b-2 pb-12 border-gray-300">
          <div className="grid gap-4 justify-items-center text-sm text-[#717171]">
            <p className="text-[#353535] text-lg">بازارهای املاک و مستقلات</p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              بازار املاک و مستقلات تهران
            </p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              بازار املاک و مستقلات اصفهان
            </p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              بازار املاک و مستقلات شمال
            </p>
          </div>

          <div className="grid gap-4 justify-items-center text-sm text-[#717171]">
            <p className="text-[#353535] text-lg">بیشترین جست و جوها</p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              آپارتمان نزدیک مترو
            </p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              خانه نزدیک به خیابان اصلی
            </p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              آپارتمان تک واحده
            </p>
          </div>

          <div className="grid gap-4 justify-items-center text-sm text-[#717171]">
            <p className="text-[#353535] text-lg">
              پر امتیازترین مشاوران املاک
            </p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              میترا جباری
            </p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              حسام الدین عزیزی
            </p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              بهرام معشوف
            </p>
          </div>

          <div className="grid gap-3 justify-items-start text-sm text-[#717171]">
            <p className="text-[#353535] text-lg">با ما در ارتباط باشید</p>
            <div className="flex gap-2">
              <FaPhoneAlt className="fill-primary w-5 h-5" />
              <p className="hover:text-primary cursor-pointer transition-all duration-300">
                تفلن
              </p>
            </div>
            <div className="flex gap-2">
              <RiInstagramFill className="fill-primary w-5 h-5" />
              <p className="hover:text-primary cursor-pointer transition-all duration-300">
                اینستاگرام
              </p>
            </div>
            <div className="flex gap-2">
              <BsTelegram className="fill-primary w-5 h-5" />
              <p className="hover:text-primary cursor-pointer transition-all duration-300">
                تلگرام
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly p-4 pb-12 ">
          <div className="grid grid-cols-auto gap-3 w-fit text-sm text-[#717171]">
            <DesktopSvg />
            <MobileSvg />
            <p className="text-lg w-fit text-[#353535]">
              تجربه لذت خانه دار شدن سریع و آسان
            </p>
            <p className="max-w-[300px]">
              سقفینو پلی است تا به سرعت در بین هزاران آگهی ثبت‌شده جست‌وجو کنید.
              ملک مورد نظر را پیدا کنید و برای انجام معامله‌ای مطمئن، با مشاورین
              املاک معتمد و متخصص شهرتان در ارتباط باشید.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-[#717171]">
            <p className="text-lg text-[#353535]">خدمات</p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              خرید
            </p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              اجاره
            </p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              >ثبت رایگان آگهی ملک
            </p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              املاک و مستقلات
            </p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              مشاورین املاک
            </p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              اخبار روز املاک
            </p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              سوال ملکی دارید؟
            </p>
          </div>

          <div className="grid gap-3 text-sm text-[#717171]">
            <p className="text-lg text-[#353535]">اطلاعات</p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              دانلود اپلیکیشن سقفینو
            </p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              تماس با ما
            </p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              داستان سقفینو
            </p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              پرسش های پر تکرار
            </p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              یک سقف; بلاگ سقفینو
            </p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              حریم سخصی شما
            </p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              تعهدات ما و شما
            </p>
          </div>

          <div className="grid gap-3 text-sm text-[#717171]">
            <p className="text-lg text-[#353535]">حساب کاربری</p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              پروفایل من
            </p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              ملک ها نشان شده
            </p>
            <p className="hover:text-primary cursor-pointer transition-all duration-300">
              آگهی های من
            </p>
            <span className="mt-10">
              <NeshanEtemad />
            </span>
          </div>
        </div>

        <span className="grid justify-items-center">
          <FooterLogo />
        </span>
      </div>
      <p className="text-gray-500 text-sm text-center p-2 bg-[#EDEDED] !w-full">
        تمامی حقوق این سایت محفوظ می باشد
      </p>
    </div>
  );
}
