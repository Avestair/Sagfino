export default function TipCard({ img, paragraph, tittle, buttontext }) {
  return (
    <div className=" grid justify-items-center gap-12 bg-white mb-16 !w-fit h-fit text-sm border border-gray-200 shadow shadow-gray-200 rounded-md p-4">
      <img src={img} alt="" />
      <div className="grid gap-4 justify-items-center">
        <p className="text-bold text-xl">{tittle}</p>
        <p className="text-sm w-fit text-center text-gray-700">{paragraph}</p>
      </div>
      <button className="bg-primary text-white border hover:bg-white hover:border hover:border-primary hover:text-primary transition-all duration-300 rounded-md p-2 w-full">
        {buttontext}
      </button>
    </div>
  );
}
