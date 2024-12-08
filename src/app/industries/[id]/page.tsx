import React from "react";

const Industry = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return <div>Industry: {id}</div>;
};

export default Industry;
