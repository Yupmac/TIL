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
    
    ![React#2_01.png](https://github.com/Yupmac/TIL/blob/main/img/React%232_01.png)
    
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

![React#2_02.png](https://github.com/Yupmac/TIL/blob/main/img/React%232_02.png)

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
## ****uncontrolled input 비제어 인풋****

리액트 스테이트 값을 이용해서 인풋에 렌더되는 밸류를 제어하지 않는 것을 말함.
********

---

### 실습3

- 그렇다면 useRef 와 uncontrolled input은 필요없고 controlled input만 알고있으면 될까?
- reset 버튼을 누르면 input에 focus가 되도록 해보기

```jsx
const App = () => {
const [value, setValue] = React.useState(''); 
const handleClick = () => {
	setValue('');
}
  return (
    <div>
			<input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
			<button type="button" onClick={handleClick}>Click to Reset and Focus!</button> 
		</div>
	);
}
```

- **클린 코드:**
    
    ```jsx
    const App = () => {
    	const input = React.useRef(null);
    	const [value, setValue] = React.useState(''); 
    	const handleClick = () => {
    		setValue('');
    		if (input.current) {
    			input.current.focus();
    		}
    	}
      return (
        <div>
    			<input
    			type="text"
    			ref={input}
    			value={value}
    			onChange={(e) => setValue(e.target.value)}
    			/>
    			<button type="button" onClick={handleClick}>Click to Reset and Focus!</button> 
    		</div>
    	);
    }
    ```
    

---

### 실습4. ****controlled input 유효성 검사 구현하기****

- id는 6글자 이상 20글자 이하인 경우 유효
- password는 12글자 이상 20글자 이하인 경우 유효
- 유효하지 않는 input 밑에 "유효하지 않은 ~~입니다." 출력
- id와 password가 둘 다 비어있으면 회원가입 버튼 disable 처리
- 유효하지 않은 input이 존재하는 경우 회원가입 버튼 클릭 시
에러 alert를 띄워주고, 해당 input reset하고, focus 시켜주기
- 모두 유효한 경우 회원가입 버튼 클릭 시 "회원가입 성공!" alert 띄워주기

```jsx
const App = () => {
const handleClick = () => {
alert('회원가입 성공!'); };
  return (
    <div>
<div> <input
type="text"
name='id'
placeholder='6글자 이상 20글자 이하'
/>
{/* 에러메세지 자리 */} </div>
<div> <input
type="text"
name='password' placeholder='12글자 이상 20글자 이하'
/>
{/* 에러메세지 자리 */} </div>
<button type="button" onClick={handleClick} disabled={false}>회원가입</button> </div>
);
}
```

- **클린 코드:**
    
    ```jsx
    const App = () => {
      const [id, setId] = React.useState('');
      const [pw, setPw] = React.useState('');
      const idRef = React.useRef(null);
      const pwRef = React.useRef(null);
      const idInvalid = !(id.length >= 6 && id.length <= 20)
      const pwInvalid = !(pw.length >= 12 && pw.length <= 20)
      const handleClick = () => {
        if (idInvalid) {
          setId('');
          idRef.current.focus();
          alert('유효하지 않은 id입니다');
        } else if (pwInvalid) {
          setPw('');
          pwRef.current.focus();
          alert('유효하지 않은 password입니다');
        } else {
          alert('회원가입 성공!');
        }
      };
      const handleChangeId = (e) => {
        setId(e.target.value);
      }
      const handleChangePw = (e) => {
        setPw(e.target.value);
      }
      return (
        <div>
          <div>
            <input
              type="text"
              ref={idRef}
              name='id'
              value={id}
              placeholder='6글자 이상 20글자 이하'
              onChange={handleChangeId}
            />
            {/* 에러메세지 자리 */}
            {idInvalid && '유효하지 않은 id입니다'}
          </div>
          <div>
            <input
              ref={pwRef}
              type="text"
              name='password'
              value={pw}
              placeholder='12글자 이상 20글자 이하'
              onChange={handleChangePw}
            />
            {/* 에러메세지 자리 */}
            {pwInvalid && '유효하지 않은 password입니다'}
          </div>
          <button type="button" onClick={handleClick} disabled={!(id || pw)}>회원가입</button>
        </div>
      );
    }
    ```
    

- email input을 추가하고,
"숫자혹은문자@숫자혹은문자.숫자혹은문자"
포맷을 만족하는 경우 유효로 판단하기
(regex 사용해보기)
- input이 무한정 늘어날 수 있도록 loop를 활용해 확장성 있는 코드 만들어보기
- **클린 코드:**
    
    ```jsx
    import React from 'react';
    
    const fields = [{
      key: 'id',
      label: 'id',
      placeholder: '6글자 이상 20글자 이하',
      initialValue: '',
      checkValid: (v) => v.length >= 6 && v.length <= 20,
    }, {
      key: 'pw',
      label: 'password',
      placeholder: '12글자 이상 20글자 이하',
      initialValue: '',
      checkValid: (v) => v.length >= 12 && v.length <= 20,
    }, {
      key: 'name',
      label: '이름',
      initialValue: '',
      placeholder: '아무이름',
      checkValid: (v) => v.length >= 1 && v.length <= 5,
    }]
    
    const App = () => { 
      const [values, setValues] = React.useState(fields.reduce((acc, { key, initialValue }) => ({ ...acc, [key]: initialValue }), {}));
      const refs = React.useRef(Array.from(Array(fields.length, () => null)));
      const valids = fields.map(({ key, checkValid }) => checkValid(values[key]));
      const isButtonDisabled = !Object.values(values).some(value => value.length);
    
      const handleClick = () => {
        const isAllValid = valids.every((isValid, i) => {
          const { key, initialValue, label } = fields[i];
          if (!isValid) {
            setValues(prev => ({
              ...prev,
              [key]: initialValue,
            }))
            refs.current[i].focus();
            alert(`유효하지 않은 ${label}입니다`);
          }
          return isValid;
        });
        if (!isAllValid) {
          return;
        }
        alert('회원가입 성공!');
      };
    
      const handleChangeValue = (e) => {
        setValues(prev => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
      
      return (
        <div>
          {fields.map(({ key, label, placeholder }, i) => (
            <div key={key}>
              <input
                type="text"
                ref={ref => refs.current[i] = ref}
                name={key}
                value={values[key]}
                placeholder={placeholder}
                onChange={handleChangeValue}
              />
              {/* 에러메세지 자리 */}
              {!valids[i] && `유효하지 않은 ${label}입니다`}
            </div>
          ))}
          <button type="button" onClick={handleClick} disabled={isButtonDisabled}>회원가입</button>
        </div>
      );    
    }
    
    export default App;
    ```

