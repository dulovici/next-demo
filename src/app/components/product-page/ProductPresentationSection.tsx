import React from "react";

const ProductVideoSection = () => {
  return (
    <section className="w-full md:w-1/2 mx-auto px-6 py-8 bg-white rounded-lg">
      {/* Button Section */}
      <button className="flex items-center justify-center gap-2 w-full bg-primary text-white text-sm md:text-base font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14M12 5l7 7-7 7"
          />
        </svg>
        OPTYWISE IN 60 SECONDS
      </button>

      {/* List Section */}
      <ul className=" list-disc mt-6 space-y-4 text-gray-700 text-sm md:text-base leading-relaxed pl-4">
        <li>
          Learn about DOP in an information-packed video and continue with the
          interactive web presentation.
        </li>
        <li>No need to leave an email to access the complete presentation.</li>
        <li>
          Interactive presentation - clickable elements (tables, graphs, maps,
          etc.)
        </li>
      </ul>
    </section>
  );
};

export default ProductVideoSection;
