import React, { useState } from "react";
import "../assets/service/css/search.css";
import Result from "../components/search/Result";
import Form from "../components/search/Form";
import { ERROR_MESSAGE } from "../utils/constants";

const Search = (props) => {
  const [pathStation, setPathStation] = useState(null);

  const onSearchClick = (source, target) => {
    if (!source || !target || source.length < 1 || target.length < 1) {
      return alert(ERROR_MESSAGE.NOT_EMPTY);
    }
    setPathStation({
      source,
      target,
    });
  };

  return (
    <>
      <div className="max-w-sm w-full lg:width-350px rounded bg-white shadow-lg px-6 pt-6 pb-2">
        <div className="font-bold text-xl mb-4 text-center">
          지하철 경로 검색
        </div>
        <Form onSearchClick={onSearchClick} />
        {pathStation && <Result pathStation={pathStation} />}
      </div>
    </>
  );
};

export default Search;
