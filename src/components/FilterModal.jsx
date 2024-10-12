import { FiX } from "react-icons/fi";
import RowFilter from "../ui/RowFilter";
import { useState, useEffect } from "react";
import { useFilter } from "./FilterContext";

export default function FilterModal() {
  const [reset, setReset] = useState(false);
  const { isOpen, setIsOpen } = useFilter();

  // Function to trigger reset
  const handleReset = () => {
    // Trigger reset, and then reset the trigger after a short delay
    setReset(true);
    setTimeout(() => setReset(false), 100);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable body scroll
    } else {
      document.body.style.overflow = "auto"; // Enable body scroll
    }

    // Cleanup when component is unmounted or modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="flex justify-center fixed inset-0 w-full">
      <div className="backdrop-blur-sm overflow-y-auto grid gap-4 mt-4 mb-4 border border-gray-300 rounded-xl p-4 w-fit">
        <div className="flex justify-between md:px-6">
          <FiX
            onClick={() => setIsOpen(false)}
            className="md:w-5 md:h-5 w-6 h-6 cursor-pointer hover:text-primary"
          />
          <p className="text-lg md:text-xl text-center">فیلترها</p>
          <FiX className="opacity-0 select-none" />
        </div>

        <div className="grid md:gap-8 gap-6 md:px-12 md:mt-16 mt-10">
          <RowFilter
            filterName={" اتاق خواب"}
            values={[
              { value: "+", option: "هر تعداد" },
              { value: 0, option: "بدون اتاق" },
              { value: 1, option: "1" },
              { value: 2, option: "2" },
              { value: 3, option: "3" },
              { value: "4+", option: "4+" },
            ]}
            resetTrigger={reset}
          />

          <RowFilter
            filterName={"انباری"}
            values={[
              { value: "+", option: "هر تعداد" },
              { value: 0, option: "ندارد" },
              { value: 1, option: "1" },
              { value: 2, option: "2" },
              { value: "3+", option: "3+" },
            ]}
            resetTrigger={reset}
          />

          <RowFilter
            filterName={"پارکینگ"}
            values={[
              { value: "+", option: "هر تعداد" },
              { value: 0, option: "ندارد" },
              { value: 1, option: "1" },
              { value: 2, option: "2" },
              { value: "3+", option: "3+" },
            ]}
            resetTrigger={reset}
          />

          <RowFilter
            filterName={"سرویس بهداشتی"}
            values={[
              { value: "+", option: "هر تعداد" },
              { value: 1, option: "1" },
              { value: 2, option: "2" },
              { value: 3, option: "3" },
              { value: "4+", option: "4+" },
            ]}
            resetTrigger={reset}
          />

          <RowFilter
            filterName={"نوع سرویس بهداشتی"}
            values={[
              { value: "+", option: "مهم نیست" },
              { value: 1, option: "فرنگی" },
              { value: 2, option: "ایرانی" },
              { value: "both", option: "هردو" },
            ]}
            resetTrigger={reset}
          />

          <RowFilter
            filterName={"آسانسور"}
            values={[
              { value: "+", option: "مهم نیست" },
              { value: 0, option: "ندارد" },
              { value: 1, option: "1" },
              { value: 2, option: "2" },
              { value: "3+", option: "3+" },
            ]}
            resetTrigger={reset}
          />

          <RowFilter
            filterName={"طبقه"}
            values={[
              { value: "+", option: "مهم نیست" },
              { value: 1, option: "1" },
              { value: 2, option: "2" },
              { value: 3, option: "3" },
              { value: 4, option: "4" },
              { value: "5+", option: "5+" },
            ]}
            resetTrigger={reset}
          />

          <RowFilter
            filterName={"سیستم سرمایش"}
            values={[
              { value: "+", option: "مهم نیست" },
              { value: "abi", option: "کولر آبی" },
              { value: "split", option: "اسپلیت" },
              { value: "fan", option: "فن کوئل" },
              { value: "chiller", option: "چیلر" },
            ]}
            resetTrigger={reset}
          />

          <RowFilter
            filterName={"سیستم گرمایش"}
            values={[
              { value: "+", option: "مهم نیست" },
              { value: "markazi", option: "مرکزی" },
              { value: "split", option: "اسپلیت" },
              { value: "shomine", option: "شومینه" },
              { value: "azkaf", option: "از کف" },
              { value: "radiator", option: "رادیاتور" },
            ]}
            resetTrigger={reset}
          />

          <RowFilter
            filterName={"جنس کف"}
            values={[
              { value: "+", option: "مهم نیست" },
              { value: "sang", option: "سنگ" },
              { value: "seramik", option: "سرامیک" },
              { value: "parket", option: "پارکت" },
              { value: "laminet", option: "لمینت" },
              { value: "mozaeik", option: "موزائیک" },
            ]}
            resetTrigger={reset}
          />
          <div className="flex md:gap-3 md:text-sm text-xs justify-between md:justify-center mt-4">
            <button
              onClick={handleReset}
              className="border border-gray-300 w-fit text-primary md:py-3 md:px-3 px-2 py-3 text-nowrap hover:text-white hover:bg-primary transition-all duration-300 rounded-xl"
            >
              حذف فیلترها
            </button>
            <button
              onClick={handleReset}
              className="border border-gray-300 w-fit text-Success md:py-3 md:px-3 px-2 py-3 text-nowrap hover:text-white hover:bg-Success transition-all duration-300 rounded-xl"
            >
              اعمال فیلتر ها
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
