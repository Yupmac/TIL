# React Hooks - 2

## useEffect

이벤트가 중복되어 발생하는 사이드 이펙트를 다룰 때 사용한다.

useEffect 는 어떤 값을 넣더라도 최초 1회는 콜백함수를 실행시킨다.

## dependency array

useEffect 함수의 두번째 인자

이 값이 바뀔 때마다 useEffect 함수 안의 콜백 함수가 재실행됨.

## cleanup

컴포넌트가 최초 렌더될 때 useEffect 함수의 콜백 함수가 작동하고, 이후 cleanup 함수는 클로져된다.

이후 dependency array 값이 바뀌면 다시 콜백 함수가 작동하고, 클로져 되어있던 기존 값을 기준으로 cleanup 함수가 작동함. 

```jsx
const App = () => {
  
  console.log('App 컴포넌트 랜더');
	const [value, setValue] = React.useState('111');

	useEffect(() => {
    const message = 'asdf';
    console.log('useEffect의 콜백함수 실행: ', message)
    const onClick = () => {
      alert(`현재 value는 ${message} 입니다!`);
    }
    document.addEventListener('click', onClick)

    function cleanup() {
      console.log('useEffect의 콜백함수 실행: ', message)
      document.removeEventListener('click', onClick)
    }
    console.log('cleanup 함수 만들어서 저장')
    return cleanup; 
  }, [ value ]);
}
export default App;
```

# **실습 0-0**

document를 클릭하면 input의 value를 console에 출력하도록 작성하기

```jsx
import React, { useEffect } from 'react'; 
const App = () => {
	const [value, setValue] = React.useState('');
  return (
    <input
      type='number'
			onChange={(e) => { setValue(e.target.value); }} 
		/>
	);
}
export default App;
```

- 클린 코드:
    
    ```jsx
    import React, { useEffect } from 'react'; 
    const App = () => {
    const ref = React.useRef();
    const [value, setValue] = React.useState('111');
    
    useEffect(() => {
    	const onClick = () => {
    		console.log(`현재 value는 ${ref.current.value} 입니다!`);
    	}
    	document.addEventListener(`click`, onClick)
    
    return (
        <input
          type='number'
    			value={value}
    			onChange={(e) => { setValue(e.target.value); }} 
    		/>
    	);
    }
    export default App;
    ```
    

---

# **실습 0-1**

document를 클릭하면 input의 value를 화면에 출력하도록 작성하기

```jsx
import React, { useEffect } from 'react'; 
const App = () => {
	const [value, setValue] = React.useState('');
  return (
    <div>
		<input
			type='number'
			onChange={(e) => { setValue(e.target.value); }}
		/>
		{/* 현재 값은 ~입니다. */} 
		</div>
	);
}
export default App;
```

- 클린 코드:
    
    ```jsx
    const App = () => {
      const [value, setValue] = React.useState('');
      const [lastValue, setLastValue] = React.useState('111');
    
      useEffect(() => {
        const onClick = () => {
          setLastValue(value);
        }
        document.addEventListener('click', onClick)
        function cleanup() {
          document.removeEventListener('click', onClick)
        }
        return cleanup;
      }, [value]);
        return (
          <div>
          <input
            type='number'
            onChange={(e) => { setValue(e.target.value); }}
          />
          {lastValue && `현재 값은 ${value}입니다.`} 
          </div>
      );
    }
      export default App;
    ```
    

---

# **실습1-0**

input value를 수정하면 3초 이후에 현재 value를 console.log를 통해 1회 출력하는 컴포넌트 만들기

```jsx
mport React, { useEffect } from 'react'; 
const App = () => {
	const [value, setValue] = React.useState('');
  return (
    <input
      type='number'
			onChange={(e) => { setValue(e.target.value); }} 
		/>
	);
}
export default App;
```

