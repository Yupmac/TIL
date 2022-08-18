# 배열 메소드

![알고리즘#3_01.png](https://github.com/Yupmac/TIL/blob/main/img/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B7%233_01.png)

---

### 보이는 학생

선생님이 반 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에서부터 순서대로 주어질 때, 
맨 앞에 서 있는 선생님이 볼 수 있는 학생수가 몇 명인지 알고싶습니다. 
(앞에 서있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)
매개변수 nums에 일렬로 선 학생의 키가 앞학생부터 차례대로 주어지면 
선생님이 볼 수 있는 학생수를 반환하는 프로그램을 작성하세요.

입출력 예:

![알고리즘#3_02.png](https://github.com/Yupmac/TIL/blob/main/img/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B7%233_02.png)

제한사항:

- nums 길이는 100,000을 넘지 않습니다.
- nums의 원소값은 1이상 1000이하입니다.

```jsx
function solution(nums){         
	let answer=1;
	let flag=true;
	for(let i=1; i<nums.length; i++){
		flag=true;
		for(let j=i-1; j>=0; j--){
			if(nums[j]>=nums[i]){
				flag=false;
				break;
			}
		}
		if(flag) answer++;
	}
	return answer;
}
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([7, 7, 7, 9, 9, 9, 12]));
```

```jsx
function solution(nums) {
  let result = 1;
  let maxV = nums[0];

  for(let i = 1; i < nums.length; i++) {
    if(nums[i] > maxV) {
      result++;
      maxV = nums[i];
    }
  }
  return result;
}
```

---

### 점수계산

OX 문제는 맞거나 틀린 두 경우의 답을 가지는 문제를 말한다. 
여러 개의 OX 문제로 만들어진 시험에서 연속적으로 답을 맞히는 경우에는 
가산점을 주기 위해서 다음과 같이 점수 계산을 하기로 하였다. 
1번 문제가 맞는 경우에는 1점으로 계산한다. 
앞의 문제에 대해서는 답을 틀리다가 답이 맞는 처음 문제는 1점으로 계산한다. 
또한, 연속으로 문제의 답이 맞는 경우에서 두 번째 문제는 2점, 세 번째 문제는 3점, ..., 
K번째 문제는 K점으로 계산한다. 틀린 문제는 0점으로 계산한다.

예를 들어, 아래와 같이 10 개의 OX 문제에서 답이 맞은 문제의 경우에는 1로 표시하고, 
틀린 경우에는 0으로 표시하였을 때, 점수 계산은 아래 표와 같이 계산되어, 
총 점수는 1+1+2+3+1+2=10 점이다.

![알고리즘#3_03.png](https://github.com/Yupmac/TIL/blob/main/img/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B7%233_03.png)

매개변수 nums에 시험문제의 채점 결과가 주어졌을 때, 
총 점수를 계산하는 프로그램을 작성하시오.

입출력 예:

![알고리즘#3_04.png](https://github.com/Yupmac/TIL/blob/main/img/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B7%233_04.png)

[1차원 배열 시뮬레이션]

제한사항:

- nums 길이는 100,000을 넘지 않습니다.

```jsx
function solution(nums) {
  let answer = 0;
  let score = 0;

  for(let x of nums) {
    if(x === 1) {
      score++;
      answer += score;
    } else {
      score = 0;
    }
  }
  return answer;
}
```

---

### 가장 높은 증가수열

수열이 주어지면 이 수열에서 연속된 부분 증가수열을 찾습니다. 
각 부분증가수열은 높이가 있습니다. 
증가수열의 높이란 증가수열의 첫항과 마지막항의 차를 의미합니다.
매개변수 nums에 수열이 주어지면 여러 증가수열 중 가장 높은 부분증가수열을 찾아 
그 높이를 반환하는 프로그램을 작성하세요.

만약 수열이 [5, 2, 4, 7, 7, 3, 9, 10, 11]이 주어지면 가장 높은 부분증가수열은 
[3, 9, 10, 11]이고, 높이는 8입니다.
주의 : 이웃하는 두 수가 같을 경우 증가수열로 보지 않습니다.

입출력 예:

![알고리즘#3_05.png](https://github.com/Yupmac/TIL/blob/main/img/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B7%233_05.png)

제한사항: 

- nums의 길이 3<= n <=100,000
- 배열 nums의 원소는 자연수입니다.

입력예제 2 설명 :
가장 높은 부분증가수열은 [6, 20]입니다.

```jsx
function solution(nums) {
  let answer = 0;
  let height = 0;

  for(let i = 0; i < nums.length - 1; i++) {
    if(nums[i] < nums[i + 1]) {
      height += nums[i + 1] - nums[i];
    } else {
      if (answer < height) {
        answer = height;
        height = 0;        
      }
    }
  }
  if(answer < height) answer = height;
  return answer;
}
```

```jsx
function solution(nums){         
    let answer=0, sum=0;
	nums.push(0);
	for(let i=0; i<nums.length-1; i++){
		for(let j=i; j<nums.length-1; j++){
			if(nums[j]>=nums[j+1]){
				answer=Math.max(answer, nums[j]-nums[i]);
				break;
			}
		}
	}
    return answer;
}

console.log(solution([8, 12, 2, 3, 7, 6, 12, 20, 3]));
```

```jsx
function solution(nums){         
    let answer=0, sum=0;
	for(let i=0; i<nums.length-1; i++){
		if(nums[i]<nums[i+1]){
			sum+=(nums[i+1]-nums[i])
		}
		else{
			answer=Math.max(answer, sum);
			sum=0;
		}
	}
	answer=Math.max(answer, sum);
    return answer;
}

console.log(solution([5, 2, 4, 7, 7, 3, 9, 10, 11]));
```

---

### 바이토닉 수열

바이토닉 수열이란 수열이 증가했다가 감소하는 수열을 의미합니다.
길이가 n인 수열이 매개변수 nums에 주어지면 
이 수열이 바이토닉 수열인지 판별하는 프로그램을 작성하세요.
만약 [1, 2, 3, 4, 2, 1]이면 바이토닉 수열입니다. 하지만 [1, 2, 2, 3, 2, 1]과 같이 
같은 값이 연속으로 있으면 바아토닉 수열이라 하지 않습니다.

입출력 예:

![알고리즘#3_06.png](https://github.com/Yupmac/TIL/blob/main/img/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B7%233_06.png)

제한사항:

- nums의 길이 3<= n <=30
- 배열 nums의 원소는 자연수입니다.

```jsx
function solution(nums) {
  let answer = "YES";
  let n = nums.length;
  let i = 0;

  while(i < n-1 && nums[i] < nums[i + 1]) i++;
    if( i === 0 || i === n-1 ) {
      return "NO";
    }
  while(i < n-1 && nums[i] > nums[i + 1]) i++;
    if(i !== n-1) {
      return "NO";
    } 
  return answer;
}
```

---

### 최대길이 바이토닉

바이토닉 수열이란 수열이 증가했다가 감소하는 수열을 의미합니다.
매개변수 nums에 길이가 n인 수열이 주어지면 이 수열의 연속부분수열 중 가장 긴 바이토닉 수열을 찾아 
그 길이를 반환하는 프로그램을 작성하세요.
만약 [1, 3, 2, 5, 7, 4, 2, 5, 1]수열이 주어지면 이 수열의 연속부분수열 중 가장 긴 바이토닉 수열은 
[2, 5, 7, 4, 2]이고, 답은 5입니다.

입출력 예:

![알고리즘#3_07.png](https://github.com/Yupmac/TIL/blob/main/img/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B7%233_07.png)

제한사항:

- nums의 길이 3<= n <=10,000
- 배열 nums의 원소는 자연수입니다.

```jsx
function solution(nums) {
  let answer = 0;
  let n = nums.length;
  let peak = []
  for(let i=1; i < n-1; i++) {
    if(nums[i-1] < nums[i] && nums[i] > nums[i+1]) {
      peak.push(i);
    }
  }
  for(let pos of peak) {
    let lt = pos;
    let rt = pos;
    let len = 1;
    while(lt > 0 && nums[lt-1] < nums[lt]) {
      len++;
      lt--;
    }
    while(rt < n-1 && nums[rt+1] < nums[rt]) {
      len++;
      rt++;
    }
    answer = Math.max(answer, len);
  }
  // pos 는 봉우리 숫자의 인덱스이다.
  // 봉우리 숫자를 찾는 방법: 양 옆 숫자보다 큰지 확인
  // 봉우리 숫자만 따로 peak 배열로 빼서 정리한다. [n[1], n[4], n[7]]
  return answer;
}
```

```jsx
function solution(nums){         
    let answer=0;
	let n=nums.length;
	let peak=[];
	for(let i=1; i<n-1; i++){
		if(nums[i-1]<nums[i] && nums[i]>nums[i+1]) peak.push(i);
	}
	for(let p of peak){
		let lt=p;
		let rt=p;
		let cnt=1;
		while(lt>0 && nums[lt-1]<nums[lt]){
			cnt++;
			lt--;
		}
		while(rt<n-1 && nums[rt]>nums[rt+1]){
			cnt++;
			rt++;
		}
		answer=Math.max(answer, cnt);
	}
    return answer;
}
console.log(solution([1, 3, 2, 5, 7, 4, 2, 5, 1]));
console.log(solution([1, 2, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]));
console.log(solution([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]));
```

---

### 키보드

현수의 키보드 자판은 k개의 자판만 사용할 수 있습니다.
만약 teacher 이라는 단어를 완성하려면 6개의 자판이 필요합니다.

만약 Teacher 단어를 완성하려면 7개의 자판이 필요합니다. 이 단어를 완성하려면 대문자 T를
써야 하는데 이 때는 shift키와 소문자 ‘t'키를 눌러야 하기 때문입니다.

하나의 단어를 k개의 키로 완성할 수 있는지를 알고 싶습니다.

매개변수 s에 단어가 주어지고, 매개변수 k에 사용할 수 있는 키의 개수가 주어지면 s단어를
k개의 키로 완성할 수 있으면 true, 없으면 false를 반환하는 프로그램을 작성하세요.

입출력 예

![알고리즘#3_08.png](https://github.com/Yupmac/TIL/blob/main/img/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B7%233_08.png)

제한사항:
• s문자열은 대소문자로만 이루어져 있습니다.
• 1 ≤ s의 길이 ≤ 1,000
• 1 ≤ k ≤ 30

```jsx
function solution(s, k){
	let sH=new Map();
	for(let x of s){
		if(x===x.toUpperCase()){
			sH.set("shift", 1);
			x=x.toLowerCase();
		}
		sH.set(x, 1);
	}
	return sH.size<=k;

}
console.log(solution("TteacHer", 7));
```

```jsx
function solution(s, k){
	let ch=Array(27).fill(0);
	for(let x of s){
		let num=x.charCodeAt();
		if(num>=65 && num<=90){
			ch[26]=1;
			ch[num-65]=1;
		}
		else ch[num-97]=1;
	}
	let cnt=0;
	for(let i=0; i<=26; i++){
		if(ch[i]===1) cnt++;
	}
	return cnt<=k;
}
console.log(solution("TteacHer", 7));
```

---

### k이상 빈도수 문자

문자열에서 각 문자의 빈도수가 k이상인 문자만 추출하고 싶습니다.
매개변수 s에 문자열과 매개변수 k값이 주어지면 문자열 s에서 빈도수가 k개 이상인 문자만
추출하여 반환하는 프로그램을 작성하세요.
주출순서는 알파벳순으로 하고, 대문자가 소문자보다 우선하여 추출됩니다.
만약 A, B, a, b, c가 추출된다면 그 순서는 AaBbc 순서로 추출하여 반환합니다.

입출력 예

![알고리즘#3_09.png](https://github.com/Yupmac/TIL/blob/main/img/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B7%233_09.png)

제한사항:
• s문자열은 대소문자로만 이루어져 있습니다.
• 1 ≤ s의 길이 ≤ 1,000
• 1 ≤ k ≤ 20

```jsx
function solution(s, k){
	let ch=Array(52).fill(0);
	for(let x of s){
		let num=x.charCodeAt();
		if(num>=65 && num<=90){
			ch[(num-65)*2]++;
		}
		else ch[(num-97)*2+1]++;
	}
	let answer="";
	for(let i=0; i<52; i++){
		if(ch[i]>=k){
			if(i%2==0) answer+=String.fromCharCode(i/2+65);
			else answer+=String.fromCharCode((i-1)/2+97);
		}
	}
	return answer;
}
console.log(solution("TATteEaccHAaeEr", 2))g
```

