import { SearchboxWithRecommendtion } from "../ui/Searchbox";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="w-full bghero grid md:gap-24 gap-8 justify-items-center md:pb-20">
      <Navbar />
      <div className="grid gap-6 md:mt-24 justify-items-center text-white">
        <h1 className="text-4xl font-bold">سقفینو، سقفی برای همه</h1>
        <p className="md:text-2xl font-semibold">
          آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید{" "}
        </p>
      </div>
      <SearchboxWithRecommendtion />
    </div>
  );
}
