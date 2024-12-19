import React from "react";
import Avatar from "./Avatar";
import LanguagePicker from "./LanguagePicker";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 md:px-14 py-4">
      <Avatar />
      {/* Desktop Navigation */}
      <div className="hidden lg:flex">
        <Navigation />
      </div>

      <div className="flex items-center gap-4">
        <LanguagePicker />
        {/* Mobile Navigation */}
        <MobileNavigation />
      </div>
    </div>
  );
};

export default Header;
