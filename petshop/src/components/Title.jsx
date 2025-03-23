import React from "react";

const Title = ({ text }) => {
  return (
    <h2 className="text-3xl font-bold border-b-2 border-purple-600 inline-block mb-4">
      {text}
    </h2>
  );
};

export default Title;
