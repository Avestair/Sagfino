import logo1 from "../../public/12.jpg";
import AmlakCard from "../ui/AmlakCard";
import AmlakModal from "./AmlakModal";

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
      phoneNumber: "09153456789",
      officeNumber: "0216789354",
    },
    {
      id: 1,
      tittle: "املاک گل آرا",
      img: logo1,
      address: "تهران پاسداران",
      rate: 4,
      activeAds: 200,
      comments: 14,
      phoneNumber: "09153456789",
      officeNumber: "0216789354",
    },
    {
      id: 1,
      tittle: "املاک گل آرا",
      img: logo1,
      address: "تهران پاسداران",
      rate: 4,
      activeAds: 200,
      comments: 14,
      phoneNumber: "09153456789",
      officeNumber: "0216789354",
    },
    {
      id: 1,
      tittle: "املاک گل آرا",
      img: logo1,
      address: "تهران پاسداران",
      rate: 4,
      activeAds: 200,
      comments: 14,
      phoneNumber: "09153456789",
      officeNumber: "0216789354",
    },
  ];
  return (
    <div className="grid px-16 gap-6">
      <p className="text-xl">املاک برتر تهران</p>
      <div className="flex justify-evenly gap-8 ">
        {Amlakha.map((amlak) => (
          <>
            <AmlakCard
              key={amlak.id}
              tittle={amlak.tittle}
              img={amlak.img}
              address={amlak.address}
              rate={amlak.rate}
              activeAds={amlak.activeAds}
              comments={amlak.comments}
            />
            {/* <AmlakModal
              tittle={amlak.tittle}
              logo={amlak.img}
              phoneNumber={amlak.phoneNumber}
              officeNumber={amlak.officeNumber}
            /> */}
          </>
        ))}
      </div>
    </div>
  );
}
