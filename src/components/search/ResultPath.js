import React, { useState, useEffect } from "react";
import axios from "axios";

const ResultPath = ({ source, target, type }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `/paths?source=${source}&target=${target}&type=${type.NAME}`
        );
        setResult(response.data);
      } catch (e) {
        alert(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [source, target, type]);

  if (loading) {
    return <div>로딩중...</div>;
  }

  if (!result) {
    return null;
  }

  const lastIndex = result.stations.length - 1;
  const pathResult = result.stations.map(({ id, name }, index) => {
    const arrow =
      index === lastIndex ? (
        <span className="mdi mdi-arrow-right-bold text-gray-500"></span>
      ) : (
        ""
      );
    return index === 0 || index === lastIndex ? (
      <div key={id}>
        {arrow} <span className="font-bold">{name}</span>
      </div>
    ) : (
      <div key={id}>
        <span className="mdi mdi-arrow-right-bold text-gray-500"></span>
        <span className="text-gray-600">{name}</span>
      </div>
    );
  });
  return (
    <div id="search-result">
      <div className="px-2 py-4 border-b">
        <div className="w-full flex mb-3">
          <div className="inline-block w-1/2 border-r text-center">
            <div className="text-gray-600 text-sm">소요시간</div>
            <div>{result.duration}분</div>
          </div>
          <div className="inline-block w-1/2 text-center">
            <div className="text-gray-600 text-sm">거리</div>
            <div>{result.distance}km</div>
          </div>
        </div>
      </div>
      <div className="relative pt-3 pb-10">
        <div className="px-2 py-1 w-full flex">
          <div className="w-10/12 inline-block">{pathResult}</div>
        </div>
      </div>
    </div>
  );
};

export default ResultPath;