- 클린 코드:
    
    ```jsx
    const App = () => {
    	const [value, setValue] = React.useState('111');
      
      useEffect (() => {
        setTimeout(() => {
          console.log(value);
        }, 3000)
      }, [value])
      return (
        <input
          type='number'
    			onChange={(e) => { setValue(e.target.value); }} 
    		/>
    	);
    }
    export default App;
    ```
    
    ```jsx
    const App = () => {
      return (
        <>
    			<input
    				onChange={(e) => {
    					const a = e.target.value;
    					setTimeout(() => {
    					  console.log(a); 
    					}, 3000) 
    				});
    			/>
    		</>
    	);
    }
    export default App;
    ```
    

---

# **실습1-1**

실습 1-0 의 요구조건을 만족한채로 3초 경과하기 이전 value를 수정하면 다시 3초 대기
useEffect, dependency array, cleanup 활용하기

```jsx
const App = () => {
  const [value, setValue] = React.useState('');
  return (
    <input
      type='number'
      onChange={(e) => { setValue(e.target.value); }} 
    />
  );
}
export default App;
```

- 클린 코드:
    
    ```jsx
    const App = () => {
    	const [value, setValue] = React.useState('111');
      
      useEffect (() => {
        const timerId = setTimeout(() => {
          console.log(value);
        }, 3000)
        function cleanup() {
          clearTimeout(timerId);
        };
        return cleanup;
      }, [value])
      return (
        <input
          type='number'
    			onChange={(e) => { setValue(e.target.value); }} 
    		/>
    	);
    }
    export default App;
    ```
    

---

# **실습1-2**

실습 1-1 의 요구조건을 만족한채로, 남은 시간(단위: 초) 을 화면에 표시해주기

```jsx
const App = () => {
  const [value, setValue] = React.useState('');
  return (
    <div>
    <input
      type='number'
      onChange={(e) => { setValue(e.target.value); }}
    />
      {/* 남은시간 ?초 */} 
    </div>
  );
}
export default App;
```

- 클린 코드:
    
    ```jsx
    const App = () => {
      const [value, setValue] = React.useState('');
      const [left, setLeft] = React.useState();
      useEffect(() => {
        setLeft(3);
        const intervalTimerId = setInterval(() => {
          setLeft(prev => prev - 1);
        }, 1000)
        const timeoutTimerId = setTimeout(() => {
          console.log(value);
          clearInterval(intervalTimerId);
        }, 3000)
    
        function cleanup(){
          clearInterval(intervalTimerId);
          clearTimeout(timeoutTimerId);
        };
        return cleanup;
      }, [value]);
    
      return (
        <>
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <br />
          남은시간 {left}초
        </>
      );
    }
    
    export default App;
    ```
    

---

# **실습1-3**

실습 1-2 의 요구조건을 만족한채로, console.log대신 화면에 input의 값을 출력하기

```jsx
import React, { useEffect } from 'react'; const App = () => {
const [value, setValue] = React.useState('');
  return (
    <div>
<input
type='number'
onChange={(e) => { setValue(e.target.value); }}
/>
{/* 남은시간 ?초 */} {/* 값은 ~~입니다 */}
</div> );
}
```

- 클린 코드:
    
    ```jsx
    const App = () => {
      const [value, setValue] = React.useState('');
      const [left, setLeft] = React.useState();
      const [isShow, setIsShow] = React.useState(false);
      useEffect(() => {
        setLeft(3);
        setIsShow(false);
        const intervalTimerId = setInterval(() => {
          setLeft(prev => prev - 1);
        }, 1000)
        const timeoutTimerId = setTimeout(() => {
          console.log(value);
          setIsShow(true);
          clearInterval(intervalTimerId);
        }, 3000)
    
        function cleanup() {
          clearInterval(intervalTimerId);
          clearTimeout(timeoutTimerId);
        };
        return cleanup;
      }, [value]);
    
      return (
        <>
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <br />
          남은시간 {left}초
          <br />
          현재 값은 {value}입니다.
        </>
      );
    }
    
    export default App;
    ```
