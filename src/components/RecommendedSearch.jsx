import LinkTag from "../ui/Link";

export default function RecommendedSearch() {
  const places = [
    "فرمانیه",
    "پونک",
    "نارمک",
    "ولنجک",
    "قیطریه",
    "امانیه",
    "الهیه",
    "نیاوران",
    "ظفر",
    "دولت",
    "قلهک",
    "دروس",
  ];

  return (
    <div className="grid gap-8 md:mt-24">
      <p className="px-28 text-xl">جست و جوی پیشنهادی</p>
      <div className="grid md:grid-cols-6 grid-cols-3 justify-items-center px-4 md:px-16 gap-2 font-semibold">
        {places.map((text) => (
          <LinkTag
            content={`املاک در ${text}`}
            key={text}
            font={"md:!font-normal"}
          />
        ))}
      </div>
    </div>
  );
}
