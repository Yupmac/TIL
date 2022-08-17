### 사전 지식

CSS 환경에서 CSS를 연결하려면 @이 필요한 것처럼

JS 환경에서 JS를 연결하려면 HTML 에서 script 속성으로 type=”module” 이라고 입력해야 한다.

비동기로 처리해야 될 작업은 주로 네트워크 통신 요청이다.

응답이 올 때까지 기다리는 시간이 필요하기 때문.

---

### 콜백 함수(함수 안에 함수)

기본적으로 동기로 진행되는 js를 비동기로 처리하기 위해 여러 방법이 있으나 그 중 콜백함수가 자주 쓰인다.

하지만 콜백함수 단점으로 계속된 콜백지옥이 발생하기 때문에 신문법으로 promise가 생겨났다.

---

### Promise 문법

프로토타입으로 new 로 만들어진 것을 인스턴스라 한다.

이 promise 인스턴스에는 then() 메소드가 있고 이것을 불러내어 활용할 수 있다. 

```jsx
// resolve 라는 매개변수를 통해서 응답하는 순서를 정해줄 수 있다.
function a() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('A')
      resolve()
    }, 1000)
  })
}

// Promise
const p = a();
p.then(() => {
  b();
})
console.log(p)
```

<aside>
💡 함수가 호출되면 무조건 데이터가 남는다! 그것이 어떤 형태이든지간에

</aside>

```jsx
// 콜백함수로써 프로미스 인스턴 b() 함수를 
a().then(() => b()).then()

a().then(b).then()
```

두 함수는 사실상 같다.

---

### async-await

```jsx
// async - await
;(async function () {
  await a()
  await b()
  await c()
  await d()
})() // 즉시 실행 함수
```

---

### promise.then 문법을 활용한 데이터 추출 방법

```jsx
function a(ok) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ok) {
        reject('Error?!')
        return
      }
      console.log('A')
      resolve(1234)
    }, 1000)
  })
}

a(false)
  .then((res) => {
    console.log('Resolved! O')
    console.log(res)
  })
  .catch((err) => {
    console.log('Rejected! X')
    console.log(err)
  })
```

---

본격적으로 자료를 추출해보자.

```jsx
// https://www.omdbapi.com/?apikey=7035c60c

// Web API
fetch('https://www.omdbapi.com/?apikey=1237035c60c&s=frozen')
  .then(res => res.json())
  .then(res => console.log(res))
```

