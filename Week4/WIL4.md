### 1.301, 303 요청을 하였을때, 왜 httpstat.us 페이지의 메인으로 redirect될까?
- 301 Moved Permanently
  - 요청한 리소스가 영구적으로 다른 URL로 이동했음
  - 서버는 응답 헤더의 Location 필드에 새 URL을 포함하여 클라이언트에게 이 URL로 이동하도록 지시
- 303 See Other
  - 요청한 리소스가 다른 URL에 있으며, 클라이언트는 GET 메소드로 이 URL을 요청해야 한다는 것을 의미
  - 서버는 Location 필드에 새 URL을 포함하여 클라이언트가 이동할 위치를 지정
### 2. 401 요청을 하였을 때, 네트워크 탭의 상태를 보고 어떻게 인증해야 하는지 www-Authenticate 헤더를 기반으로 설명해보자.
- 클라이언트가 요청한 리소스에 접근하기 위해 인증이 필요함
  - 응답 헤더에서 www-Authenticate 필드를 확인
  - 헤더에 명시된 인증 스키마에 따라 적절한 인증 정보를 Authorization 헤더에 추가하여 다시 요청
### 3.Google에 “Hello”를 입력하여 결과물을 보고, 네트워크 요청 탭에서 캐시 관련 정보가 어디에 저장되어 있는지 분석하여 보자.
- Cache-Control: private, max-age=0
- Expires: -1
### 4.더 알고 싶은 상태코드를 직접 체험해보고, 해당 상태코드에서 진행한 요청 헤더, 응답 헤더를 직접 정리하여 분석해보자.
- 404 Not Found
  - 클라이언트가 요청한 리소스를 서버에서 찾을 수 없음
    - 응답의 타입
    - 응답의 길이
    - 생성일
- 200 OK
  - 요청이 성공적으로 처리되었음
    - 서버 소프트웨어에 대한 정보
    - 응답의 타입
    - 응답의 길이
    - 생성일
### Extra. 캐시 유효 시간이 60초라고 가정해보자. 그럼 60초가 지날 때마다  캐시 데이터를 처음부터 네트워크를 통해 다시 받아하는 거 아닌가? 과연 이러한 방식이 올바를까?
- 캐시 유효 시간 및 재검사
  - 캐시 유효 시간이 지나면 브라우저는 서버와 통신하여 리소스가 변경되었는지 확인
  - 리소스가 변경되지 않았으면 304 Not Modified 응답을 반환
