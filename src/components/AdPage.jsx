import img1 from "../../public/1.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { HiHashtag } from "react-icons/hi2";
import RelatedAds from "./RelatedAds";

export default function AdPage() {
  const ad = [
    {
      img: img1,
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.",
      tittle: "خانه اجاره ای یک",
      type: 1,
      city: "تهران",
      rahanPrice: 200,
      ejarePrice: 12,
    },
  ];
  return (
    <>
      <Navbar />
      <div className="grid mt-20 mb-56">
        <div className="flex justify-between items-center px-6">
          <div className="grid gap-8">
            <p className="text-xl">{ad[0].tittle}</p>
            <div className="flex items-center gap-2 p-2 h-fit w-fit bg-gray-100 rounded-md">
              <HiHashtag className="text-gray-600" />

              {ad[0].type == 1 ? (
                <p className="text-gray-600 text-xs">اجاره ای</p>
              ) : (
                <p className="text-gray-600 text-xs">فروشی</p>
              )}
            </div>
            <p className="w-[60%] text-sm">{ad[0].description}</p>
            <div className="flex gap-4 text-sm text-gray-700">
              <span className="bg-gray-50  rounded-md p-2 h-fit">
                رهن: {ad[0].rahanPrice} میلیون
              </span>

              <span className="bg-gray-50 rounded-md p-2 h-fit">
                اجاره: {ad[0].ejarePrice} میلیون
              </span>
            </div>
          </div>
          <img src={ad[0].img} className="w-[30%] rounded-xl h-fit" alt="" />
        </div>
      </div>
      <RelatedAds />
      <Footer />
    </>
  );
}
