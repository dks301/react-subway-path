import React, { useState } from "react";
import { PATH_TYPE } from "../../utils/constants";
import Tab from "./Tab";
import ResultPath from "./ResultPath";

const Result = ({ pathStation }) => {
  const [selected, setSelected] = useState(PATH_TYPE.DISTANCE);

  const onTypeChange = () => {
    if (selected === PATH_TYPE.DISTANCE) {
      setSelected(PATH_TYPE.DURATION);
    }
    if (selected === PATH_TYPE.DURATION) {
      setSelected(PATH_TYPE.DISTANCE);
    }
  };

  return (
    <div
      id="search-result-container"
      className="max-w-sm w-full lg:width-350px rounded bg-white shadow-lg p-6 relative border top"
    >
      <button
        id="favorite-button"
        className="favorite-button bg-yellow-500 mdi mdi-star-outline absolute text-white bg-transparent d-inline-block font-semibold py-2 px-3 hover:border-transparent rounded-full z-10"
      ></button>
      <ul className="flex border-b w-full">
        <Tab
          type={PATH_TYPE.DISTANCE}
          onTypeChange={onTypeChange}
          selected={selected}
        />
        <Tab
          type={PATH_TYPE.DURATION}
          onTypeChange={onTypeChange}
          selected={selected}
        />
      </ul>
      <ResultPath stations={pathStation} type={selected} />
    </div>
  );
};

export default Result;
