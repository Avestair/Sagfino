import { Link } from "react-router-dom";
import Svg404 from "../ui/Svg404";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Error() {
  return (
    <>
      <Navbar />
      <div className="grid gap-4 justify-items-center mb-36  mt-24 justify-center">
        <Svg404 />
        <p className="font-medium text-xl">صفحه ی مورد نظر وجود ندارد!</p>
        <Link
          to={"/"}
          className="rounded-md text-sm p-2 transition-all duration-300 bg-primary text-white hover:bg-white  hover:text-primary border border-primary"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
      <Footer />
    </>
  );
}
