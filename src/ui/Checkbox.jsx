import { useCheckbox } from "../components/CheckboxContext";

export default function Checkbox({ text, value }) {
  const { isChecked, setIsChecked } = useCheckbox();
  return (
    <div className="flex w-fit rounded-md gap-2 font-light">
      <input
        className=" accent-primary mt-1 w-4 h-4"
        name="checkbox"
        type="checkbox"
        value={value}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label htmlFor="checkbox">{text}</label>
    </div>
  );
}
