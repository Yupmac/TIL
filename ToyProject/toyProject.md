7/25

드디어 찾아온 자바스크립트 토이프로젝트!

난 아직 아는게 없다고 생각하지만 야속하게도 시간은 흘렀고 이 시간이 오고야 말았다.

모르는 부분 보충하고 시작해야겠다 싶었으나, 사실 만드는거 자체가 공부 아니겠나. 일단 부딪혀보기로 한다.

자, 지금부터 토이프로젝트 그 눈물의 똥꼬쇼가 시작됩니다!

---

7/27

시작부터 난관.

open api 를 받아오긴 했는데 이걸 어떻게 자료화하는지를 몰라서 다시 공부함.

7/29

 

![질문_에러.png](https://github.com/Yupmac/TIL/blob/main/img/%E1%84%89%E1%85%B5%E1%86%BC%E1%84%80%E1%85%B3%E1%86%AF_%E1%84%8F%E1%85%A5%E1%86%AB%E1%84%90%E1%85%A6%E1%86%A8%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3_%E1%84%8B%E1%85%A6%E1%84%85%E1%85%A5.png)

Uncaught SyntaxError: Lexical declaration cannot appear in a single-statement context

구글링 해도 이해를 못하겄으

8/1 오전

약 이틀만에 다시 열어보니 뭐가 뭐지 읽히질 않는다.

결국 다시 처음부터 시작.

promise .then 문법보다 async await 문법이 더 쉬운 최신 문법이라고 하니 이걸 마저 공부해서 적용시켜봤다.

우리의 인도 유튜버분들 사랑합니다. 이것저것 예시를 보면서 감을 익히고 동작원리도 찾아보며 조금씩 이해해나갔다.

그렇게 리팩토링 성공

![토이프로젝트#01.png](https://github.com/Yupmac/TIL/blob/main/img/%E1%84%90%E1%85%A9%E1%84%8B%E1%85%B5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%2301.png)

뭐 기존 코드가 워낙 짧았기에 별 차이 없는거 같아도 그냥 내가 보기에 이 쪽이 더 직관적이어서 만족한다.

한 눈에 들어오니 몰입감이 좋달까? 똑같은거라도 볼 때마다 새로운 나같은 뉴비에게는 이 몰입도 높다는 점이 생각보다 굉장한 장점이다.

8/1 오후

검색창에 키를 입력하고 나서 0.5초가 흐른 후 검색 기능이 작동하게끔 해야한다.

퍼뜩 생각하기로 setTimeout() 메소드가 생각나서 적용시켰다.

그러나 웬걸, 0.5초 후에 작동하는 것은 맞으나 모든 키를 입력한 후 작동하는게 아니라 키 하나 누를 때마다 작동되는 것이었다.

헛웃음이 나오는 상황. 내가 아는 지식 선에서는 답이 나오지 않았고 늘 그렇듯 구글링 해본 결과,

말 그대로 이벤트가 키를 입력할 때마다 작동하기 때문에 이걸 우선 멈춰줘야 한다.

![토이프로젝트#02.png](https://github.com/Yupmac/TIL/blob/main/img/%E1%84%90%E1%85%A9%E1%84%8B%E1%85%B5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%2302.png)

clearTimeout() 메소드를 활용하여 잠시 이벤트를 멈춰뒀다가 timeout 이라는 매개변수를 재할당하여 setTimeout() 메소드를 실행시킨다.

이렇게 하면 처음 키를 입력하고 바로 이벤트가 멈추게 되어 비동기 처리하지 않게 되고, 재할당하여 실행된 후 흘러가는 0.5초 사이에 키를 누르게 되면 다시 이벤트가 멈추게 되고, 결과적으로 모든 키를 입력하고 나서야 이벤트가 작동하게 된다.

이거 깨닫고 소리 지름…..

추가로 더 검색하다 보니 검색 기능 만들 때 이건 그냥 기본 세트란다…..

아무튼 이해했다는 것에서 만족.

8/1 밤

희망이라는 뽕을 맞고 각성하여 날을 새고 있다.

‘기능 하나만 더 만들고 자자.’ 마음 속으로 되내이며 힘을 내본다.

배열은 forEach() 메소드로 어떻게 한다던데 도무지 응용이 되질 않는다.

결국 포기하고 원래 생각해뒀던 for 반복문을 이용한 방법으로 빌드업해본다.

![토이프로젝트#03.png](https://github.com/Yupmac/TIL/blob/main/img/%E1%84%90%E1%85%A9%E1%84%8B%E1%85%B5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%2303.png)

값을 출력하는건 크게 어렵지 않았다.

인도 유튜버의 도움을 받았기 때문.

먼 타국에 계신 분이 내 과제를 어떻게 알았는지 귀신같이 비슷한 케이스로 영상을 올려놨더군

공부하는 학생 입장에서 영상을 보면서 그대로 베껴오기보다는 최대한 어떤 논리로 이런 로직을 구성했는지를 이해할려 노력했다.

map() 메소드 헷갈려서 찾아보니 map(), filter() 이렇게 두 개 한세트로 많이 쓰길래 둘 다 복습했다.

다만, for문 밖에서 선언해둔 DB 변수가 불러와지지 않는 것이다.

그렇다고 재선언도 안되고 뭘 어쩌라는건지 모르겠는데 위 사진처럼 그냥 한번 더 불러와주기만 해도 문제가 해결되었다.

문제 해결은 됐지만 도대체 어떤 이유로 이렇게 풀린건지는 끝까지 이해하지 못했다.

뒤에 또 무슨 문제가 얼마나 몰려올지 모르니 이건 따로 체크만 해놓고 작전상 넘어가기로 한다.

이거 외에 버튼에 onclick 으로 링크 연결하는 것도 왜 안되지? 수백번한 끝에 [window.open](http://window.open)() 해야하는걸 window.open=() 이라고 잘못 써둔걸 깨달았다. 진짜 오타치는 것도, 그걸 또 발견하지 못하는 내 자신이 너무 짜증난다.

검색어 대소문자 구별하지 않고 검색하는거랑 빈칸일 때 검색되지 않게 하는건 구글링 하니 어렵지 않게 해결했다.

그래서 최종적으로

api 잘 불러왔고, 검색 잘 되고, 0.5초 딜레이도 잘 처리되고, 버튼 누를 시 새탭 링크 연결도 잘 된다.

이제 무한 스크롤, 클립 저장 기능, 검색어 저장 기능만 하면 끝이다.

“무한 스크롤부터 해볼까?” 하며 구글링 하자마자 바로 끔.

이건 밤중에 할만한게 아닐거 같구나. 잠이나 자자.

8/2 오전