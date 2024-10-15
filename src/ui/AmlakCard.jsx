export default function AmlakCard({
  img,
  tittle,
  address,
  rate,
  activeAds,
  comments,
}) {
  return (
    <div className="grid w-fit justify-items-center p-4 pb-8 gap-4 border border-gray-100 shadow rounded-xl">
      <img src={img} className="rounded-full w-[30%]" alt="" />
      <p className="text-lg">{tittle}</p>
      <p className="text-gray-700">{address}</p>
      <p className="text-gray-600 text-sm">میزان رضایتمندی: {rate} از 10</p>
      <p className="text-gray-600 text-sm">تعداد آگهی فعال: {activeAds}</p>
      <p className="text-gray-600 text-sm hover:text-primary cursor-pointer transition-all duration-300">
        مشاهده نظرات کاربران: ({comments} نظر)
      </p>
    </div>
  );
}
