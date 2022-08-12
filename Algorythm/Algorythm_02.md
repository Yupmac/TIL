# Map

![알고리즘#2_01.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/db5dd058-6b32-408d-97c6-dce073530810/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B72_01.png)

---

### 학급 회장

학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.
투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 
선생님은 그 기호를 발표하고 있습니다.
매개변수 s에 투표용지에 쓰여져 있던 각 후보의 기호가 선생님이 발표한 순서대로 문자열로 주어지면 
어떤 기호의 후보가 학급 회장이 되었는지 반환하는 프로그램을 작성하세요.
반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.

입출력 예:

![알고리즈#2_02.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/299f1b0a-b606-45bb-8500-1fd685039eff/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B32_02.png)

제한사항:

- 문자열 s의 길이는 100을 넘지 않습니다.

입력예제 1 설명 :

A기호 3표, B기호 3표, C기호 5표, D기호 2표, E기호 2표 를 받아 C가 학급회장이 되었습니다.

```jsx
function solution(s) {
  let answer = 0;
  let sH = new Map();
  for (let x of s) {
    sH.set(x, (sH.get(x) || 0) + 1)
  }
  let maxV = 0;
  for (let [key, val] of sH) {
    if(val > maxV) {
      maxV = val;
      answer = key;
    }
  }
  return answer;
}
```

---

### 한번 사용한 최초 문자

문자열에서 한번만 사용한 문자를 찾으려고 합니다.
한번만 사용한 문자 중 문자열에서 가장 먼저 나타난 문자의 인덱스 번호를 반환하는 프로그
램을 작성하세요. 인덱스는 1부터 시작합니다. 한번만 사용한 문자가 없을 경우 -1를 반환하
세요.

입출력 예:

![알고리즈#2_03.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/60ce3d20-732d-4577-b11c-b504ca52332d/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B32_03.png)

제한사항:

- 문자열 s의 길이는 100을 넘지 않습니다.
• 문자열은 소문자로만 이루어져 있습니다.

입력예제 1 설명 :

한번만 사용한 문자는 a, c이고, 문자열에서 먼저 나타난 것은 a이고 인덱스는 3입니다.

한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하려 합니다.
매개변수 s에 문자열이 주어지면 s문자열에 대문자가 몇 개있는지 개수를 반환하는 프로그램

```jsx
function solution(s) {
  let answer = 0;
  let sH = new Map();
  for (let x of s) {
    sH.set(x, (sH.get(x) || 0) + 1)
  }
  for (let i=0; i < s.length; i++) {
    if (sH.get(s[i]) === 1) 
    return i+1;
  }
  return -1;
}
```

---

### 두 번 이상 사용한 문자

문자열에서 두번만 사용한 문자를 찾으려고 합니다.
두번만 사용한 문자 중 문자열에서 가장 먼저 나타난 문자를 반환하는 프로그램을 작성하세
요. 두번만 사용한 문자가 없을 경우 -1를 반환하세요.

입출력 예:

![알고리즈#2_04.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b7da56f5-ad8f-4844-9ddb-89ebe10eda90/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B32_04.png)

제한사항:

- 문자열 s의 길이는 100을 넘지 않습니다.
• 문자열은 소문자로만 이루어져 있습니다.

```jsx
function solution(s) {
  cnt = {};
  for (let x of s) {
    cnt[x] = (cnt[x] || 0) + 1;
    if (cnt[x] === 2)
    return x;
  }
  return -1;
}

console.log(solution("abccbaacz")) // 3
console.log(solution("aabb")) // -1
console.log(solution("abcdefgbb")) // 3
```

---

### 빈도수가 1인 가장 큰 숫자

수열의 원소 중 빈도수가 1인 가장 큰 숫자를 찾으려고 합니다.
매개변수 nums에 수열이 주어지면 빈도수가 1인 숫자 중 가장 큰 숫자를 찾아 반환하는 프로
그램을 작성하세요. 빈도수가 1인 숫자가 없으면 -1를 반환합니다.

입출력 예:

![알고리즈#2_05.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/41864d7a-e2ca-4263-8a5b-600a07013f3d/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B32_05.png)

제한사항:

- nums의 길이 3<= n <=100,000
• nums의 원소는 1,000을 넘지 않는 자연수입니다.

```jsx
function solution(s) {
  let cnt = Array(1001).fill(0);
  for (let x of nums) {
    cnt[x]++;
  }
  for(let )
  return -1;
}
```

---

### 자기 분열수

자기 분열수란 배열의 원소 중 자기 숫자만큼 빈도수를 갖는 숫자를 의미합니다.
만약 배열이 [1, 2, 3, 1, 3, 3, 2, 4] 라면 1의 빈도수는 1, 2의 빈도수는 2, 3의 빈도수는
3, 4의 빈도수는 1입니다. 여기서 자기 숫자와 같은 빈도수를 갖는 자기 분열수는 2와 3입니
다.
매개변수 nums에 자연수가 원소인 배열이 주어지면 이 배열에서 자기 분열수 중 가장 작은
수를 찾아 반환하는 프로그램을 작성하세요. 자기 분열수가 존재하지 않으면 -1를 반환하세
요.

입출력 예:

![알고리즈#2_06.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/18d01108-71d3-4879-822a-3a4d43f4d8aa/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B32_06.png)

제한사항:

- nums 길이는 100,000을 넘지 않습니다.
• nums의 원소는 1,000,000,000을 넘지 않습니다.

```jsx
function solution(nums) {
  let answer = Number.MAX_SAFE_INTEGER;
  let nH = new Map();
  for (let x of nums) {
    nH.set(x, (nH.get(x) || 0) + 1);
  }
  for (let [key, val] of nH) {
    if (key === val) {
      if(key < answer)
      answer = key;
    }
  }
  if(answer === Number.MAX_SAFE_INTEGER) return -1;
  return answer;
}
```

---

### 같은 빈도수 만들기

소문자 a, b, c로 이루어진 문자열이 주어지면 해당 문자열에서 a, b, c의 최소의 개수를 추가
하여 a, b, c의 빈도수가 동일하게 되도록 해야 합니다. 동일빈도수가 되는 최소 추가 개수를
알파벳 a, b, c순으로 배열에 저장하여 반환하는 프로그램을 작성하세요.
만약 주어진 문자열이 "aaabc" 라면 빈도수는 a:3 , b:1, c:1 이고 최소 개수를 추가하여 동일
빈도수가 되게 하려면 b를 2개 추가, c를 2개 추가하면 모두 빈도수가 3개로 동일해집니다.

입출력 예:

![알고리즈#2_07.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ac76e596-3b9f-4fa2-8494-f94f145dbf66/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B32_07.png)

제한사항:

- 문자열 s의 길이는 100을 넘지 않습니다.

```jsx
function solution(s) {
  let answer = [];
  let sH = {};
  let maxF = 0;
  for (let x of s) {
    sH[x] = (sH[x] || 0) + 1;
    maxF = Math.max(maxF, sH[x]);
  }
  let tmp = "abc";
  for(let x of tmp) {
    let F = sH[x] === undefined ? 0 : sH[x];
    answer.push(maxF-F);
  }
  return answer;
}
```

---

### 서로 다른 빈도수 만들기

소문자로 이루어진 문자열이 주어지면 해당 문자열의 문자를 지워서 모든 문자의 빈도수가 서
로 다르게 만들려고 합니다.
만약 주어진 문자열이 "aaabbbcc" 라면 빈도수는 a:3 , b:3, c:2 이고 b문자를 2개 지우면
a:3 , b:1, c:2 가 되어 빈도수가 모두 다르게 됩니다.

매개변수 s에 문자열이 주어지면 s의 모든 문자의 빈도수가 서로 다르도록 하기 위해 지워야
할 최소 개수를 반환하는 프로그램을 작성하세요.

입출력 예:

![알고리즈#2_08.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b9ab20d4-59d6-481c-b6a3-b3541248bf43/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B32_08.png)

제한사항:

- 문자열 s의 길이는 100,000을 넘지 않습니다.

입력예제 2번 설명:
- “aebbbbc" 같은 경우 a, e 를 지워서 b의 빈도수 4, c의 빈도수 1로 만든다.

```jsx
function solution(s) {
  let answer = 0;
  let sH = {};
  let set = new Set();
  for(let x of s) {
    sH[x] = (sH[x] || 0) + 1;
  }
  for(let x of Object.keys(sH)) {
    while(set.has(sH[x])) {
      answer++;
      sH[x]--;
    }
    if(sH[x] === 0) continue;
    set.add(sH[x]);
  }
  return answer;
 };
```

---

### 팰린드롬 확인

소문자로만 이루어진 문자열이 주어지면 해당 문자열의 문자들의 순서를 재배치해서 팰린드롬 (회문)을 만들 수 있는지를 확인하고 싶습니다. 만약 “abbac"같은 문자열은 문자들을 ”abcba" 로 재 배치하면 팰린드롬을 만들 수 있습니다. 매개변수 s에 문자열이 주어지면 해당 문자열 이 재 배치를 통해 팰린드롬을 만들 수 있으면 true를 못 만들면 false를 반환하는 프로그램을 작성하세요.
입출력 예:

![알고리즈#2_09.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/48a16c9a-bbc7-4056-b8d1-01d99205bb85/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B32_09.png)

제한사항:
• 문자열 s의 길이는 100을 넘지 않습니다.

```jsx
function solution(s) {
        let sh = {};
        let set = new Set();
        for (let x of s) {
          sh[x] = (sh[x] || 0) + 1;
        }
        let odd = 0;
        for (let x of Object.keys(sh)) {
          if (sh[x] % 2 == 1) odd++;
        }
        return odd <= 1;
      }
```

---

### 팰린드롬 분할

소문자로만 이루어진 문자열이 주어지면 해당 문자열의 문자를 모두 사용해서 k개의 팰린드롬
을 만들 수 있는지 확인하고 싶습니다. 만약 문자열이 "aabbccee"이고, k=2이면 해당 문자열
을 다 사용해서 "abba", "ceec"와 같이 2개를 만들 수 있습니다.
매개변수 s에 문자열이 주어지고, 매개변수 k에 팰린드롬을 만들 개수가 주어지면 s문자열의
모든 문자를 사용해서 k개의 문자를 만들 수 있으면 true, 만들 수 없으면 false를 반환하는
프로그램을 작성하세요.

입출력 예:

![알고리즈#2_10.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/67f62870-f549-4ddf-8880-cad88bd49050/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B32_10.png)

제한사항:

- 문자열 s의 길이는 100,000을 넘지 않습니다.
• 1<=k<=100,000

```jsx
function solution(s, k) {
  let sH = {};
  for (let x of s) {
    sH[x] = (sH[x] || 0) + 1;
  }
  let odd = 0;
  for (let x of Object.keys(sH)) {
    if (sH[x] % 2 == 1) odd++;
  }
  return odd <= k;
}
```

---

### 팰린드롬 길이(과제)

문자열이 주어지면 해당 문자열의 문자들을 가지고 만들 수 있는 최대길이 팰린드롬을 만들고
그 길이를 구하세요. 문자열은 소문자로만 이루어져 있습니다.
만약 “abcbbbccaa" 가 주어진다면 만들 수 있는 가장 긴 팰린드롬은 ”bbcaaacbb"이고 답은
9입니다.

입출력 예:

![알고리즈#2_11.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/26c6b058-031f-4db5-bea7-bc29277bef33/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B32_11.png)

제한사항:

- 문자열 s의 길이는 100을 넘지 않습니다.

```jsx

```

---
