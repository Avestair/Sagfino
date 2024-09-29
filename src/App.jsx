import {
  DangerButtons,
  NeturalButtons,
  SuccessButton,
  WarningButton,
} from "./ui/Buttons";

function App() {
  return (
    <>
      <p className="font-Vazirmatn">سلام دنیا!</p>
      <NeturalButtons />
      <WarningButton />
      <SuccessButton />
      <DangerButtons />
    </>
  );
}

export default App;
