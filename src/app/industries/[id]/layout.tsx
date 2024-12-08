import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <div>
        <h2>Industry section</h2>
      </div>
    </div>
  );
};

export default layout;
