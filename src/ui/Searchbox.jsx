import { RiSearch2Line } from "react-icons/ri";
import { useRecommended } from "../components/RecommendedContext";
import { iranProvincesAndCapitals } from "../Cities"; // Ensure you have this file with the provinces and capitals
import { useState, useRef } from "react";

export function Searchbox({ placeholder }) {
  return (
    <div className="flex bg-white font-Vazirmatn border-2 border-gray-400 rounded-xl text-sm">
      <RiSearch2Line className="w-5 h-5 text-gray-400 mr-2 mt-[5px]" />
      <input
        type="text"
        placeholder={placeholder}
        className="rounded-xl p-1 w-full focus:w-[210px] transition-all duration-300 outline-none placeholder:text-gray-400  mt-[2px] focus:outline-none"
      />
    </div>
  );
}

export function SearchboxWithRecommendtion() {
  const { isRecommendedHidden, setIsRecommendedHidden } = useRecommended();
  const [searchTerm, setSearchTerm] = useState(""); // To track user input
  const [filteredProvinces, setFilteredProvinces] = useState([]);
  const [filteredCapitals, setFilteredCapitals] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1); // Index of the highlighted suggestion
  const suggestionRefs = useRef([]); // Ref to store refs for suggestions
  const [isActive, setIsActive] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);

    // If input is empty, hide recommendations
    if (inputValue.trim() === "") {
      setFilteredProvinces([]);
      setFilteredCapitals([]);
      setIsRecommendedHidden(true);
      setHighlightedIndex(-1); // Reset highlighted index
    } else {
      // Filter provinces and capitals separately
      const filteredProvinceList = iranProvincesAndCapitals
        .filter(({ province }) => province.includes(inputValue))
        .map(({ province }) => province);

      const filteredCapitalList = iranProvincesAndCapitals
        .filter(({ capital }) => capital.includes(inputValue))
        .map(({ capital }) => capital);

      setFilteredProvinces(filteredProvinceList);
      setFilteredCapitals(filteredCapitalList);

      // Show recommendations if either provinces or capitals are found
      setIsRecommendedHidden(
        filteredProvinceList.length === 0 && filteredCapitalList.length === 0
      );

      setHighlightedIndex(-1); // Reset highlighted index when filtering
    }
  };

  const handleKeyDown = (event) => {
    const totalSuggestions = filteredProvinces.length + filteredCapitals.length;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlightedIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % totalSuggestions;
        scrollToItem(newIndex);
        return newIndex;
      });
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedIndex((prevIndex) => {
        const newIndex = (prevIndex - 1 + totalSuggestions) % totalSuggestions;
        scrollToItem(newIndex);
        return newIndex;
      });
    } else if (event.key === "Enter") {
      if (highlightedIndex >= 0) {
        // Determine which suggestion to select
        const totalProvinces = filteredProvinces.length;
        const selectedSuggestion =
          highlightedIndex < totalProvinces
            ? filteredProvinces[highlightedIndex]
            : filteredCapitals[highlightedIndex - totalProvinces];

        // Set the selected suggestion as the input value
        setSearchTerm(selectedSuggestion);
        setFilteredProvinces([]);
        setFilteredCapitals([]);
        setIsRecommendedHidden(true);
        setHighlightedIndex(-1); // Reset highlighted index after selection
      }
      event.preventDefault(); // Prevent form submission or other default behavior
    }
  };

  const scrollToItem = (index) => {
    if (suggestionRefs.current[index]) {
      suggestionRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setFilteredProvinces([]);
    setFilteredCapitals([]);
    setIsRecommendedHidden(true);
    setHighlightedIndex(-1); // Reset highlighted index after selection
  };

  return (
    <>
      <div
        className={`relative grid gap-4 bg-white w-fit md:w-[50%] ${
          isRecommendedHidden ? "rounded-xl" : "searchbox-border-radius"
        } p-4 font-Vazirmatn Recommendtion-scrollbar`}
      >
        <div className="flex justify-center w-full">
          <div
            className={`flex justify-center border-b-2 w-[50%] border-gray-300 ${
              isActive ? "!text-primary !border-primary" : ""
            } transition-all duration-300 ease-in-out cursor-pointer`}
            onClick={() => setIsActive(!isActive)}
          >
            <p>اجاره</p>
          </div>

          <div
            className={`flex justify-center border-b-2 w-[50%] border-gray-300 ${
              isActive ? "" : "!text-primary !border-primary"
            } transition-all duration-300 ease-in-out cursor-pointer`}
            onClick={() => setIsActive(!isActive)}
          >
            <p>خرید</p>
          </div>
        </div>

        <div className="flex text-sm">
          <RiSearch2Line className="w-5 h-5 text-gray-400 mt-2" />
          <input
            type="text"
            placeholder="شهر یا استان مورد نظرت را وارد کن..."
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="p-2 w-full transition-all duration-300 outline-none  placeholder:text-gray-400 mt-[2px]"
          />
        </div>

        {/* Recommendation section */}
        <div
          className={`absolute top-full left-0 recommendtion-border-radius transition-all duration-300 text-sm text-customBlack ${
            isRecommendedHidden ? "hidden" : "block"
          } shadow-sm w-full max-h-52 overflow-y-auto bg-white z-50`}
        >
          <div className="mr-6">
            {filteredProvinces.length > 0 && (
              <div className="grid gap-2">
                <h3 className="font-semibold">استان‌ها</h3>
                {filteredProvinces.slice(0, 4).map((province, index) => (
                  <p
                    ref={(el) => (suggestionRefs.current[index] = el)} // Store ref to each province suggestion
                    className={`hover:bg-gray-100 p-1 cursor-pointer transition-all duration-300 ease-in-out ${
                      highlightedIndex === index ? "bg-gray-200" : ""
                    }`}
                    key={index}
                    onClick={() => handleSuggestionClick(province)}
                  >
                    {province}
                  </p>
                ))}
              </div>
            )}

            {filteredCapitals.length > 0 && (
              <div className="grid gap-2">
                <h3 className="font-bold">مرکز استان‌ها</h3>
                {filteredCapitals.slice(0, 4).map((capital, index) => (
                  <p
                    ref={(el) =>
                      (suggestionRefs.current[
                        index + filteredProvinces.length
                      ] = el)
                    } // Store ref for capital suggestions
                    className={`hover:bg-gray-100 p-1 cursor-pointer transition-all duration-300 ease-in-out ${
                      highlightedIndex === index + filteredProvinces.length
                        ? "bg-gray-200"
                        : ""
                    }`}
                    key={index}
                    onClick={() => handleSuggestionClick(capital)}
                  >
                    {capital}
                  </p>
                ))}
              </div>
            )}

            {filteredProvinces.length === 0 &&
              filteredCapitals.length === 0 && <p>موردی یافت نشد</p>}
          </div>
        </div>
      </div>
    </>
  );
}
