export default function PhoneNumberField() {
  return (
    <input
      type="tel"
      pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
      className="outline-none border-2 caret-info border-gray-300 focus:border-info rounded-xl p-2 transition-all duration-300 text-xs w-[90%] justify-self-center md:text-sm"
    />
  );
}
