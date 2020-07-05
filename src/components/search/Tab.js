import React from "react";

const Tab = ({ type, onTypeChange, selected }) => {
  return (
    <li
      id={type.id}
      className={`-mb-px w-2/4 ${
        type === selected ? "active-tab" : ""
      } tab-menu`}
      onClick={() => onTypeChange(type)}
    >
      <a
        className="w-full text-center inline-block py-2 px-4 font-semibold"
        href="#"
      >
        {type.ko}
      </a>
    </li>
  );
};

export default Tab;
