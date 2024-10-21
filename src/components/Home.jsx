import Hero from "./Hero";
import Latest from "./Latest";
import Tip from "./Tip";
import RecommendedSearch from "./RecommendedSearch";
import Moshaver from "./Moshaver";
import Amlak from "./Amlak";

export default function Home() {
  return (
    <div className="grid w-fit">
      <Hero />
      <Latest />
      <Tip />
      <RecommendedSearch />
      <Moshaver />
      <Amlak />
    </div>
  );
}
