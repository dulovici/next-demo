import React from "react";

const BookADemoSection = () => {
  return (
    <section className="w-full md:w-1/2 mx-auto px-6 py-8">
      {/* Button Section */}
      <button className="cursor-pointer flex items-center justify-center gap-2 w-full border-2 border-primary text-primary text-sm md:text-base font-bold py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition duration-300">
        BOOK A DEMO
      </button>

      {/* List Section */}
      <ul className="list-disc mt-6 space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
        <li>We value your time.</li>
        <li>We usually reply within 15 minutes.</li>
        <li>30s to leave your contact info.</li>
      </ul>
    </section>
  );
};

export default BookADemoSection;
