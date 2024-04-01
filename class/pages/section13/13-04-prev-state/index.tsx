import { useState } from 'react';

export default function CounterLetDocumentPage() {
  // let count = 0 //let은 리액트 전용 html에서 변경을 감지하지 못함
  const [count, setCount] = useState(0);

  function onClickCountUp() {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // count = 5가 아니고 1이 됨. 왜?
    // setState는 임시 저장공간에 값을 저장해뒀다가 함수가 끝날 때 한 번에 바꿔서 렌더링을 실행하기 때문에.

    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // prev: 임시 저장공간에 저장된 값
  }

  // function onClickCountDown() {
  //  setCount(count - 1);
  // }

  return (
    <>
      <div id="count">{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      {/* <button onClick={onClickCountDown}>카운트 내리기</button> */}
    </>
  );
}
