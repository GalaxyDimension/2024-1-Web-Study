## HTTP Method
### GET
![GET](https://github.com/GalaxyDimension/2024-1-Web-Study/assets/129478908/d6a55e29-ad7f-4d69-b562-aedfd997c134)
- 클라이언트에서 서버로 어떠한 리소스로 부터 정보를 요청하기 위해 사용되는 메서드
- 서버에서 어떤 데이터를 가져와서 보여줄 때 사용
- 값이나 내용 변화 없음
### POST
![POST](https://github.com/GalaxyDimension/2024-1-Web-Study/assets/129478908/58b759aa-3ac8-484a-9b88-d1514e6bc22a)
- 리소스를 생성/업데이트하기 위해 서버에 데이터를 보내는데 사용
- 데이터를 HTTP 메세지의 Body에 담아서 전송
### PUT
- 리소스를 생성 / 업데이트하기 위해 서버로 데이터를 보내는 데 사용
- 요청시에 Body 값과 Content-Type 값을 작성
### PATCH
- 리소스의 부분적인 수정을 할 때에 사용
- PUT 메소드는 문서 전체의 완전한 교체만을 허용
### DELETE
- 지정된 리소스를 삭제
- 요청시에 Body 값과 Content-Type 값이 비워져있음
- 성공한다면 Body 값 없이 성공 응답만 전송
## HTTP
### HTTP 1.1
- HTTP/1.1은 1997년에 RFC 2068로 처음 표준화
- 특징
  - 지속 연결
  - 파이프라이닝
  - 캐싱
  - 호스트 헤더
### HTTP 2
- 2015년에 RFC 7540으로 표준화
- 구글이 개발한 SPDY 프로토콜을 기반으로 개발
- 특징
  - 바이너리 프레이밍
  - 멀티플렉싱
  - 헤더 압축
  - 서버 푸시
  - 우선순위 지정
### HTTP 3
- 2020년에 IETF 초안으로 처음 발표
- 2022년에 RFC 9114로 표준화
- 구글이 개발한 QUIC (Quick UDP Internet Connections) 프로토콜을 기반
- 특징
  - UDP 기반
  - TLS 통합
  - 연결 수립 속도 증가
  - 다중 스트림
  - 패킷 손실 복구
