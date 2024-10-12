import { useRef } from "react";

export function CodeInput() {
  const codeRef = useRef(0);

  if (codeRef === 1) document.querySelector("");
  return (
    <>
      <input
        maxLength={1}
        pattern="\d*"
        type="text"
        className="border-gray-300 text-2xl text-center border-2  md:w-[40px] md:h-[50px] h-[40px] w-[30px] caret-gray-500  focus:border-info outline-none transition-all duration-300 rounded-xl p-1"
      />
    </>
  );
}

export function Verification() {
  return (
    <div className="flex gap-4 ltr1 mt-16 justify-center">
      <CodeInput />
      <CodeInput />
      <CodeInput />
      <CodeInput />
    </div>
  );
}
