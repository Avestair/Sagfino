import { CiPhone } from "react-icons/ci";

export default function AmlakModal({
  tittle,
  phoneNumber,
  officeNumber,
  logo,
}) {
  return (
    <div className="absolute hidden h-[100vh] w-full z-[99] inset-0 grid items-center justify-center border border-gray-100 shadow bg-white backdrop-blur-sm">
      <img src={logo} alt="" />
      <p>{tittle}</p>
      <div className="flex gap-2">
        <CiPhone />
        <p>{phoneNumber}</p>
      </div>

      <div className="flex gap-2">
        <CiPhone />
        <p>{officeNumber}</p>
      </div>
    </div>
  );
}
