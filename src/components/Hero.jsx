import { SearchboxWithRecommendtion } from "../ui/Searchbox";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="md:w-full w-max bghero grid md:gap-24 gap-16 justify-items-center pb-12 md:pb-20">
      <Navbar />
      <div className="grid gap-6 md:mt-24 justify-items-center text-white">
        <h1 className="md:text-4xl text-2xl font-bold">
          سقفینو، سقفی برای همه
        </h1>
        <p className="md:text-2xl md:w-full text-center w-[85%] text-lg font-semibold">
          آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید
        </p>
      </div>
      <SearchboxWithRecommendtion />
    </div>
  );
}
