import { useState } from 'react';
import { Rate } from 'antd';

export default function App(): JSX.Element {
  const [value, setValue] = useState(3);

  // 1단계 방식
  // const onChangeStar = (value: number): void => {
  //   setValue(value);
  // };

  // 2단계 방식
  // const onChangeStar = (value) => setValue(value);

  return (
    // <Rate onChange={onChangeStar} value={value} /> // 1단계 방식
    // <Rate onChange={onChangeStar} value={value} /> // 2단계 방식
    // <Rate onChange={(value) => setValue(value)} value={value} /> // 3단계 방식
    <Rate onChange={setValue} value={value} /> // 4단계 방식, 함수로 들어오는 인자 값이 다음 함수의 인자로 그대로 전달될 때 생략 가능하다(3->4단계)
  );
}
