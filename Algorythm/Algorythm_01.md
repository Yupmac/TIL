<aside>
💡 split 의 패턴 → 기준이 되는 매개변수 수에 +1 하면 배열 안의 요소 수와 같다.

</aside>

<aside>
💡 각 자료형에 속한 메소드 구조 및 문법을 빠삭하게 익히고, 많은 문제 유형을 경험하면서 문제 해결 능력을 기르자.

</aside>

![알고리즘#1_01.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b55b585d-76c2-473e-b00b-56a859a95f57/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B71_01.png)

![알고리즘#1_02.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/98c6cb05-cd4f-43fe-9207-baa6b2ab5624/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B71_02.png)

## 문자 찾기

한 개의 문자열을 입력받고, 특정 문자가 입력 받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
매개변수 s에 문자열이 주어지고, 매개변수 c에 찾을 문자가 주어지면 s문자열에 c문자가 몇 개 있는지 확인하여 
그 개수를 반환하는 프로그램을 작성하세요.

제한사항:

- 문자열 s의 길이는 100을 넘지 않습니다.
- 문자열 s는 대문자로만 이루어져 있습니다.
    
    ![알고리즘#2_03.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fb49478b-508d-4d73-857b-fc830216743c/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B72_03.png)
    

```jsx
function solution(s, c) {
  let answer = 0;
  for (let i=0; i < s.length; i++) {
    if(s[i] === c) answer++;
  }
  return answer;
}
```

```jsx
function solution(s, c) {
  let answer = 0;
  answer = s.split(c);
  return answer.length-1;
}
```

---

## 대문자 찾기

한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하려 합니다.
매개변수 s에 문자열이 주어지면 s문자열에 대문자가 몇 개있는지 개수를 반환하는 프로그램을 작성하세요.

![알고리즘#1_04.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/66c7a553-edf3-487d-8828-52dc9c2df1c8/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B71_04.png)

제한사항:

- 문자열 s의 길이는 100을 넘지 않습니다.

```jsx
function solution(s) {
  let answer = 0;
  
  for (let i=0; i < s.length; i++) {
    if(s[i].charCodeAt() <= 90 && s[i].charCodeAt() >= 65 ) answer++;
  }
  return answer;
}
```

```jsx
function solution(s) {
  let answer = 0;
  for(let x of s) {
    let num = x.charCodeAt();
    if(num>=65 && num<=90) answer++;
  } 
  return answer;
}
```

```jsx
function solution(s) {
  let answer = 0;
  for(let x of s) {
    if(x === x.toUpperCase()) answer++;
  } 
  return answer;
}
```

---

## 대소문자 변환

대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하려고 합니다.
매개변수 s에 대소문자가 존재하는 문자열이 입력되면 문자열 s의 대문자는 소문자로, 
소문자는 대문자로 변환하여 반환하는 프로그램을 작성하세요.

![알고리즘#1_05.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fefb12e7-ddd1-41d9-8c64-47b17f80d91b/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B71_05.png)

제한사항:

- 문자열 s의 길이는 100을 넘지 않습니다.

```jsx
function solution(s) {
  let answer = "";
  for (let x of s) {
    if(x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }
  return answer; 
}
```

---

## 가장 긴 문자열

N개의 문자열이 입력되면 그 중 가장 긴 문자열을 찾으려고 합니다.
매개변수 s에 N개의 문자열이 주어지면 그 중 가장 긴 문자열을 반환하는 프로그램을 작성하세요. 
답이 여러개면 s배열에서 제일 먼저 나타나는 문자열을 답으로 합니다.

![알고리즘#1_06.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/49bbcbe8-0f33-40ee-9acf-5f97be93bdec/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B71_06.png)

제한사항:

- 문자열 배열 s의 길이는 30을 넘지 않습니다.
- 문자열 배열 s의 원소인 문자열은 길이가 100을 넘지 않습니다.

```jsx
function solution(s) {
  let answer = "", maxL = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if(x.legnth > maxL) {
      maxL = x.legnth;
    } 
  }
  return answer; 
}
```

---

## 중복문자제거

소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하려고 합니다.
매개변수 s에 문자열이 입력되면 중복된 문자는 제거하고 모든 문자는 오직 하나만 있게 하여
반환하는 프로그램을 작성하세요.
제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

![알고리즘#1_07.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0bb539e1-4870-4cdc-a55e-8a307176c145/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B71_07.png)

제한사항:

- 문자열의 길이는 100을 넘지 않습니다.

```jsx
function solution(s) {
  let answer = [...new Set(s.split(''))].join('');
  return answer;
};
console.log(solution("ksekkset"));

/* split()로 하나씩 쪼개고, Set()으로 중복 제거하고, [...] 으로 배열화하고 join()으로 다시 문자열로 바꾼다. */
```

```jsx
function solution(s) {
  let answer = s.split('').filter((v, i, self) => self.indexOf(v) === i).join('');
};
console.log(solution("ksekkset"));
```

---

## 공통 문자열

N개의 문자열이 주어지면 이 문자열들의 최대 공통 접두사를 출력하는 프로그램을 작성하세요. 
만약 문자열들이 [“long", "longtime", "longest"] 라면 세 단어의 최대 공통 접두사는 ”long"입니다.
매개변수 s에 N개의 문자열이 주어지면 각 문자열들의 최대 공통 접두사를 반환하는 프로그램을 작성하세요. 
공통 접두사는 반드시 존재합니다.

![알고리즘#1_08.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/86e2c606-5a5d-4c52-b84c-c01fbe74ff40/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B71_08.png)

제한사항:

- 문자열 배열 s의 길이는 30을 넘지 않습니다.
- 문자열 배열 s의 원소인 문자열은 길이가 100을 넘지 않습니다.

```jsx
function solution(s) {
  let answer = '';
  let len = Number.MAX_SAFE_INTEGER;
  s.forEach(x => {
    len = Math.min(len, x.length);
  }); // 최소값 구하는 패턴
  for(let i = 0; i < len; i++) {
    let set = new Set();
    s.forEach(x => {
      set.add(x[i]);
    });
    if (set.size === 1) answer += s[0][i];
    else break;
  }
  return answer;
};
console.log(solution(["long", "longtime", "longest"]));
```

---

## 문자열 압축 ← 중요!

알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 
반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하려고 합니다.
매개변수 s에 문자열이 입력되면 반복횟수를 표기하는 방법으로 문자열을 압축하여 
반환하는 프로그램을 작성하세요. 단, 반복횟수가 1인 경우 생략합니다.

![알고리즘#1_09.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4467d5bf-fbf5-4615-84f3-d17c28ddff2d/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B71_09.png)

제한사항:

- 문자열 s의 길이는 100을 넘지 않습니다.

```jsx
function solution(s) {
  let answer = '';
  let cnt = 1;
  s = s + ' ';
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if(cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
};
console.log(solution("KKHSSSSSSSE"));
```

---

## 회문 문자열 ← 필수(유명한 문제)

앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
매개변수 s에 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 
회문 문자열이 아니면 “NO"를 출력하는 프로그램을 작성하세요.
단, 회문을 검사할 때 대소문자를 구분하지 않습니다.

![알고리즘#1_10.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7ce17319-bff8-4568-80ce-cfad321ead99/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B71_10.png)

제한사항:

- 문자열 s의 길이는 100을 넘지 않습니다.

```jsx
function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase();

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if(s[i] !== s[s.length - i - 1]) return "NO";
  } // 첫번째 방법

  let left = 0;
  let right = s.length - 1;
  while(left < right) {
    if (s[left] !== s[right]) return "NO";
    else {
      left++;
			right--;
    } // 두번째 방법
  
  if(s.split('').reverse('').join('') !== s) return "NO"; // 세번째 방법
  return answer;
};
console.log(solution("gooG"));
```

---

## 회문문자열2

문자열 s가 주어지면 s가 최대 문자 1개까지 지워서 회문문자열이 되면 “YES"를 출력하고, 그 렇지 않으면 ”NO"를 출력하는 프로그램을 작성하세요.

![알고리즘#1_11.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/20ae5009-763e-453e-ba7b-b01c30241240/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B71_11.png)

제한사항:

- 문자열 s의 길이는 100을 넘지 않습니다.

```jsx
function solution(s) {
  let answer = 'YES';
  let lt = 0;
  let rt = s.length - 1;
  while(lt < rt) {
    if (s[lt] !== s[rt]) {
      let s1 = s.substring(lt, rt);
      let s2 = s.substring(lt + 1, rt + 1);
      if (s1 !== s1.split('').reverse().join('') && s2 !== s2.split('').reverse().join('')) return "NO";
      break; 
    }
    else {
      lt++;
      rt--;
    }
  }
  return answer;
};
console.log(solution("abcabbakcba"));
```

---

## 문자열의 숫자화(과제)

영어문자열이 주어지면 숫자로 변환하는 프로그램을 작성하고 싶습니다.
"zero"=0,
"one"=1,
"two"=2,

"three"=3,
"four"=4,
"five"=5,
"six"=6,
"seven"=7,
"eight"=8,
"nine"=9
위와 같이 문자열을 숫자로 변환합니다.
만약 입력된 문자열이 "fivesevenzero"는 570으로 변환됩니다.
만약 입력된 문자열이 "zerofiveseven"는 057이지만 첫 자리 0은 무시하고 57로 변환합니다.

![알고리즘#1_12.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a4c7d91b-a3fc-4a6b-93c8-ce97cd384702/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B71_12.png)

제한사항:

- 문자열 s의 길이는 100을 넘지 않습니다.

```jsx
function solution(s) {
  const numDict = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };
  return +s.replace(new RegExp(Object.keys(numDict).join('|'), 'g'), (match) => numDict[match]);
}
```

```jsx
function solution(s) {
  let answer = 0;
  let nums = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ]
  for(let i = 0; i <= 9; i++) {
    let tmp = s.split(nums[i]);
    s = tmp.join(i);
    console.log(s);
  }
  answer = parseInt(s);
  return answer;
}
```

```jsx
function solution(s) {
  let answer = 0;
  let nums = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ]
  for(let i = 0; i <= 9; i++) {
    s = s.replaceAll(nums[i], i);
  }
  answer = parseInt(s);
  return answer;
}
```
