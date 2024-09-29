import { RiSearch2Line } from "react-icons/ri";

export default function Searchbox() {
  return (
    <div className="flex font-Vazirmatn text-sm">
      <RiSearch2Line className="w-6 h-6 mt-1" />
      <input type="text" className="rounded-md  focus:outline-none p-1 " />
    </div>
  );
}
