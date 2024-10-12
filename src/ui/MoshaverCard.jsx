export default function meshaverCard({ img, tittle, company, rate }) {
  return (
    <div className="grid w-fit justify-items-center p-4 gap-4 border border-gray-200 rounded-md">
      <img src={img} className=" w-[60%] rounded-full" alt="" />
      <p className="font-bold">{tittle}</p>
      <p className="text-gray-600 md:text-sm text-xs">{company}</p>
      <p className="text-gray-600 md:text-sm text-xs">امتیاز {rate} از 10</p>
      <button></button>
    </div>
  );
}
