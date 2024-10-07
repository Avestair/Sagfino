import { SearchboxWithRecommendtion } from "../ui/Searchbox";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="w-full bghero grid md:gap-24 gap-8 justify-items-center md:pb-12">
      <Navbar />
      <div className="grid gap-3 justify-items-center text-white">
        <h1 className="text-2xl">سقفینو، سقفی برای همه</h1>
        <p>آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید </p>
      </div>
      <SearchboxWithRecommendtion />
    </div>
  );
}
