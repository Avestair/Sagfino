import { FiX } from "react-icons/fi";
import RowFilter from "../ui/RowFilter";
import { useState } from "react";

export default function FilterModal() {
  const [reset, setReset] = useState(false);

  // Function to trigger reset
  const handleReset = () => {
    // Trigger reset, and then reset the trigger after a short delay
    setReset(true);
    setTimeout(() => setReset(false), 100);
  };

  return (
    <div className="grid gap-4 p-2">
      <div className="flex justify-between px-6">
        <FiX className="md:w-5 md:h-5" />
        <p className="text-lg md:text-xl text-center">فیلترها</p>
        <FiX className="opacity-0 select-none" />
      </div>

      <div className="grid gap-8 px-12 mt-16">
        <RowFilter
          filterName={" اتاق خواب"}
          values={[
            { value: "+", option: "هر تعداد" },
            { value: 3, option: "3" },
            { value: 1, option: "1" },
          ]}
          resetTrigger={reset}
        />

        <RowFilter
          filterName={"انباری"}
          values={[
            { value: "+", option: "هر تعداد" },
            { value: 3, option: "3" },
            { value: 1, option: "1" },
          ]}
          resetTrigger={reset}
        />

        <RowFilter
          filterName={"پارکینگ"}
          values={[
            { value: "+", option: "هر تعداد" },
            { value: 3, option: "3" },
            { value: 1, option: "1" },
          ]}
          resetTrigger={reset}
        />

        <RowFilter
          filterName={"سرویس بهداشتی"}
          values={[
            { value: "+", option: "هر تعداد" },
            { value: 3, option: "3" },
            { value: 1, option: "1" },
          ]}
          resetTrigger={reset}
        />

        <RowFilter
          filterName={"نوع سرویس بهداشتی"}
          values={[
            { value: "+", option: "هر تعداد" },
            { value: 3, option: "3" },
            { value: 1, option: "1" },
          ]}
          resetTrigger={reset}
        />

        <RowFilter
          filterName={"آسانسور"}
          values={[
            { value: "+", option: "هر تعداد" },
            { value: 3, option: "3" },
            { value: 1, option: "1" },
          ]}
          resetTrigger={reset}
        />

        <RowFilter
          filterName={"طبقه"}
          values={[
            { value: "+", option: "هر تعداد" },
            { value: 3, option: "3" },
            { value: 1, option: "1" },
          ]}
          resetTrigger={reset}
        />

        <RowFilter
          filterName={"سیستم سرمایش"}
          values={[
            { value: "+", option: "هر تعداد" },
            { value: 3, option: "3" },
            { value: 1, option: "1" },
          ]}
          resetTrigger={reset}
        />

        <RowFilter
          filterName={"سیستم گرمایش"}
          values={[
            { value: "+", option: "هر تعداد" },
            { value: 3, option: "3" },
            { value: 1, option: "1" },
          ]}
          resetTrigger={reset}
        />

        <RowFilter
          filterName={"جنس کف"}
          values={[
            { value: "+", option: "هر تعداد" },
            { value: 3, option: "3" },
            { value: 1, option: "1" },
          ]}
          resetTrigger={reset}
        />
        <div className="flex gap-3 justify-center mt-4">
          <button
            onClick={handleReset}
            className="border border-gray-300 w-fit text-primary py-3 px-5 hover:text-white hover:bg-primary transition-all duration-300 md:text-base text-sm rounded-md"
          >
            حذف فیلترها
          </button>
          <button
            onClick={handleReset}
            className="border border-gray-300 w-fit text-Success py-3 px-5 hover:text-white hover:bg-Success transition-all duration-300 md:text-base  text-sm rounded-md"
          >
            اعمال فیلتر ها
          </button>
        </div>
      </div>
    </div>
  );
}
