import MoshaverCard from "../ui/MoshaverCard";

import moshaver2 from "../../public/12.jpg";
export default function Moshaver() {
  const moshaver1 = [
    {
      id: 1,
      img: moshaver2,
      tittle: "حسین نصیری",
      company: "املاک شرق گستر",
      rate: 9,
    },
    {
      id: 2,
      img: moshaver2,
      tittle: "رضا نظری",
      company: "املاک آفتاب",
      rate: 2,
    },
    {
      id: 3,
      img: moshaver2,
      tittle: "افشین صادقی",
      company: "املاک گل آرا",
      rate: 7,
    },
    {
      id: 4,
      img: moshaver2,
      tittle: "محمد تابنده",
      company: "املاک سبز",
      rate: 4,
    },
  ];
  return (
    <div className="flex gap-12 px-24 md:mt-24 md:mb-16">
      {moshaver1.map((mosh) => (
        <MoshaverCard
          key={mosh.id}
          img={mosh.img}
          tittle={mosh.tittle}
          company={mosh.company}
          rate={mosh.rate}
        />
      ))}
    </div>
  );
}
