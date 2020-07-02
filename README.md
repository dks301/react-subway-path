## react-subway-path

### 실행방법

1. `java -jar server.jar`을 통해 서버를 실행시킨다. (localhost:8080)
    - 서버의 `/paths?source=압구정로데오역&target=잠실역&type=DISTANCE` 와 같이 접속하면 JSON Response를 받을 수 있다.
2. `npm start` 또는 `yarn start`을 통해 클라이언트를 실행시킨다. (localhost:3000)

### 요구사항

- 클라이언트에서 올바르게 서버에 요청을 하고 데이터를 가져와 보여줄 수 있도록 하자.

### 제약사항

- 기능이 제대로 작동할 것
- `class`기반 컴포넌트를 **사용하지 말 것**
- 컴포넌트를 적절히 분리할 것
