import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      src="/assets/logo.png"
      alt="Laptop, mobile, and tablet showing features"
      width={120}
      height={100}
      priority
      className="object-contain"
    />
  );
};

export default Avatar;
