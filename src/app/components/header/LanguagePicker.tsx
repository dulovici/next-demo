"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SR_FLAG, UK_FLAG } from "@/app/constants";
import { Language } from "@/app/enums";

const LanguagePicker = () => {
  const [activeLanguage, setActiveLanguage] = useState(Language.EN);
  const [pickerVisible, setPickerVisible] = useState(false);

  const handleLanguageChange = (language: Language) => {
    setActiveLanguage(language);
    setPickerVisible(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPickerVisible(true)}
      onMouseLeave={() => setPickerVisible(false)}
    >
      {/* Always Visible Language Picker */}
      <div className="flex items-center px-2 py-1 border-2 border-primary rounded-full cursor-pointer mb-1">
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

      {/* Hovered Language Picker */}
      {pickerVisible && (
        <div className="absolute top-full left-0 ">
          {activeLanguage !== Language.EN && (
            <div
              onClick={() => handleLanguageChange(Language.EN)}
              className="flex items-center px-2 py-1 border-2 border-primary rounded-full cursor-pointer bg-white hover:bg-gray-100 transition"
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
              className="flex items-center px-2 py-1  border-2 border-primary rounded-full cursor-pointer bg-white hover:bg-gray-100 transition"
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
