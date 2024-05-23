import React, { useEffect, useRef, useState } from 'react';

import { FaChevronDown } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';

interface Option {
  value: string;
  label: string;
}

interface DropdownSelectorProps {
  isLoading?: boolean;
  options?: Option[];
  onChange?: (option: Option) => void;
  selectedOption?: Option;
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({
  isLoading,
  options,
  onChange,
  selectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Add a click event listener to the document to close the dropdown when clicking outside
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    // Attach the event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: Option) => {
    setIsOpen(false);
    onChange && onChange(option);
  };

  if (isLoading) return (
    <Skeleton className='!py-5 !px-4 !rounded-full' />
  )

  return (
    <div className="relative text-black">
      <div className="">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          // @ts-ignore
          ref={dropdownRef}
          className="flex !bg-white items-center text-lg justify-between rounded-full border border-gray-500 py-3 px-4 focus:outline-none"
        >
          {selectedOption?.label} <FaChevronDown className="ml-2 text-black" />
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute left-0 top-14 mt-2 w-[280px] rounded-2xl border-gray-500 overflow-hidden border bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="overflow-y-scroll max-h-60">
            {options && options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className={`text-startblock w-full border-b last:border-b-0 px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none ${selectedOption && selectedOption.value === option.value ? 'bg-gray-100' : ''
                  }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownSelector;
