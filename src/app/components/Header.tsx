import React from "react";
import Navigation from "./navigation";
import Avatar from "./Avatar";
import LanguagePicker from "./LanguagePicker";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-14">
      <Avatar />
      <Navigation />
      <LanguagePicker
        flagUrl="https://img.freeflagicons.com/thumb/round_button_with_metal_frame/united_kingdom/united_kingdom_640.png"
        // flagUrl="https://img.freeflagicons.com/thumb/round_button_with_metal_frame/serbia/serbia_640.png"
        languageCode="EN"
      />
    </div>
  );
};

export default Header;
