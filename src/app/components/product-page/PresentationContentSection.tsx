import React from "react";

const PresentationContentSection = () => {
  return (
    <section className="container mx-auto py-12 px-6 flex flex-col lg:flex-row lg:justify-between">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-8 text-center sm:text-left">
        Web Presentation <br /> Table Of Contents
      </h2>

      {/* Content */}
      <div className="flex sm:flex-col sm:gap-2 md:flex-row md:gap-20">
        <ul className="list-disc pl-5 space-y-3 text-sm md:text-base text-foreground text-gray-700">
          <li>Slide 1: DOP in 60s</li>
          <li>Slide 2: Optimization</li>
          <li>Slide 3: Solution</li>
          <li>Slide 4: Buyer Side App</li>
          <li>Slide 5: Supplier Side App</li>
          <li>Slide 6: Modules</li>
        </ul>
        <ul className="list-disc pl-5 space-y-3 text-sm md:text-base text-foreground text-gray-700">
          <li>Slide 7: ML & AI</li>
          <li>Slide 8: Data Visualizations</li>
          <li>Slide 9: Route Optimizer</li>
          <li>Slide 10: Live Data and Notifications</li>
          <li>Slide 11: Integration and Security</li>
          <li>Slide 12: Tailored For You</li>
        </ul>
      </div>
    </section>
  );
};

export default PresentationContentSection;
