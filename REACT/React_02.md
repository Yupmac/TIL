# ****React Hooks - 1 | useState****

## ****React에서의 Event Handling****

- **JSX에선 onclick 이 아닌 onClick 이라고 작성**
- **실행될 코드를 적는게 아닌, 실행될 함수를 전달**

---

### 실습 1

- 1~100 이 들어있는 button 100개를 만들고
버튼을 클릭하면 들어있는 숫자를 alert로 띄워주기

```jsx
import React from 'react'; // 1부터 100까지 들어있는 arr
const arr = Array.from(Array(100), (_, i) => i+1);
const App = () => { return (
<div>
{/* fill here */}
</div> );
};
export default App;
```

- **클린 코드:**
    
    ```jsx
    import React from 'react'; 
    
      // 1부터 100까지 들어있는 arr
      const arr = Array.from(Array(100), (_, i) => i+1);
      const App = () => { return (
      <div>
      { 
        arr.map(i => (
          <button onClick={() => {alert(i)}} type='button'>
            {i}
          </button> 
        )
      }
      </div> 
      );
    };
    
    export default App;
    ```
    

---

## State란?

컴포넌트 안에서 관리되는 유동적인 데이터

const [myState, setMystate] = React.useState(1);

setMystate에 의해 myState 값이 바뀌면 App.js 를 재렌더링하게끔 되어 있다. 

---

## **(일반적으로)
React component가 다시 render되는 조건**

prop이 update 된 경우
state가 update 된 경우
부모 component가 다시 렌더된 경우(부모 컴포넌트에 영향을 받아 자식 컴포넌트도 바뀐다)

**update를 판단할 때 주의할점(참고: deep vs shallow)**
primitive type인 경우 값까지 비교reference type인 경우 참조까지만 비교

---

### 실습 2

- **간단한 덧셈 계산기 만들기**

```jsx
import React from 'react';
const App = () => {
const [result, setResult] = React.useState(0); return (
<>
<input type='number' />
+
<input type='number' />
=
<input type='number' disabled value={result} /> <button type='button'>계산</button>
</> );
}
export default App;
```

- **코드를 어떻게 바꿔야 아래처럼 동작할까?**
    
    ![React#2_02.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b47846d5-821a-4a5f-8d95-2531b7296385/React2_02.png)
    
- **클린 코드:**
    
    ```jsx
    const App = () => {
      const [left, setLeft] = React.useState(0);
      const [right, setRight] = React.useState(0);
      const [result, setResult] = React.useState(0);
      return (
      <>
        <input type='number' onChange={(e) => setLeft(parseInt(e.target.value, 10))} />
        +
        <input type='number' onChange={(e) => setRight(parseInt(e.target.value, 10))} />
        =
        <input type='number' disabled value={result} /> 
        <button type='button' onClick={() => setResult(left + right)}>계산</button>
      </> 
      );
    }
    ```
    

---

## useRef

- useRef의 일반적인 사용법ref를 넘겨주면, 해당 dom element 를 current에 담아줌
- 실시간으로 바뀌는 input value값에 대한 처리가 불편
- ref는 dom을 담을 때만 쓸 수 있다? -> **X**
ref는 값이 바뀌어도 컴포넌트가 re-render 되지 않는다? -> **O**
- 실제 document에 존재하는 element를 직접 접근하여 수정한다.
- react에 의한 re-render가 아닌, react state로는 관리할 수 없는 경우에만 사용하는 것이 적절

---

### 실습1

- useRef를 사용하여, Click to Reset 버튼을 클릭하면
input의 value를 초기화하도록 만들어보기

```jsx
onst App = () => {
const input = React.useRef(null); const handleClick = () => {
if (input.current) {
} }
  return (
    <div>
<input type="text" ref={input} />
<button type="button" onClick={handleClick}>Click to Reset</button> </div>
);
}
```

- **클린 코드:**
    
    ```jsx
    const App = () => {
      const input = React.useRef(null); 
      const handleClick = () => {
        if (input.current) {
          input.current.value = '';
        } 
      }
      return (
        <div>
          <input type="text" ref={input} />
          <button type="button" onClick={handleClick}>Click to Reset</button> 
        </div>
      );
    }
    ```
    

---

### 실습2

- **실습1** 결과물에 우측과 같이 
“현재 value는 ~~~ 입니다.” 문구 추가해보기

![React#2_01.png](https://github.com/Yupmac/TIL/blob/main/img/React%232_02.png)

```jsx
const App = () => {
  const input = React.useRef(null); 
  const handleClick = () => {
    if (input.current) {
      input.current.value = '';
    } 
  }
  return (
    <div>
      <input type="text" ref={input} />
      <button type="button" onClick={handleClick}>Click to Reset</button> 
    </div>
  );
}
```

- **클린 코드:**

```jsx
const App = () => {
  const input = React.useRef(null);
  const [state, setState] = React.useState();
  const handleClick = () => {
    setState('');
    if (input.current) {
      input.current.value = '';
    }
  }
  return (
    <div>
      현재 value는 {state}입니다.<br />
      <input type="text" ref={input} onChange={(e) => setState(e.target.value)} />
      <button type="button" onClick={handleClick}>Click to Reset</button>
    </div>
  );
}
```
