import { useQuery, gql } from "@apollo/client"

const FETCH_BOARD = gql`
    query {
        fetchBoards {
            number
            writer
            title
            contents
        }
    }
`

export default function MapBoardPage() {
    const { data } = useQuery(FETCH_BOARD)
    
    return (
        <div>
            {data?.fetchBoards.map(el => (
                <div>
                    <input type="checkbox"/>
                    <span style={{margin: "10px"}}>{el.number}</span> 
                    <button style={{margin: "10px"}}>{el.title}</button> 
                    <span style={{margin: "10px"}}>{el.writer}</span>
                </div>
            ))}
            {/* <div>1번 게시글 이동이 완료되었습니다!</div>
            <div>작성자: {data?.fetchBoard?.writer}</div> 
            <div>제목: {data?.fetchBoard?.title}</div>
            <div>내용: {data?.fetchBoard?.contents}</div> */}
        </div>
    )   
}