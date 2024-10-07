import AdCard from "../ui/AdCard";
import { Ads } from "./FakeAds";

export default function Latest() {
  return (
    <div className="grid mt-24 p-4">
      <p className="text-lg mb-8 mt-8">جدید ترین آگهی ها</p>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Ads.map((ad, index) => (
          <AdCard
            key={index}
            address={ad.address}
            img={ad.Img}
            tag={ad.tag}
            rahan={ad.rahan}
            ejare={ad.ejare}
          />
        ))}
      </div>
    </div>
  );
}
