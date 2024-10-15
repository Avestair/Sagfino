import AdCard from "../ui/AdCard";
import { Ads } from "./FakeAds";

export default function RelatedAds() {
  return (
    <div className="grid gap-4 md:px-16 mt-46">
      <p className="px-4 text-lg font-semibold">آگهی های مرتبط</p>
      <div className="grid gap-4 md:gap-0 justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
        {Ads.map((ad) => (
          <AdCard
            key={ad.id}
            tag={ad.tag}
            img={ad.Img}
            rahan={ad.rahan}
            ejare={ad.ejare}
            address={ad.address}
          />
        ))}
      </div>
    </div>
  );
}
