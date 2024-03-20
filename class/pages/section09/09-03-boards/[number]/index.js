import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
    query fetchBoard($number: Int) {
        fetchBoard(number: $number) {
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutingMovedPage() {
    const router = useRouter()
    const number  = Number(router.query.number)

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: number }
    })

    const onClickMove = () => {
        router.push(`/section09/09-03-boards/${number}/edit`)
    }

    return (
        <div>
            <div>{number}번 게시글 이동이 완료되었습니다!</div>
            <div>작성자: {data?.fetchBoard?.writer}</div> 
            <div>제목: {data?.fetchBoard?.title}</div>
            <div>내용: {data?.fetchBoard?.contents}</div>
            <button onClick={onClickMove}>수정하기</button>
        </div>
    )   
}