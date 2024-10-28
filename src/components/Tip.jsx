import TipCard from "../ui/TipCard";
import buy from "../../public/buyhouse.svg";
import searching from "../../public/housesearching.svg";
import rent from "../../public/rent.svg";

export default function Tip() {
  return (
    <div className="grid gap-10 justify-items-center mt-24 md:px-24">
      <div className="grid gap-4 justify-items-center">
        <p className="text-xl font-bold">سقیفنو، فرصتی برای همه</p>
        <p className="text-gray-700 hover:underline hover:underline-offset-4 cursor-pointer">
          اگر مالک یا در جست و جوی سقفی نو هستید کلیک کنید
        </p>
      </div>
      <div className="flex justify-evenly gap-14 w-fit ">
        <TipCard
          tittle={"به آسانی یک خانه اجاره کنید"}
          img={buy}
          paragraph={
            "در میان صدها آگهی که روزانه به وب‌سایت سقفینو افزوده می‌شود، با استفاده از بیش از ۲۸ فیلتر کاربردی تلاش کرده‌ایم خانه‌ای که در جست‌وجوی آن هستید را هر چه سریعتر پیدا و اجاره کنید."
          }
          buttontext={"اجاره خانه"}
        />
        <TipCard
          tittle={"خانه مورد علاقه تان را بخرید"}
          img={searching}
          paragraph={
            "بالای ۱ میلیون آگهی فروش در وب‌سایت سقفینو وجود دارد. ما علاوه بر آگهی‌های فراوان با به‌کارگیری املاک و مشاورین متخصص در هر شهر، تلاش می‌کنیم در تجربه لذت یک خرید آسان با شما سهیم باشد."
          }
          buttontext={"خرید خانه"}
        />
        <TipCard
          tittle={"مالک هستید؟"}
          img={rent}
          paragraph={
            "آیا می‌دانید میانگین بازدید از وب‌سایت به‌طور متوسط روزانه بالای هزاران نفر است؟ پس به‌سادگی و با چند کلیک ساده، ملک‌تان را به‌صورت رایگان در سقفینو آگهی و در سریع‌ترین زمان ممکن معامله کنید."
          }
          buttontext={"ثبت آگهی"}
        />
      </div>
    </div>
  );
}
