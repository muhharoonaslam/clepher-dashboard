import React, { useState, useRef } from "react";
import { Info, X } from "lucide-react";

interface KeywordSelectionProps {
  title: string;
  keywords: string[];
  setKeywords: (keywords: string[]) => void;
  badgeColor: string;
}

const KeywordSelection: React.FC<KeywordSelectionProps> = ({
  title,
  keywords,
  setKeywords,
  badgeColor,
}) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addKeyword = () => {
    if (inputValue.trim() !== "" && !keywords.includes(inputValue.trim())) {
      setKeywords([...keywords, inputValue.trim()]);
      setInputValue("");
      inputRef.current?.focus();
    }
  };

  const removeKeyword = (keyword: string) => {
    setKeywords(keywords.filter((k) => k !== keyword));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addKeyword();
    }
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-1">
        <p className="color-[#394e6a] font-normal">{title}</p>
        <Info size={16} className="text-base-content opacity-60" />
      </div>
      <div className="flex flex-wrap gap-2 mb-4 text-lg">
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className={`badge  gap-1 ${badgeColor}`}
          >
            {keyword}
            <button
              onClick={() => removeKeyword(keyword)}
              className="btn btn-ghost btn-xs p-0 min-h-0 h-auto"
            >
              <X size={14} />
            </button>
          </span>
        ))}
      </div>
      <div className="join w-full">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type and press Enter"
          className="input input-bordered join-item flex-grow"
        />
        <button onClick={addKeyword} className="btn bg-blue-500 text-white join-item">
          Add Keyword
        </button>
      </div>
    </div>
  );
};

export default KeywordSelection;
