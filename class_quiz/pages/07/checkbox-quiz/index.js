import styled from "@emotion/styled";
import { useState } from "react";

// 스타일
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px;
`;
const Wrapper = styled.table`
  width: 600px;
`;
const MyTr = styled.tr`
  text-align: center;
`;
const MyTd = styled.td`
  padding: 20px 0 20px 0;
`;

export default function Quiz02() {
  // 리스트에 뿌려줄 목업 데이터
  const dataList = [
    { id: 1, data: "9월달 시스템 점검 안내입니다.", date: "2020.09.19" },
    { id: 2, data: "안녕하세요! 공지사항 전달드립니다.", date: "2020.09.17" },
    { id: 3, data: "개인정보 처리방침 변경 사전 안내", date: "2020.09.12" },
    { id: 4, data: "ios 10.0이하 지원 중단 안내", date: "2020.08.10" },
    { id: 5, data: "이용약관 변경 사전 안내", date: "2020.08.01" },
    { id: 6, data: "개인정보 처리방침 변경 사전 안내", date: "2020.07.19" },
  ];

  const [checkedList, setCheckedList] = useState([])
  
  const onChangeCheck = (list) => {
    if(checkedList.filter(item => item.id === list.id).length) { //이미 checkedList에 있으면
        setCheckedList(checkedList.filter(item => item.id !== list.id)) //checkedList에서 제외
    } else {
        setCheckedList([...checkedList, list])
    } 
  }

  const onChangeCheckAll = () => {
    if(checkedList.length !== dataList.length) {
        setCheckedList(dataList)
    } else {
        setCheckedList([])
    }
  }

  const isChecked = (id) => {
    return checkedList.some(item => item.id === id)
  }

  return (
    <Container>
      <Wrapper>
        <tr>
          <th>
            <input
              type="checkbox"
              onChange={onChangeCheckAll}
              checked={checkedList.length === dataList.length}
              style={{marginTop:"5px"}}
            ></input>
          </th>
          <th>번호</th>
          <th>제목</th>
          <th>작성일</th>
        </tr>
        {dataList.map(list => (
          <MyTr key={list.id}>
            <MyTd>
              <input
                type="checkbox"
                checked={isChecked(list.id)}
                onChange={() => onChangeCheck(list)}
                style={{marginTop:"5px"}}
              />
            </MyTd>
            <MyTd>{list.id}</MyTd>
            <MyTd>{list.data}</MyTd>
            <MyTd>{list.date}</MyTd>
          </MyTr>
        ))}
      </Wrapper>
    </Container>
  );
}