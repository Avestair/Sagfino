import {
  ArrowKeyLeft,
  ArrowKeyRight,
  DangerButtons,
  NeturalButtons,
  SuccessButton,
  TimeIcon,
  WarningButton,
} from "./ui/Buttons";
import Loading from "./ui/Loading";
import {
  Loadingbutton,
  LoadingbuttonWithBg,
  LoadingbuttonWithBorder,
} from "./ui/Loadingbutton";
import { Searchbox, SearchboxWithRecommendtion } from "./ui/Searchbox";
import { RecommendedProvider } from "./components/RecommendedContext";
import PhoneNumberField from "./ui/PhoneNumberField";
import Checkbox from "./ui/Checkbox";
import CheckboxList from "./ui/CheckboxList";
import { CheckboxProvider } from "./components/CheckboxContext";
import { CodeInput, Verification } from "./ui/CodeInput";
import Navbar from "./components/Navbar";
import { MeterFilter, PriceFilter } from "./ui/PriceFilter";
import FilterModal from "./components/FilterModal";
import { FilterProvider } from "./components/FilterContext";
import Hero from "./components/Hero";
import Latest from "./components/Latest";
import Tip from "./components/Tip";
import RecommendedSearch from "./components/RecommendedSearch";
import Moshaver from "./components/Moshaver";
import AmlakCard from "./ui/AmlakCard";
import Amlak from "./components/Amlak";
import Footer from "./components/Footer";
import AmlakModal from "./components/AmlakModal";
import AdPage from "./components/AdPage";

function App() {
  return (
    <FilterProvider>
      <CheckboxProvider>
        <RecommendedProvider>
          {/* <p className="font-Vazirmatn">سلام دنیا!</p>
      <div className="grid px-6 gap-3 w-fit">
        <NeturalButtons />
        <WarningButton />
        <SuccessButton />
        <DangerButtons />
        <Loadingbutton />
        <ArrowKeyLeft disabled={true} />
        <ArrowKeyRight disabled={false} />
        <LoadingbuttonWithBg />
        <LoadingbuttonWithBorder />
        <TimeIcon />
        <Searchbox />
        <SearchboxWithRecommendtion />
      <PhoneNumberField />
      <Checkbox text={"تست"} />
        <CheckboxList ListTittle={"عنوان تستی"} />
        <Verification />
        <Navbar />
        <PriceFilter />
        <MeterFilter />
          <FilterModal />
        </div> */}
          {/* <Hero />
          <Latest />
          <Tip />
          <RecommendedSearch />
          <Moshaver />
          <Amlak />

          <Footer /> */}
          <AdPage />
        </RecommendedProvider>
      </CheckboxProvider>
    </FilterProvider>
  );
}

export default App;
