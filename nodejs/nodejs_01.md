서버에 요청하는 방식은 총 4가지

1. GET 읽기
2. POST 쓰기
3. PUT 수정
4. DELETE 삭제

---

```jsx
// node.js 환경에서 express 라이브러리를 활용한 서버 환경 구성 기본 코드
const express = require('express');
const app = express();
// listen(서버 띄울 포트 번호, 띄운 후 실행될 코드) -----> app이라는 변수에 할당한 express() 데이터를 불러오는 함수
app.listen(8080, function() {
  console.log('listening on 8080')
});
// .get('경로', (요청내용, 응답할 방법) => {})
app.get('/pet', function(req, res) {
  res.send('펫 용품 쇼핑할 수 있는 페이지입니다.');
});
```

---

REST API 원칙 6가지

1. Uniform interface ← 얘가 중요. 매우 간결하고 형식이 일정하고 예측 가능해야 함.
2. Client-Server 역할 구분
- 브라우저는 요청만 할 뿐
- 서버는 응답만 할 뿐
3. Stateless
- 요청1과 요청2는 의존성이 없어야 함
4. Cacheable
5. Layered System
6. Code on Demand

좋은 예시) 
www.example.com/products/66432
instagram.com/explore/tags/kpop
facebook.com/natgeo/photos/

- URL은 명사로 작성
- 하위 문서를 나타낼 때는 / 사용
- 파일 확장자(.html)쓰지 말 것
- 띄어 쓰기는 대시(-) 이용
- 자료 하나당 하나의URL

---

```jsx
// node.js 환경에서 express 라이브러리를 활용한 서버 환경 구성 기본 코드
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.urlencoded({extended: true}))

const MongoClient = require('mongodb').MongoClient;
let db;
MongoClient.connect('mongodb+srv://Yupmac:wuq2Wkddla@cluster0.qlkqlnu.mongodb.net/?retryWrites=true&w=majority', function(error, client) {
  //연결되면 할 일  
  if(error) return console.log(error);
  db = client.db('todoApp');
  
  // listen(서버 띄울 포트 번호, 띄운 후 실행될 코드) -----> app이라는 변수에 할당한 express() 데이터를 불러오는 함수
  app.listen(8080, function() {
    console.log('listening on 8080')
  });
})

// .get('경로', function(요청내용, 응답할 방법) {})
app.get('/pet', function(req, res) {
  res.send('펫 용품 쇼핑할 수 있는 페이지입니다.');
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.get('/write', function(req, res) {
  res.sendFile(__dirname + '/write.html')
});

// 어떤 사람이 /add 라는 경로로 post 요청을 하면, 데이터 2개(날짜, 제목)를 보내주는데, 
// 이 때, 'post'라는 이름을 가진 collection에 두개 데이터를 저장하기
// { 제목: '어쩌구', 날짜 : '어쩌구' }
app.post('/add', function(req, res) {
  res.send('전송완료');
  console.log(req.body.title);
  console.log(req.body.date);
  db.collection('post').insertOne( { 제목 : req.body.title, 날짜 : req.body.date }, function() {
    console.log('저장완료');
  });
});
```

MongoDB를 활용한 데이터 서버 연결 방법

---

EJS 라이브러리 활용하기

```html
<!-- 서버에서 가져온 할 일 리스트 -->
    <% for(let i = 0; i < posts.length; i++) { %>
      <h4>할일 제목 : <%= posts[i].제목 %><h4>
      <p>할 일 마감날짜 : <%= posts[i].날짜 %></p>
    <% } %>
```

![스크린샷 2022-08-15 오전 3.54.18.png](https://github.com/Yupmac/TIL/blob/main/img/nodejs%231_01.png)
