import React from "react";

const Input = ({ value, onChange, type }) => {
  return (
    <div className="w-5/12 h-12 text-center text-gray-800">
      <input
        className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        id={type.ID}
        name={type.NAME}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={type.PLACEHOLDER}
      />
    </div>
  );
};

export default Input;
