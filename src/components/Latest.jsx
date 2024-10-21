import AdCard from "../ui/AdCard";
import { Ads } from "./FakeAds";

export default function Latest() {
  return (
    <div className="grid justify-center w-[90%] md:w-full mt-24 p-4">
      <div className="flex justify-between mb-6 mt-8 md:px-24">
        <p className="text-xl font-bold">جدید ترین آگهی ها در تهران</p>
        <p className="text-gray-500 text-sm cursor-pointer hover:underline hover:underline-offset-2">
          مشاهده همه
        </p>
      </div>
      <div className="grid justify-items-center justify-self-center gap-2 w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:px-16">
        {Ads.map((ad, index) => (
          <AdCard
            key={index}
            address={ad.address}
            img={ad.Img}
            tag={ad.tag}
            rahan={ad.rahan}
            ejare={ad.ejare}
            size={ad.size}
          />
        ))}
      </div>
    </div>
  );
}
