import { useQuery, gql } from "@apollo/client"

const FETCH_BOARD = gql`
    query {
        fetchBoard(number: 22393) {
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutingMovedPage() {
    //useMutation과 다르게 {} 사용
    //useMutation과 다르게 useQuery는 바로 실행됨
    const { data } = useQuery(FETCH_BOARD)

    console.log(data) //정상 출력됨
    // console.log(data.fetchBoard.writer) //에러남 - 아래 html부분도 에러남
    //useQuery로 데이터를 요청하고 받아오는 동안 화면도 그려지기 때문에 데이터가 없어서(undefined) 오류 발생
    /* 
        원리
        1. useQuery로 데이터를 받아오는 동안(data=undefined일 때) 하드코딩된 데이터를 먼저 화면에 보여주고
        2. data를 다 가져왔을 때 data를 사용하는 부분을 그려주자
    */
    return (
        <div>
            <div>3번 게시글 이동이 완료되었습니다!</div>
            <div>작성자: {data?.fetchBoard.writer}</div> 
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}</div>
        </div>
    )   
}