![JS보강#1_01.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ca4a4a13-a794-45af-9e88-5098ee9a4d1d/JS%E1%84%87%E1%85%A9%E1%84%80%E1%85%A1%E1%86%BC1_01.png)

400번대 에러는 요청 오류(너가 뭔가 잘못 요청한거야)

401번 에러(너 인증이 안됐어. 요청 권한이 없어)

→ apikey가 잘못 입력된거기게 수정해주면 정상적으로 응답된다.

```jsx
// https://www.omdbapi.com/?apikey=7035c60c

// Web API
fetch('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
  .then(res => res.json())
  .then(res => console.log(res))
```

![JS보강#1_02.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c27296f2-2a34-4d1a-aac3-7e0b0ae1122e/JS%E1%84%87%E1%85%A9%E1%84%80%E1%85%A1%E1%86%BC1_02.png)

---

### promise.then 문법 최종 형태

```jsx
// https://www.omdbapi.com/?apikey=7035c60c

// Web API
function http(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(res => res.json())
    .then(res => {
      if(res.Response === 'False') {
        reject(res.Error)
      }
      resolve(res)
    })
    .catch(err => reject(err))
  })
}
// 예외 처리
http('https://www.omdbapi.com/?apikey=7035c60c123&s=frozen')
  .then(res => console.log('Resolved 0: ', res))
  .catch(err => console.error('Rejected', err))
```

---

### async-await 문법 형태

```jsx
;(async () => {
  // res는 실제로 넘어온 데이터
  try {
		// 에러가 발생할 수 있는 구문에서 계속 이어서 처리할건지 catch 구문으로 넘어갈건지 결정됨
    const res = await http('https://www.omdbapi.com/?apikey=7035c60c123&s=frozen')
    // 즉, 이 부분은 실행되지 않을 수도 있다는 것을 항상 염두에 두자.
		console.log('Resolved 0: ', res)
  } 
  catch(err) {
    console.error('Rejected X', err)
  }
	
})()
// 예외처리
```

---

```jsx
// https://www.omdbapi.com/?apikey=7035c60c

// Web API
function http(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(res => {
      // if(!res.ok) reject()
      return res.json()
    })
    .then(res => {
      if(res.Response === 'False') {
        reject(res.Error)
      }
      resolve(res)
    })
    .catch(err => reject(err))
  })
}

// http('https://www.omdbapi.com/?apikey=7035c60c123&s=frozen')
//   .then(res => console.log('Resolved 0: ', res))
//   .catch(err => console.error('Rejected', err))
//   .finally(() => console.log('Finally!'))

;(async () => {
  // res는 실제로 넘어온 데이터
  try {
    const res = await http('https://www.omdbapi.com/?apikey=7035c60c123&s=frozen')
    console.log('Resolved 0: ', res)
  } 
  catch(err) {
    console.error('Rejected X', err)
  }
  finally {
    console.log('Finally!')
  }
})()
```

---

고해상도 이미지같은 경우 서버로부터의 응답시간이 길 수 있음.

그렇기 때문에 반드시 네트워크 요청이 아니더라도 promise, async 문법은 사용됨.

```jsx
// https://gstatic.com/webp/gallery/1.jpg

function loadImage(src) {
  return new Promise(resolve => {
    const img = document.createElement('img')
    img.src = src // img.setAttribute('src', src) 와 같음
    img.addEventListener('load', () => {
      resolve(img)
    })
  })
}

const imgContainer = document.querySelector('.image')
;(async () => {
  const imgEl = await loadImage('https://gstatic.com/webp/gallery/1.jpg', () => {

  })
  imgContainer.classList.add('loaded')
  imgContainer.append(imgEl);
})()
```

---

<aside>
💡 함수 관련해서 다시 공부하자. class, static 개념 부족!

</aside>

```jsx
// 클래스는 곧 함수다. 단, new라는 생성자 함수와 같이 사용할 뿐이다.
// 일반 함수는 데이터(undefined)가 남고, 생성자 함수는 인스턴스가 남는다.
class People {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  getAge() {
    return this.age
  }
  static getLegs() {
    return 2
  }
}
const heropy = new People('Heropy', 100)

console.log(heropy.getAge())
// console.log(heropy.getLegs()) 
console.log(People.getAge()) // 2 

function abc() {
  return 123
}

typeof abc // function
typeof abc() // undefined
```

---

### 비동기 처리를 모두 처리 후 한번에 출력

```jsx
import abc from "./abc"

function a() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('A') // 이행
    }, 1000)
  })
}

function b() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('B') // 이행
    }, 2000)
  })
}

function c() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('C') // 이행
    }, 3000)
  })
}

;(async () => {
  const [aa, bb, cc] = await Promise.all([a(), b(), c()]) // 3s
  // const aa = await a() // 'A' 1s
  // const bb = await b() // 'B' 2s
  // const cc = await c() // 'C' 3s
  console.log(aa, bb, cc)  // 6s
  // console.log(res)
})();
```

<aside>
💡 Promise.all         // 프로미스 안의 모든 함수를 한번에 출력
Promise.race     // 가장 먼저 실행되는 순서대로 출력

</aside>

---

```jsx
function a() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('A')
    }, 1000)
  })
}
function b() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('B')
    }, 1000)
  })
}
function c() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('C')
    }, 1000)
  })
}

//forEach메소드는 비동기 처리를 순차적으로 할 수 없다!
const arr = [a, b, c]
arr.forEach(async item => {
  console.log(await item()) 
})

// 그렇기 때문에 비동기 처리는 반드시 for반복 구문을 사용해야 한다.
;(async () => {
  const arr = [a, b, c]
  for (let i = 0; i < arr.length; i += 1) {
    console.log(await arr[i]())
  }
})()
```

```jsx
// for 반복문 종류
for() 기본
for in() 객체
for of() 배열
```

---

## 모듈

```jsx
// 모듈
//// 가져오기(import)
//// 내보내기(export)
////// 1) 기본 내보내기(이름 선택?)
////// 2) 이름을 가지는 내보내기(이름 필수!)

export default 123 
export const a = 'A'
export const b = 'B'
export const c = () => { console.log('C') }
export function d() {
  return 'D'
}
// 자바스크립트 모듈은 기본 통로와 이름을 가진 통로를 가진다.
// 기본 통로는 딱 1개만 지나갈 수 있고, 이름을 가진 통로는 n개 통로를 가질 수 있다.

import cba from './abc.js'
import {a, b, c, d } from './abc.js'

import abc, { a as x, d } from './abc.js'
// import 기본, { 이름1, 이름2, 이름3, 이름4 } from '경로'

// 가져올 때 기본 통로는 아무 이름에나 새로 담을 수 있다.
// 이름을 가진 통로로 지나온 데이터는 해당 이름 그대로 가져와야 한다.
// 단, as를 사용하면 이름을 바꿔 사용할 수 있다.
// 또, 이름을 가진 통로로 나온 데이터는 필요한 것만 따로 가져올 수 있다.

import * as xyz from './abc.js'
// 모든 데이터를 다 꺼내온다.
```

---

### import함수

```jsx
// import() 는 실행하고 나면 promise 인스턴스가 남는다.
// import() 는 비동기다.
```
