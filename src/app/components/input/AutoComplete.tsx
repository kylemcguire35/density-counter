import { useEffect, useRef, useState } from "react";

interface InputProps {
  label: string;
  handleSearch: (e: string) => void;
  select: (name: string, difficulty: string) => void;
  value: string;
  options: any[];
  showOptions: boolean;
  setShowOptions: (bool: boolean) => void;
  placeholder: string;
}

export default function AutoComplete({
  label,
  handleSearch,
  value,
  options,
  showOptions,
  setShowOptions,
  select,
  placeholder,
}: InputProps) {
  const [cursor, setCursor] = useState(-1);
  const ref = useRef<HTMLInputElement>(null);

  const handleSelect = (option: {
    name: string;
    display_difficulty: string;
  }) => {
    select(option.name, option.display_difficulty);
    setShowOptions(false);
  };

  useEffect(() => {
    const listener = (e: any) => {
      if (!ref.current?.contains(e.target)) {
        setShowOptions(false);
        setCursor(-1);
      }
    };

    document.addEventListener("click", listener);
    document.addEventListener("focusin", listener);
    return () => {
      document.removeEventListener("click", listener);
      document.removeEventListener("focusin", listener);
    };
  }, []);

  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        className="searchInput border w-full py-1 px-3"
        value={value}
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={() => setShowOptions(true)}
        placeholder={placeholder}
        ref={ref}
      />

      <ul
        className={`absolute w-2/5 rounded-lg shadow-lg ${
          !showOptions && "hidden"
        } select-none bg-white px-3`}
      >
        {options.length > 0 ? (
          options.map((option, i, arr) => {
            let className = "px-4 hover:bg-gray-100 ";

            if (i === 0) className += "pt-2 pb-1 rounded-t-lg ";
            else if (i === arr.length) className += "pt-1 pb-2 rounded-b-lg";
            else if (i === 0 && arr.length === 1)
              className += "py-2 rounded-lg";
            else className += "py-1";

            if (cursor === i) {
              className += " bg-gray-100";
            }

            return (
              <li
                className={className}
                key={option.name}
                onClick={() => handleSelect(option)}
              >
                {option.name}
              </li>
            );
          })
        ) : (
          <li className="px-4 py-2 text-gray-500">No results</li>
        )}
      </ul>
    </>
  );
}
