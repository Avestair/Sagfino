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
import Searchbox from "./ui/Searchbox";

function App() {
  return (
    <>
      <p className="font-Vazirmatn">سلام دنیا!</p>
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
      </div>
    </>
  );
}

export default App;
