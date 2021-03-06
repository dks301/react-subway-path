import React from "react";
import Input from "./Input";
import { STATION_TYPE } from "../../utils/constants";

const Form = ({ source, target, onInputChange, onSearchClick }) => {
  return (
    <form className="bg-white mb-4">
      <div className="flex flex-wrap mb-3">
        <Input
          value={source}
          onChange={onInputChange}
          type={STATION_TYPE.DEPARTURE}
        />
        <div className="w-2/12 h-12 text-center text-gray-800 flex justify-center items-center">
          <span className="mdi mdi-arrow-right-thick relative bottom-6px text-lg"></span>
        </div>
        <Input
          value={target}
          onChange={onInputChange}
          type={STATION_TYPE.ALLIVAL}
        />
      </div>
      <button
        type="submit"
        id="search-button"
        className="w-full text-sm bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 font-bold py-2 px-4 rounded-sm"
        onClick={(e) => {
          e.preventDefault();
          onSearchClick();
        }}
      >
        검색
      </button>
    </form>
  );
};

export default Form;
