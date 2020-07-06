import React, { useState, useReducer } from "react";
import "../assets/service/css/search.css";
import Result from "../components/search/Result";
import Form from "../components/search/Form";
import { ERROR_MESSAGE } from "../utils/constants";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Search = (props) => {
  const [inputs, dispatch] = useReducer(reducer, {
    source: "",
    target: "",
  });
  const { source, target } = inputs;
  const [click, setClick] = useState(false);

  const onInputChange = (e) => {
    dispatch(e.target);
  };

  const onSearchClick = () => {
    setClick(isEmptyInput());
  };

  const isEmptyInput = () => {
    if (!source || !target || source.length < 1 || target.length < 1) {
      alert(ERROR_MESSAGE.NOT_EMPTY);
      return false;
    }
    return true;
  };

  return (
    <>
      <div className="max-w-sm w-full lg:width-350px rounded bg-white shadow-lg px-6 pt-6 pb-2">
        <div className="font-bold text-xl mb-4 text-center">
          지하철 경로 검색
        </div>
        <Form
          source={source}
          target={target}
          onInputChange={onInputChange}
          onSearchClick={onSearchClick}
        />
        {click && <Result source={source} target={target} />}
      </div>
    </>
  );
};

export default Search;
