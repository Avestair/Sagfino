import logo1 from "../../public/12.jpg";
import AmlakCard from "../ui/AmlakCard";

export default function Amlak() {
  const Amlakha = [
    {
      id: 1,
      tittle: "املاک گل آرا",
      img: logo1,
      address: "تهران پاسداران",
      rate: 4,
      activeAds: 200,
      comments: 14,
    },
    {
      id: 1,
      tittle: "املاک گل آرا",
      img: logo1,
      address: "تهران پاسداران",
      rate: 4,
      activeAds: 200,
      comments: 14,
    },
    {
      id: 1,
      tittle: "املاک گل آرا",
      img: logo1,
      address: "تهران پاسداران",
      rate: 4,
      activeAds: 200,
      comments: 14,
    },
    {
      id: 1,
      tittle: "املاک گل آرا",
      img: logo1,
      address: "تهران پاسداران",
      rate: 4,
      activeAds: 200,
      comments: 14,
    },
  ];
  return (
    <div className="grid px-16 gap-6">
      <p className="text-xl">املاک برتر تهران</p>
      <div className="flex justify-evenly gap-8 ">
        {Amlakha.map((amlak) => (
          <AmlakCard
            key={amlak.id}
            tittle={amlak.tittle}
            img={amlak.img}
            address={amlak.address}
            rate={amlak.rate}
            activeAds={amlak.activeAds}
            comments={amlak.comments}
          />
        ))}
        <p></p>
      </div>
    </div>
  );
}
