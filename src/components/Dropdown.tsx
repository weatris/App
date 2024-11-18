import { t } from 'i18next';
import React, { useState } from 'react';

export type optionType = { id: string; name: string };

interface DropdownProps {
  options: optionType[];
  onSelect: (option: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
}

const Dropdown = ({
  options,
  onSelect,
  icon,
  placeholder = t('selectOption'),
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<optionType | null>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option: optionType) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option.id);
  };

  return (
    <div className="relative w-64">
      <div
        className="flex flex-row items-center border border-gray-300 rounded-lg p-2 cursor-pointer bg-white"
        onClick={toggleDropdown}
      >
        <>{icon}</>
        {selectedOption?.name || placeholder}
      </div>
      {isOpen && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
