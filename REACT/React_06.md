# ****전역상태관리****

전역 상태관리를 사용하지 않으면 props drilling 이 발생함.

단점: 

- 컴포넌트 재사용이 어려움
- 컴포넌트 유닛테스트 작성 어려움(함수 밖 state에 영향을 받기 때문에 mocking 해주어야 함.)

컴포넌트 합성(component merge)

props drilling 해결하기 위해 사용할 수 있다.

단, 무조건은 아니기에 상황에 맞게 적절히 사용하도록 하자.

<aside>
💡 제어의 역전(inversion of control) 용어 알아보기!

</aside>

전역변수로 관리하지 말고 스테이트나 props 를 이용해서 관리하자.

무지성 전역 변수 사용은 굉장히 좋지 않다.

리렌더가 되지 않는 이슈 때문.

---

React context

전역에 react state를 만드는 방식

---

**App component를 수정하여
context의 value를 update 했을 때
Hello1, Hello4 컴포넌트가
re-render 되는지 확인하기**

hint.
context 의 value를 수정하려면?
Provider에 prop으로 넘기는 value를 수정하면 된다.

```jsx
import { createContext, useContext } from "react"; const defaultName = 'asdf';
const NameContext = createContext(defaultName);
const Hello1 = () => {
const name = useContext(NameContext); return (
<div>
this is Hello1. and Name is {name} <Hello4 />
</div> );
};
const Hello4 = () => {
const name = useContext(NameContext); return (
<div>
this is Hello4 <div>Hello {name}!</div>
</div> );
};
const App = () => (
<NameContext.Provider value={defaultName} >
    <Hello1 />
  </NameContext.Provider>
);
export default App;
```

- 클린 코드:
    
    ```jsx
    const defaultName = 'asdf';
    const NameContext = createContext(defaultName);
    const Hello1 = () => {
      const name = useContext(NameContext);   
      return (
        <div>
          this is Hello1. and Name is {name} 
          <Hello4 />
        </div> 
      );
    };
    const Hello4 = () => {
      const name = useContext(NameContext); 
      return (
      <div>
        this is Hello4 
        <div>Hello {name}!</div>
      </div> );
    };
    
    const App = () => {
      const [value, setValue] = useState(defaultName);
      const onChange = (e) => {
        setValue(e.target.value);
      }
      return (
      <>
        <NameContext.Provider value={value} >
          <Hello1 />
        </NameContext.Provider>
        <input value={value} onChange={onChange}></input>
      </>
      )
    };
    
    export default App;
    ```
    

---

어떠한 이유로 렌더가 되고 리렌더가 되지 않는지를 이해하고

그것으로 인해 context의 장단점을 이해하면 된다. 그것이 핵심!

# ****전역상태관리 - 2 | redux 기초****

## **flux**

facebook에서 고안한 어플리케이션 아키텍쳐
flux 아키텍쳐의 가장 큰 특징: 단방향 데이터 흐름

액션은 만들어지면 무조건 디스패처 → 뷰 순으로 데이터가 흐른다.

Dispatch

디스패치 함수를 호출하면, 액션 객체를 리덕스로 보낸다.

리덕스에서는 그 액션 객체와 현재 스테이트를 이용하여 다음 스테이트를 결정한다.

---

리덕스 스토어를 세팅해놓고

디스패치 함수를 호출하면, 액션 객체를 리덕스로 보내게 되고,

```jsx
import {Provider,useSelector,useDispatch } from 'react-redux';
function App() {
  console.log('redux!')
const counter=useSelector((state)=>state.counter)
const dispatch=useDispatch();
  return (
    <div className="App">
    APP {counter}
    <button onClick={()=>{  dispatch({type:'INCREMENT',payload:10}); }}>+</button>
    <button onClick={()=>{  dispatch({type:'DECREMENT'}); }}>-</button>
    </div>
  );
}
export default App;
7:23
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider,useSelector,useDispatch } from 'react-redux';
import { createStore,combineReducers } from "redux";
import App from './App';
const INITIAL_STATE=0
const counterReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state+1
        case 'DECREMENT':
            return state-1
         default:
            return state;
    }
}
const someReducer=(state='asdf',action)=>{
    console.log('someReducer실행!',state,action)
    switch (action.type){
        case 'INCREMENT':
            return state+'!';
         default:
            return state;
    }
}
const store=createStore(combineReducers({
    counter:counterReducer,
    otherState:someReducer,
}))
store.getState();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App/>
    </Provider>
    );
```

실습2

- App.js
    
    ```jsx
    import React from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { BrowserRouter, Navigate, useParams, Route, Routes, Link } from "react-router-dom";
    
    const Form = () => {
      const dispatch = useDispatch();
    
      const [id, setId] = React.useState('');
      const [pw, setPw] = React.useState('');
      const idRef = React.useRef(null);
      const pwRef = React.useRef(null);
      const idInvalid = !(id.length >= 6 && id.length <= 20)
      const pwInvalid = !(pw.length >= 12 && pw.length <= 20)
      const handleClick = (e) => {
        if (idInvalid) {
          setId('');
          idRef.current.focus();
          alert('유효하지 않은 id입니다');
          e.preventDefault();
        } else if (pwInvalid) {
          setPw('');
          pwRef.current.focus();
          alert('유효하지 않은 password입니다');
          e.preventDefault();
        } else {
          // name이 id 라는 변수에 들어있음
          dispatch({ type: 'LOGIN', payload: id });
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
          <Link to='/'>
            <button type="button" onClick={handleClick} disabled={!(id || pw)}>회원가입</button>
          </Link>
        </div>
      );
    }
    
    const nameSelector = (state) => state.user.name
    
    const useName = () => {
      const name = useSelector(nameSelector);
      return name;
    }
    
    const Hello = () => {
      const name = useName();
      return (
        <>
          name: {name}
        </>
      );
    }
    
    const App = () => {
      const name = useName();
      // const name = useSelector(({ user }) => user.name);
      // const name = useSelector(({ user: { name } }) => name);
      
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Form />} />
            <Route path="/" element={(
              !name ? <Navigate to='/register' replace />: <Hello />
            )} />
          </Routes>
        </BrowserRouter>
      );
    }
    
    export default App;
    ```
    
- index.js
    
    ```jsx
    import React from "react";
    import ReactDOM from "react-dom/client";
    import "./index.css";
    // import App from "./App";
    import App from "./Question3_4_2";
    // import { BrowserRouter } from "react-router-dom";
    // import store, { persistor } from "./store-with-thunk";
    
    // import { PersistGate } from 'redux-persist/integration/react'
    
    import { Provider } from "react-redux";
    
    import { createStore, combineReducers } from 'redux'
    import reportWebVitals from "./reportWebVitals";
    
    const INITIAL_STATE = {
        name: '',
        a: 1,
        b: 2,
        c: 3,
        d: 4,
    }
    const userReducer = (state = INITIAL_STATE, action) => {
        console.log('userReducer함수실행!', state, action)
        // { type: 'LOGIN', payload: '유저가입력한네임' }
    
        switch (action.type) {
            case 'LOGIN': {
                /* user 스테이트가 update되었다고 판단하지 못함
                state.name = action.payload;
                return state;
                */
                /*
                // name을 제외한 다른 프로퍼티는 다 날아가버림
                return {
                    name: action.payload,
                };
                */
                return {
                    ...state,
                    name: action.payload,
                }
            }
            default:
                return state
        }
    }
    
    const store = createStore(combineReducers({
        user: userReducer,
    }))
    
    // store.dispatch({ type: 'LOGIN', payload: 'hello!' })
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    
    root.render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    
    reportWebVitals();
    ```
