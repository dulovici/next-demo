import React from "react";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section className="pb-10 bg-background">
      {/* Image Section */}
      <div className="container mx-auto px-8 flex items-end flex-col ">
        {/* Laptop, Mobile, and Tablet Image */}
        <Image
          src="/assets/laptop_mobile_tablet.png" // Adjust the path to your image
          alt="Laptop, mobile, and tablet showing features"
          width={1200} // Adjust to your image dimensions
          height={800}
          priority
          className="object-contain"
        />

        {/* Key Features Card */}
        <div className="rounded-tr-xl rounded-br-xl rounded-bl-xl bg-gradient-to-r from-primary to-secondary text-white p-4 md:p-5  shadow-lg max-w-md lg:-mt-16 sm:w-full">
          <h3 className="text-base md:text-lg font-bold mb-3">Key features:</h3>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm leading-snug">
            <li>Smart target-setting and sales forecast</li>
            <li>Realtime performance tracking</li>
            <li>Dynamic pricing, ads, and AB tests</li>
            <li>Routing optimization and maps integration</li>
            <li>AI ordering assistants</li>
            <li>Advanced analytics of orders, stock, and activity</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
