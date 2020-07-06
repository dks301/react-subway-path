export const EVENT_TYPE = {
  CLICK: "click",
  KEY_PRESS: "keypress",
};

export const ERROR_MESSAGE = {
  NOT_EMPTY: "🤔 값을 입력해주세요",
  COMMON: "에러가 발생했습니다.",
};

export const PATH_TYPE = {
  DISTANCE: {
    ID: "shortest-distance-tab",
    NAME: "DISTANCE",
    KO: "최단거리",
  },
  DURATION: {
    ID: "minimum-time-tab",
    NAME: "DURATION",
    KO: "최소시간",
  },
};

export const STATION_TYPE = {
  DEPARTURE: {
    ID: "departure-station-name",
    NAME: "source",
    PLACEHOLDER: "출발역",
  },
  ALLIVAL: {
    ID: "arrival-station-name",
    NAME: "target",
    PLACEHOLDER: "도착역",
  },
};
