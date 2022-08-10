# ****react에서의 스타일링****

create-react-app 과 webpack에 의해 js에서 css 를 끌어와 사용할 수 있다.

## ****css-in-js****

외부 파일로 css을 연결하지 않고, JS와 결합하는 패턴

### css-in-js 방식을 이용하는 이유 7가지(css를 외부파일로 정의했을 때의 단점)

****Global Namespace****

****Dependencies****

****Dead Code Elimination****

****Minification****

****Sharing Constants****

****Non-deterministic****

****Resolution****

****Breaking Isolation****

---

## ****styled-components****

### Styled(구조)

styled태그명`

some css

`

### Props

jsx문법을 활용해 props를 넘김

Template Literals 활용 가능 (문자열 중간에 javascript 사용)

styled-components가 props object를 주입

### ****Animation****

css의 keyframes를 함수로 제공함

```jsx
import styled, { keyframes } from 'styled-components';
const backgroundChange = keyframes`
  0% {
    background-color: black;
  } 50% {
    background-color: pink;
  } 100% {
    background-color: yellow;
  }
`;
const Sample = styled.div`
  width: 100px;
  height: 100px;
  animation: ${backgroundChange} 5s linear infinite;
`;
```

---

### **실습1**

애니메이션 구현하기 (검정 → 입력한 색깔 → 빨강)

1. 입력값 생각하지 않고, 검정 → 파랑 → 빨강 순서로 움직이는 keyframes 만들어서 실행시켜보기
2. 입력값 props으로 받는거 해보기
3. 색 변경하는 keyframes를 입력한 값을 통해 만들기

```jsx
const Box = styled.div`
  width: 100px;
  height: 100px;
  background: black;
  animation-name: ${(props) => colorChange(props.color)};  
`;

const colorChange = (color) => keyframes`
  0%   {background-color: black;}
  50%  {background-color: ${color}};
  100% {background-color: red;}
`;

const App = () => {
  return (
    <div>
      <Box color={value}></Box>
      <input type="text" value={value}></input>
    </div>
  );
}
export default App;
```

---

### **실습2**

제공된 코드와 오늘 배운 내용을 활용하여 애니메이션 구현하기

```jsx
import React, { useState } from 'react'; import styled from 'styled-components';
const getRandomColor = () => '#' + Math.floor(Math.random()*parseInt('ffffff',16)).toString(16).padStart(6, '0');
const SIZE = 100;
const DURATION_PER_CARD = 1;
const App = () => {
const [length, setLength] = useState(3); const datas = getDatas(length);
return (
<>
<input type='number' onChange={e => setLength(e.target.valueAsNumber)} value={length} min={0} /> <br />
{datas.length ? (
<Deck> {datas.map(color => (
<Card key={`bg-${length}-${color}`} backColor={color} /> ))}
</Deck>
) : '0이상을 입력해주세요!'}
</> );
}
const getDatas = (length) => Array.from(Array(length), () => getRandomColor());
const Deck = styled.div`
  position: relative;
  margin-top: 20px;
  display: inline-block;
`;
const Card = styled.div`
  width: ${SIZE}px;
  height: ${SIZE}px;
  background-color: ${props => props.backColor};
  border-radius: 10px;
  left: 0;
  top: 0;
  position: absolute;
`;
export default App;
```

---
