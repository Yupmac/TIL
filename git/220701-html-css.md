**[수업 목표]**

1. HTML 태그에 대해서 숙지한다.
2. 기본적인 CSS 문법에 대해 숙지한다.
---

웹이란?  
웹사이트 접속 -> 해당 사이트 측으로 Request, 요청 하는 것  
그렇게 되면 해당 사이트 서버에서 우리 쪽으로 (HTML, CSS, JS 등) 의 정보들이 다운로드 또는 Response 응답 되는 것.
---

## HTML이란?  

Hyper Text Markup Language 약자로써, 특정한 데이터를 표시하는 방법을 기술하는 언어.

그렇기에 엄밀히 말해서 코딩이라기 보다는, 문서 작성에 해당함.

HTML 기본 형태  
<태그이름> 내용 </태그이름>

---

HTMl태그 안에 head 태그와 body태그가 존재하는 형태
HTML태그는 이 문서가 HTML 형식을 따른다는 것을 알려주기 위함
head태그는 해당 문서의 큰 틀을 정의함
body태그는 본격적으로 작성되는 부분

### 자주 사용되는 HTML 태그들
div태그 - 관념적으로 효율적인 개발을 위해서 만들어진 태그, 가장 사용 빈도가 높고, 중요성이 높음.

p태그 - paragraph(문단)을 표현하기 위한 태그, 웹사이트 내에 글자를 표현할 때 가장 기본적으로 사용하는 태그

h태그 - 제목을 표현 글자 크기에 따라 h1 ~ h6까지 지정할 수 있음.

strong태그, b태그 - 글자를 강조하기 위한 태그.  
둘 다 시각적으로는 동일하지만 단순히 글자를 볼드 처리하는 b에 반면, strong은 '매우 중요'하다는 개발자의 의도를 전하는 의미가 있다.

em태그, i태그는 글자를 기울이기 위한 태그
시각적으로 동일하나, i는 단순히 주변 글자와 구별하기 위한 기울임인 반면 em은 해당 텍스트 자체를 강조하고 싶을 때 사용함.

hr태그 - 간단한 가로줄을 표시, 이와 더불어 주제가 분리되거나 전환된다는 의미가 포함되어 있음.

br태그 - 줄바꿈을 위한 태그

 - hr, br 태그는 html 기본 형태와 다르게 닫는 태그가 따로 없이 단독으로 쓰인다. 그렇기에 명확하게 표시하기 위해 <hr/><br/> 와 같이 표기하는 것이 일반적이다.

이 밖에도 a, img, input, form, button, table, tr, th, td, ol, ul, li 태그 등이 있다.

---

시맨틱 태그(Semantic Tag)란 태그 자체적으로 의미가 있는 태그  
예) h, p, form 등 태그만으로도 어떤 내용이 담겨 있을지 유추할 수 있음.

이런 시맨틱 태그를 적절하게 사용하는 것만으로도 다음의 효과를 얻는다.

1. 해당 웹사이트 자체의 검색이 수월해짐(검색엔진 최적화)
2. 시각장애인이 사이트를 이용할 때 훨씬 편하게 내용을 파악할 수 있고,
3. 개발자 간에도 명확한 의미 전달이 가능해짐.

이와 유사하게 HTML 문서를 구성할 때  이상적인 구조 또한 존재한다.
https://mango-tower-9f1.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa8f7a881-5190-4b6d-8405-32c98cf5a562%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-06-28_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_4.48.48.png?table=block&id=9579f8d8-bc92-4d0c-8e20-5bfc824f630c&spaceId=3e16dc82-3f48-4560-82ef-93bb527f3234&width=480&userId=&cache=v2
단, 이런 부분은 꼭 정답이 있기보다 각 회사마다 달라질 수 있다는 점 참고!

---

## CSS란?
Cascading Style Sheets 약자로, HTML 요소를 보여줄 때 어떻게 표시될지 더욱 자세하게 정의하기 위한 스타일 시트 언어.

결국 HTML와 CSS는 무조건 붙어있을 수 밖에 없는 관계

### CSS 기본 형태
선택자 { 속성: 값; }

---

### HTML 선택자

선택자란? 내가 지금 작성하는 CSS를 어디 적용할지 명확하게 명시해주는 것
이런 선택자 요소에는 다음의 4가지가 존재한다.

1. 모두 - * {}
2. HTML 태그 - body {}
3. class - .지정한클래스명 {}
4. id - #지정한아이디명 {}

 - 클래스 명 띄어쓰기는 - 하이픈을 통해 지어준다. 예: red-box  
 - ID명 띄어쓰기는 카멜타입으로 한다. 예:redBox  
---

### 속성의 상속
- css에서는 상속이라는 개념이 존재함
<div id="first">
  <div id="second">
    <p>대박입니다.</p>
  </div>
</div>  
의 구조라면 div first는 부모 태그, div second를 자식 태그. p를 자손 태그라고 한다.

---

### CSS문법 몇 가지
1) 글자 관련   
color: 글자 색상(색깔이름; 또는 #000000; 또는 rbg값; 지정해준다.)  
font-size: 글자 크기(px 단위로 지정)  
  - 폰트 사이즈는 16px 이상을 권장한다. 가독성을 위해 (애플은 가이드 라인까지 제시함)  
font-weight: 글자 굵기(normal, bold, bolder, lighter 혹은 100부터 100단위로 숫자로 지정)   
font-family: 글자 폰트   
line-height: 줄간격   
letter-spacing: 자간   
text-align: 텍스트 정렬(left, right, center 중 선택)   

2)표시 관련
display: 요소 표시 방식(inline, block, none, inline-block 중 선택)
 - Block 요소는 블록 처럼 여겨지고, inline 요소는 글자처럼 여겨진다.  
 - Inline-block 은 블록처럼 height 값은 같지만 inline 처럼 가로 정렬 된다.   - 내부적으로는 블록 요소로 취급되며, 외부적으로는 인라인 요소 취급된다.  
 - 크기 값으로 px 단위로 지정하는건 사용자 환경을 고려하지 않는 경우로써 지양한다.   
 - Div 속성은 display: block 이 기본값으로 지정되어 있으나, 포지션 속성을 적용하면 이 값이 무시된다.   
 - 위치를 정할 때는 포지션 값을 조정하기 보다는 margin 이나 padding 을 통해서 조정하는 것을 권장  

visibility: 요소 표시 여부(visible, hidden 중 선택)

3) 크기 관련
width: 요소의 가로 길이
height: 요소의 세로 길이

4) 위치 관련 속성
position: 요소 위치를 어떻게 배치할지 지정(static, absolute, relative, fixed 중 선택)

5) 테두리 관련
border: 요소의 테두리(style, width, radius 세 값 적용 가능)
border-radius: 테두리 둥근 정도

6) 여백 관련
margin: 요소의 border를 기준으로 외부 여백 지정
padding: 요소의 border를 기준으로 내부 여백 지정
