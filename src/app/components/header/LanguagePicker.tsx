"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { SR_FLAG, UK_FLAG } from "@/app/constants";
import { Language } from "@/app/enums";

const LanguagePicker = () => {
  const [activeLanguage, setActiveLanguage] = useState(Language.EN);
  const [pickerVisible, setPickerVisible] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setPickerVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (language: Language) => {
    setActiveLanguage(language);
    setPickerVisible(false);
  };

  return (
    <div className="relative" ref={pickerRef}>
      {/* Main Picker Button */}
      <div
        onClick={() => setPickerVisible(!pickerVisible)}
        className="flex items-center px-2 py-1 border-2 border-primary rounded-full cursor-pointer"
      >
        <div className="relative w-6 h-6">
          <Image
            src={activeLanguage === Language.EN ? UK_FLAG : SR_FLAG}
            alt={`${activeLanguage} flag`}
            fill
            className="rounded-full border-2 border-primary object-cover"
          />
        </div>
        <span className="ml-3 text-gray-600 font-medium">{activeLanguage}</span>
      </div>

      {/* Dropdown Picker */}
      {pickerVisible && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-lg z-10">
          {activeLanguage !== Language.EN && (
            <div
              onClick={() => handleLanguageChange(Language.EN)}
              className="flex items-center px-2 py-1 border-2 border-primary rounded-full cursor-pointer mb-1"
            >
              <div className="relative w-6 h-6">
                <Image
                  src={UK_FLAG}
                  alt="EN flag"
                  fill
                  className="rounded-full border-2 border-primary object-cover"
                />
              </div>
              <span className="ml-3 text-gray-600 font-medium">
                {Language.EN}
              </span>
            </div>
          )}
          {activeLanguage !== Language.SR && (
            <div
              onClick={() => handleLanguageChange(Language.SR)}
              className="flex items-center px-2 py-1 border-2 border-primary rounded-full cursor-pointer mb-1"
            >
              <div className="relative w-6 h-6">
                <Image
                  src={SR_FLAG}
                  alt="SR flag"
                  fill
                  className="rounded-full border-2 border-primary object-cover"
                />
              </div>
              <span className="ml-3 text-gray-600 font-medium">
                {Language.SR}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LanguagePicker;
