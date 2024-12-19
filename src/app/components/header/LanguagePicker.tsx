import React from "react";
import Image from "next/image";

interface LanguagePickerProps {
  flagUrl: string;
  languageCode: string;
}

const LanguagePicker: React.FC<LanguagePickerProps> = ({
  flagUrl,
  languageCode,
}) => {
  return (
    <div className="flex items-center px-2 py-1 border-2 border-primary rounded-full cursor-pointer">
      {/* Flag */}
      <div className="relative w-6 h-6">
        <Image
          src={flagUrl}
          alt={`${languageCode} flag`}
          fill
          className="rounded-full border-2 border-primary object-cover"
        />
      </div>
      {/* Language Code */}
      <span className="ml-3 text-gray-600 font-medium">{languageCode}</span>
    </div>
  );
};

export default LanguagePicker;
