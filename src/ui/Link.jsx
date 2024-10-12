export default function LinkTag({
  content,
  hiddenMobile,
  hiddenDesktop,
  font,
}) {
  return (
    <p
      className={`hover:text-primary text-gray-700 ${font} duration-300 transition-all cursor-pointer md:text-base text-sm font-light ${
        hiddenMobile ? "hidden md:block" : ""
      }  ${hiddenDesktop ? "md:hidden" : ""}`}
    >
      {content}
    </p>
  );
}
