# 리액트 개요

리액트의 엘리먼트는 리액트 노드의 한 종류이다.

리액트 노드에는 여러가지가 있음. (문자열, 숫자열, 불린, 널, 언디파인드, 태그 등)

자식 태그가 없으면 < /> 사용하여 마무리 지을 수 있다.

리액트 컴퍼넌트는 props 라는 인자 하나만 갖는다.

리액트 노드는 파스칼 케이스로 작성한다.

어트리뷰트는 문자열이 아니면 {} 안에 작성해야 한다.

자바스크립트 영역을 jsx 환경에도 표현하기 위해서는 {}로 감싸줘야 한다.

함수는 프로퍼티로 쓰일 수 있으나, 렌더하는 영역(jsx 영역)에 함수가 들어가면 리액트 노드 형태가 아니기에 에러가 발생한다.

어떤 식으로 자바스크립트와 리액트(JSX) 간의 인자를 주고 받을 수 있는지 명확하게 알자.

[https://ko.reactjs.org/docs/hello-world.html](https://ko.reactjs.org/docs/hello-world.html)

---

### JSX 문법 3가지

1. class 넣을 때는 className
2. 변수 꽂을 때는 {변수명}
3. style 넣을 때는 style={{이름:’값’}}

---

### 실습 1

- **다음 코드를 render하는 경우 어떤 결과가 나오는지 확인**

```jsx
const App = () => { return (
<>
<div>{[false, null, undefined, true]}</div> <div>{false}</div>
<div>{null}</div>
<div>{undefined}</div>
<div>{true}</div>
</> );
}
```

> 콘솔에 빈 화면이 출력된다.
> 

---

## react 에서 key 가 하는 역할

![React#1_02.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/37e18f47-59e6-4ebc-a786-7b9dfad6e8b9/React1_02.png)

---

### 실습 2

- 1부터 100까지 들어있는 array가 있을 때,7의 배수인 경우 '7의 배수'라는 텍스트를 포함한 button 출력.
10의 배수인 경우 출력하지 않음그 외엔 숫자가 들어있는 button 출력
    
    ![스크린샷 2022-07-29 오후 5.14.00.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/741bd4e1-8f94-44c2-8ae3-053c6de28cc3/_2022-07-29__5.14.00.png)
    
- **클린 코드:**
    
    ```jsx
const arr = Array.from(Array(100), (_, i) => i+1);
// 1부터 100까지 들어있는 arr
const App = () => {
  return (
    <div>
        {arr
	        .filter((item) => item % 10)
            .map((item) => (
			    <button key={item}>
				    {item % 7 === 0 ? '7의 배수' : item}
			    </button>
		    ))
    	}
     </div>
  );
};
    ```
