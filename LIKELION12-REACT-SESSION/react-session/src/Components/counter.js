//counter.js
import React, { useState } from 'react';

function Counter() {
	
	//number라는 상태(state)변수와 number를 바꿔주는 함수 setNumber
	//useState 초기값을 0으로 초기화
  const [number, setNumber] = useState(0);

	//숫자를 증가시키는 onIncrease 함수 안에 setNumber 호출 후 1 더하기
  const onIncrease = () => {
    setNumber(number + 1);
  }

	//숫자를 감소시키는 onDecrease 함수 안에 setNumber 호출 후 1 빼기
  const onDecrease = () => {
    setNumber(number - 1);
  }

	//h1 태그 안에 데이터 바인딩 활용해 number 추가
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;